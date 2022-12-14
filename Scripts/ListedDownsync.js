#!/usr/bin/env -S node --experimental-fetch
const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;
const ConfigParser = require("./Lib/config-ini-parser").ConfigIniParser;

const BlogURL = 'https://listed.to/@u8'; // Full base URL of the Listed blog (any server)
const SiteName = 'sitoctt';
//const DefaultMode = 'Include' // 'Include' or 'Exclude' | Not implemented
const PostsFileDate = true; // Append dates (YYYY-MM-DD) to posts file names
const Replacements = { // Format: { ReplaceWithString: [ToFindString] }
	"<a href=\"[staticoso:CustomPath:Assets]/": "<a href=\"https://sitoctt-assets.octt.eu.org/",
	"<img src=\"[staticoso:CustomPath:Assets]/": "<img src=\"https://sitoctt-assets.octt.eu.org/",
	// TODO: Fix anchor rels
};

const MetadataBlockSelect = '.MetadataBlock, .MetadataBlock + :Where(Div, Pre, Code)';
const ExtractCodeBlockSelect = '.ExtractCodeBlock, .ExtractCodeBlock + :Where(Div, Pre, Code)';

const TryReadFileSync = Path => {
	if (fs.existsSync(Path)) {
		return fs.readFileSync(Path, 'utf8');
	};
};
const TryMkdirSync = Path => {
	if (!fs.existsSync(Path)) {
		return fs.mkdirSync(Path, {recursive: true});
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
	return Dom.window.document.body.innerHTML;
};

const CheckDoDownsync = File => {
	let DoDownsync = true;
	const TryFile = TryReadFileSync(File);
	if (TryFile) {
		const Lines = TryFile.trim().toLowerCase().split('\n');
		for (let i=0; i<Lines.length; i++) {
			const Line = Lines[i].trim().replaceAll('	', ' ').replaceAll(':', ' : ').replaceAll('=', ' = ');
			if (Line.startsWith('// ')) {
				const Tokens = Line.split(' ').filter(i => {return i != ''});
				if (Tokens[1] == '%' && Tokens[2] == 'downsync' && [':', '='].includes(Tokens[3]) && ['false', 'disabled', 'off', 'no'].includes(Tokens[4])) {
					DoDownsync = false;
					break;
				};
			};
		};
	};
	return DoDownsync;
};

const GetLinkElem = Dom => {
	let Elem;
	Elem = Dom.querySelector(`.Mirror-${SiteName}`);
	if (!Elem) {
		Elem = Dom.querySelector(`.Mirror-${SiteName}-Include`);
	};
	return Elem;
};

const ParseMeta = Raw => {
	let Mid = {"Meta": "", "Macros": ""};
	let Data = {"Meta": {}, "Macros": {}};
	const Lines = Raw.trim().split('\n');
	for (let i=0; i<Lines.length; i++) {
		let Type;
		const Line = Lines[i].trim();
		if (Line.startsWith('%')) {
			Type = 'Meta';
		} else if (Line.startsWith('$')) {
			Type = 'Macros';
		} else {
			continue;
		};
		Mid[Type] += Line.substring(1).trim() + '\n';
	};
	const Types = Object.keys(Mid);
	for (let i=0; i<Types.length; i++) {
		const Type = Types[i];
		Parser = new ConfigParser();
		Parser.parse(Mid[Type]);
		const Items = Parser.items();
		for (let i=0; i<Items.length; i++) {
			const Item = Items[i];
			Data[Type][Item[0]] = Item[1];
		};
	};
	return Data;
};

const MakeMetaStr = Post => {
	let Str = '';
	const Types = ['Meta', 'Macros'];
	for (let i=0; i<Types.length; i++) {
		let Mark;
		const Type = Types[i];
		if (Type == 'Meta') {
			Mark = '%';
		} else if (Type == 'Macros') {
			Mark = '$';
		};
		const Keys = Object.keys(Post[Type]);
		for (let i=0; i<Keys.length; i++) {
			const Key = Keys[i];
			Str += `// ${Mark} ${Key} = ${Post[Type][Key]}\n`
		};
	};
	return Str;
};

const HandlePost = PostSrc => {
	let LinkElem, ContentDom;
	let Post = {"Meta": {}, "Macros": {}};

	Post.Meta.Title = PostSrc.title;
	Post.Meta.CreatedOn = PostSrc.created_at.split('T')[0];
	Post.Content = PostSrc.rendered_text;
	console.log(`[I] => [${Post.Meta.CreatedOn}] ${Post.Meta.Title}`);

	ContentDom = JSDOM.fragment(Post.Content);

	LinkElem = GetLinkElem(ContentDom);
	if (!LinkElem) { // Post content has no mirror-flagging element, skip it
	                 // TODO: Exclusion mode instead of inclusion? Aka automatically handle posts without the element
	                 // TODO: Check flagging via MetadataBlock?
		console.log(`[I] :  No mirror flag in source body; Skipping!`);
		return;
	};
	const LinkPath = GetPath(JSDOM.fragment(LinkElem.outerHTML).querySelector('[href]').href);

/*
	// Get post categories
	Post.Categories = '';
	const Classes = LinkElem.classList;
	for (let i=0; i<Classes.length; i++) {
		const Class = Classes[i];
		const Key = `Mirror-${SiteName}-Categories-`;
		if (Class.startsWith(Key)) {
			Post['Categories'] = '// % Categories = ' + Class.substring(Key.length).replaceAll('|', ' ');
		};
	};
*/

	// Do string replacements
	const ReplacementsKeys = Object.keys(Replacements);
	for (let i=0; i<ReplacementsKeys.length; i++) {
		const To = ReplacementsKeys[i];
		let FromItems = Replacements[To];
		if (typeof(FromItems) != 'object') {
			FromItems = [FromItems];
		};
		for (let i=0; i<FromItems.length; i++) {
			Post.Content = Post.Content.replaceAll(FromItems[i], To);
		};
	};

	ContentDom = JSDOM.fragment(Post.Content);

	LinkElem = GetLinkElem(ContentDom);
	LinkElem.outerHTML = '';

	// Handle MetadataBlock elements
	let MetadataBlocks = ContentDom.querySelectorAll(MetadataBlockSelect);
	for (let i=0; i<MetadataBlocks.length; i++) {
		const Elem = MetadataBlocks[i];
		if (Elem.textContent) {
			const Meta = ParseMeta(Elem.textContent);
			Post.Meta = Object.assign(Post.Meta, Meta.Meta);
			Post.Macros = Object.assign(Post.Macros, Meta.Macros);
		};
		MetadataBlocks[i].outerHTML = '';
	};

	// Handle ExtractCodeBlock elements
	let ExtCodeBlocks = ContentDom.querySelectorAll(ExtractCodeBlockSelect);
	for (let i=0; i<ExtCodeBlocks.length; i++) {
		const Elem = ExtCodeBlocks[i];
		const Find = ExtractCodeBlockSelect.trim().replaceAll('.', '').replaceAll(',', '').split(' ')[0];
		if (Array.from(Elem.classList).includes(Find)) {
			ExtCodeBlocks[i].outerHTML = ''; // Remove the ExtractCodeBlock upper-marker
		} else {
			ExtCodeBlocks[i].outerHTML = Elem.textContent; // Extract the marker's text as raw HTML
		};
	};

	Post.Content = GetFragHTML(ContentDom).trim();

	const PathFile = LinkPath.split('/').slice(-1)[0];
	const PathDir = LinkPath.split('/').slice(0, (LinkPath.split('/').length - 1)).join('/');
	const FinalFilePath = `${PathDir}/${PostsFileDate ? Post.Meta.CreatedOn + '-' : ''}${PathFile.substring(0, (PathFile.length - 4))}md`;

	if (!CheckDoDownsync(FinalFilePath)) {
		console.log(`[I] :  Downsync disabled in destination body; Skipping!`);
		return;
	};

	TryMkdirSync(PathDir);
	fs.writeFileSync(FinalFilePath, `\
${MakeMetaStr(Post)}
# ${Post.Meta.Title}

${Post.Content}
`);
};

const Main = _ => {
	console.log('[I] Downloading...');
	fetch(`${BlogURL}/all`).then(Response => Response.text()).then(Data => {
		console.log('[I] Parsing...');
		const Elem = JSDOM.fragment(Data).querySelector('script[data-component-name="AuthorAll"]');
		const Posts = JSON.parse(Elem.childNodes[0].data).posts;
		for (let i=0; i<Posts.length; i++) {
			HandlePost(Posts[i]);
		};
	});
};

Main();
