#!/usr/bin/env -S node --experimental-fetch
const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;

const BlogURL = 'https://listed.to/@u8';
const SiteName = 'sitoctt';
//const DefaultMode = 'Include' // 'Include' or 'Exclude' | Not implemented
const PostsFileDate = true; // Append date to posts file names
const Replacements = {
	"<a href=\"[staticoso:CustomPath:Assets]/": "<a href=\"https://sitoctt-assets.octt.eu.org/",
	"<img src=\"[staticoso:CustomPath:Assets]/": "<img src=\"https://sitoctt-assets.octt.eu.org/",
	//"[staticoso:CustomPath:Assets]/": [
	//	"<a href=\"https://sitoctt-assets.octt.eu.org/",
	//	"<img src=\"https://sitoctt-assets.octt.eu.org/"
	//]
};

const TryReadFileSync = Path => {
	if (fs.existsSync(Path)) {
		return fs.readFileSync(Path, 'utf8');
	};
};
const TryMkdirSync = Path => {
	if (!fs.existsSync(Path)) {
		return fs.mkdirSync(Path, {recursive:true});
	};
};

const GetPath = URL => {
	if (URL.startsWith('http://') || URL.startsWith('https://')) {
		URL = URL.split('/').slice(3).join('/');
	};
	return URL;
};

const CheckDoDownsync = File => {
	let DoDownsync = true;
	const TryFile = TryReadFileSync(File);
	if (TryFile) {
		const Lines = TryFile.trim().toLowerCase().split('\n');
		for (let i=0; i<Lines.length; i++) {
			const Line = Lines[i].trim().replaceAll('	', ' ').replaceAll(':', ' : ').replaceAll('=', ' = ');
			if (Line.startsWith('// ')) {
				const Tokens = Line.split(' ').filter(e => {return e != ''});
				if (Tokens[1] == '%' && Tokens[2] == 'downsync') {
					if (['false', 'disabled', 'off', 'no'].includes(Tokens[4])) {
						DoDownsync = false;
					};
				};
			};
		};
	};
	return DoDownsync;
};

const HandlePost = PostSrc => {
	let Elem;
	let Post = {};

	Post['Title'] = PostSrc.title;
	Post['CreatedOn'] = PostSrc.created_at.split('T')[0];
	console.log(`[I] => [${Post['CreatedOn']}] ${Post['Title']}`);

	const Dom = JSDOM.fragment(PostSrc.rendered_text);
	Elem = Dom.querySelector(`.Mirror-${SiteName}`);
	if (!Elem) {
		Elem = Dom.querySelector(`.Mirror-${SiteName}-Include`);
	};
	if (!Elem) {  // Post content has no mirror-flagging element, skip it
		console.log(`[I] :  No mirror flag in source body; Skipping!`);
		return; // TODO: Exclusion mode instead of inclusion? Aka automatically handle posts without the element
	};

	const Path = GetPath(JSDOM.fragment(Elem.outerHTML).querySelector('[href]').href);
	Post['Categories'] = '';
	const Classes = Elem.classList;
	for (let i=0; i<Classes.length; i++) {
		const Class = Classes[i];
		const Key = `Mirror-${SiteName}-Categories-`;
		if (Class.startsWith(Key)) {
			Post['Categories'] = '// % Categories = ' + Class.substring(Key.length).replaceAll('|', ' ');
		};
	};

	Post['Content'] = PostSrc.rendered_text.replace(Elem.outerHTML, '');
	const ReplacementsKeys = Object.keys(Replacements);
	for (let i=0; i<ReplacementsKeys.length; i++) {
		const To = ReplacementsKeys[i];
		let FromItems = Replacements[To];
		if (typeof(FromItems) != 'object') {
			FromItems = [FromItems];
		};
		for (let i=0; i<FromItems.length; i++) {
			Post['Content'] = Post['Content'].replaceAll(FromItems[i], To);
		};
	};

	const PathFile = Path.split('/').slice(-1)[0];
	const PathDir = Path.split('/').slice(0, (Path.split('/').length - 1)).join('/');
	const FinalFilePath = `${PathDir}/${PostsFileDate ? Post['CreatedOn']+'-' : ''}${PathFile.substring(0, (PathFile.length - 4))}md`;
	if (!CheckDoDownsync(FinalFilePath)) {
		console.log(`[I] :  Downsync disabled in destination body; Skipping!`);
		return;
	};
	TryMkdirSync(PathDir);
	fs.writeFileSync(FinalFilePath, `\
${Post['Categories']}
// % CreatedOn = ${Post['CreatedOn']}

# ${Post['Title']}

${Post['Content']}
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
