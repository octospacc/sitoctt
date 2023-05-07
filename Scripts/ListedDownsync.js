#!/usr/bin/env -S node --experimental-fetch
require('./Lib/Syncers.js').importAll();
const JSDOM = require('jsdom').JSDOM;

const BlogURL = 'https://listed.to/@u8'; // Full base URL of the Listed blog (any server)
const SiteName = 'sitoctt';
//const DefaultMode = 'Include' // 'Include' or 'Exclude' | Not implemented
const PostsFileDate = true; // Append dates (YYYY-MM-DD) to posts file names
let Replacements = { // Format: { ReplaceWithString: [ToFindString] }
	"<h2>[:HNotesRefsHTML:]</h2>": "<h2>🏷️ Note e Riferimenti</h2>",
	'<div class="footnotes">': ['<div class="footnotes"><hr>', '<div class="footnotes">\n<hr>'],
	'"><a class="footnote-ref" href="#fn': '"><a href="#fn',
	" href=\"[staticoso:CustomPath:Assets]/": " href=\"https://sitoctt-assets.octt.eu.org/",
	" src=\"[staticoso:CustomPath:Assets]/": " src=\"https://sitoctt-assets.octt.eu.org/",
	'<div class="highlight CodeScroll">': '<div class="highlight">',
	//'<iframe src="[:YouTubeURL:]/' :'<iframe src="https://www.youtube-nocookie.com/',
	'<video src="[:YouTube360:]' :'<iframe src="https://www.youtube-nocookie.com/embed/',
	'></video>': ' class="YouTube"></iframe>',
	// TODO: Fix anchor rels
};
const TestURL = 'https://listed.to/p/hDaMhJ2ts7';

const MetadataBlockSelect = '.MetadataBlock, .MetadataBlock + :Where(Div, Pre, Code)';
const ReplacementsBlockSelect = '.ReplacementsBlock, .ReplacementsBlock + :Where(Div, Pre, Code)';
const ExtractCodeBlockSelect = '.ExtractCodeBlock, .ExtractCodeBlock + :Where(Div, Pre, Code)';
const DeleteElementBlockSelect = '.DeleteElementBlock';

const TryReadFileSync = Path => {
	if (Fs.existsSync(Path)) {
		return Fs.readFileSync(Path, 'utf8');
	};
};

const TryMkdirSync = Path => {
	if (!Fs.existsSync(Path)) {
		return Fs.mkdirSync(Path, {recursive: true});
	};
};

const GetPath = URL => {
	if (URL.startsWith('http://') || URL.startsWith('https://')) {
		URL = URL.split('/').slice(3).join('/');
	};
	return URL;
};

const GetFragHTML = Frag => {
	let Dom = new JSDOM('<body></body>');
	Dom.window.document.body.appendChild(Frag);
	return Dom.window.document.body.innerHTML.trim();
};

const CSSFirstTokenSelector = Select => {
	return Select.trim().replaceAll('.', '').replaceAll(',', '').split(' ')[0];
};

const CheckDownsync = Body => {
	if (Body) {
		const Lines = Body.trim().toLowerCase().split('\n');
		for (let i=0; i<Lines.length; i++) {
			const Line = Lines[i].trim()
			const CheckLine = Line.replaceAll('	', ' ').replaceAll(':', ' : ').replaceAll('=', ' = ');
			if (CheckLine.startsWith('// ')) {
				const Tokens = CheckLine.split(' ').filter(i => {return i != ''});
				if (Tokens[1] == '%' && Tokens[2] == 'downsync' && [':', '='].includes(Tokens[3])) {
					if (['false', 'disabled', 'off', 'no', '0'].includes(Tokens[4])) {
						return false;
					} else if (Tokens[4].startsWith('/')) {
						return Line.substring(Line.indexOf('/', 2));
					};
				};
			};
		};
	};
	return true;
};

const GetLinkElem = Dom => {
	let Elem;
	Elem = Dom.querySelector(`.Mirror-${SiteName}`);
	if (!Elem) {
		Elem = Dom.querySelector(`.Mirror-${SiteName}-Include`);
	};
	return Elem;
};

const MakeMetaStr = Post => {
	let Str = '';
	['Meta', 'Macros'].forEach((Type) => {
		const Marks = { Meta: "%", Macros: "$", };
		Object.keys(Post[Type]).forEach((Key) => {
			Str += `// ${Marks[Type]} ${Key} = ${Post[Type][Key]}\n`;
		});
	});
	return Str;
};

const HandlePost = (PostSrc, Output) => {
	let ContentDom, LinkPath;
	let Post = {'Meta': {}, 'Macros': {}};

	Post.Meta.Title = PostSrc.title;
	Post.Meta.CreatedOn = PostSrc.created_at.split('T')[0];
	Post.Content = PostSrc.rendered_text;
	console.log(`[I] => [${Post.Meta.CreatedOn}] ${Post.Meta.Title}`);

	ContentDom = JSDOM.fragment(Post.Content);

	// Handle .MetadataBlock elements
	Array.from(ContentDom.querySelectorAll(MetadataBlockSelect)).forEach((Elem) => {
		if (Elem.textContent) {
			const Meta = ParseMeta(Elem.textContent);
			Post.Meta = Object.assign(Post.Meta, Meta.Meta);
			Post.Macros = Object.assign(Post.Macros, Meta.Macros);
		};
		Elem.outerHTML = '';
	});
	// NOTE: Maybe would be better to first do string replacements?

	let LinkElem = GetLinkElem(ContentDom);
	if (LinkElem) {
		LinkPath = GetPath(JSDOM.fragment(LinkElem.outerHTML).querySelector('[href]').href);
		LinkElem.outerHTML = '';
	} else {
		let Check = Post.Meta.Downsync;
		if (typeof(Check) == 'string' && Check.startsWith('/')) {
			LinkPath = Check.substring(1);
		} else {
			console.log(`[I] :  No Downsync flag set with URL in source body; Skipping!`);
			return;
		};
	};

	// Handle .ReplacementsBlock elements: Add replacements to do to the default ones or override them.
	Array.from(ContentDom.querySelectorAll(ReplacementsBlockSelect)).forEach((Elem) => {
		let Text = Elem.textContent.trim();
		if (Text) {
			if (!(Text.startsWith('{') && Text.endsWith('}'))) {
				Text = `{${Text}}`;
			};
			try {
				Replacements = Object.assign(Replacements, JSON.parse(Text));
			} catch(e) {
				console.log(`[W] :  Problem parsing JSON in a ReplacementsBlock; Ignoring!`);
			};
		};
		Elem.outerHTML = '';
	});

	Post.Content = GetFragHTML(ContentDom);

	const PathFile = LinkPath.split('/').slice(-1)[0];
	const PathDir = LinkPath.split('/').slice(0, (LinkPath.split('/').length - 1)).join('/');
	const DatePrefix = PostsFileDate ? Post.Meta.CreatedOn + '-' : '';
	const FinalFilePath = `${PathDir}/${DatePrefix}${PathFile.substring(0, (PathFile.length - 4))}md`;
	if (!CheckDownsync(TryReadFileSync(FinalFilePath))) {
		console.log(`[I] :  Downsync disabled in destination body; Skipping!`);
		return;
	};

	// Do string replacements
	// TODO: Replacements written in post body?
	Object.keys(Replacements).forEach((To) => {
		let FromList = Replacements[To];
		if (typeof(FromList) != 'object') {
			FromList = [FromList];
		};
		FromList.forEach((From) => {
			Post.Content = Post.Content.replaceAll(From, To);
		});
	});

	ContentDom = JSDOM.fragment(Post.Content);

	// Handle .DeleteElementBlock elements: Elements that must be visible on Listed but deleted here.
	Array.from(ContentDom.querySelectorAll(DeleteElementBlockSelect)).forEach((Elem) => {
		if (!Elem.textContent) {
			Elem.nextElementSibling.outerHTML = '';
		};
		Elem.outerHTML = '';
	});

	// Handle .ExtractCodeBlock elements: Allow for text to be treated as plain on Listed, and then extracted here.
	Array.from(ContentDom.querySelectorAll(ExtractCodeBlockSelect)).forEach((Elem) => {
		const Find = CSSFirstTokenSelector(ExtractCodeBlockSelect);
		if (Array.from(Elem.classList).includes(Find)) {
		// Remove the ExtractCodeBlock upper-marker
			Elem.outerHTML = '';
		} else {
		// Extract the marker's text as raw HTML
			Elem.outerHTML = Elem.textContent;
		};
	});

	Post.Content = GetFragHTML(ContentDom);

	if (Output == 'file') {
		TryMkdirSync(PathDir);
		Fs.writeFileSync(FinalFilePath, `\
<!-- < Autogenerated by ListedDownsync.js. Do not edit (unless also set "% Downsync = False") - it would be overwritten. > -->
${MakeMetaStr(Post)}
<h1>${Post.Meta.HTMLTitle ? Post.Meta.HTMLTitle : Post.Meta.Title}</h1>

${Post.Content}
`);
	} else if (Output == 'stdout') {
		console.log(Post.Content);
	};
};

const Main = _ => {
	console.log('[I] Downloading...');
	fetch(`${BlogURL}/all`).then(Response => Response.text()).then(Data => {
		console.log('[I] Parsing...');
		const Elem = JSDOM.fragment(Data).querySelector('script[data-component-name="AuthorAll"]');
		const Posts = JSON.parse(Elem.childNodes[0].data).posts;
		for (let i=0; i<Posts.length; i++) {
			HandlePost(Posts[i], 'file');
		};
	});
};

const Test = _ => {
	console.log('[I] Testing...');
	fetch(TestURL).then(Response => Response.text()).then(Data => {
		const Elem = JSDOM.fragment(Data).querySelector('script[data-component-name="PostShow"]');
		const Post = JSON.parse(Elem.childNodes[0].data).post;
		HandlePost(Post, 'stdout');
	});
};

Main();
//Test();
