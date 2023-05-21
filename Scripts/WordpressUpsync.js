#!/usr/bin/env node
require('./Lib/Syncers.js').importAll();
const Path = require('path');
const Http = require('http');
const Https = require('https');
const Axios = require('axios');
const JsDom = require('jsdom').JSDOM;

// true: Reuse the local directory structure for URL slugs
// false: Keep a flat URL slug composing only of the file name
const KeepTree = false;

// Word separation characters in slugs; first is preferred
const WordSeps = '-–—_| ';

// Local OAuth server
const Host = '127.0.0.1';

// TODO:
// * Handle locally removed posts, only present on remote (delete or hide them on remote)
// * Handle posts which filename changed and redirect URL has been set

let [Auth, Session] = [
	JSON.parse(process.env.WordpressAuth || '{}'),
	JSON.parse(process.env.WordpressSession || '{}'),
];

const ApiStr = {
	protocol: 'https://',
	host: 'public-api.wordpress.com',
	path: '/rest/v1.1',
};
ApiStr.url = `${ApiStr.protocol}${ApiStr.host}${ApiStr.path}`;
const Msg = {
	NoAuth: '\nPlease set the "WordpressAuth" ENV variable as a JSON string with keys "client_id" and "client_secret".\n(<https://developer.wordpress.com/apps/>)',
	NoSession: "\nNo valid session is available. You need to log in.\nOpen this link in a Web browser to log into Wordpress.com:\n",
	GotSession: '\nGot a new session string. Store it, and load it via the "WordpressSession" ENV variable for future use:\n',
};

const AuthOpts = () => {
	return {
		headers: {
			"Authorization": `Bearer ${Session.access_token}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};
};

let [LocalPosts, RemotePosts] = [{}, {}];
let [GotLocalPosts, GotRemotePosts] = [false, false];

// https://stackoverflow.com/a/73594511
Fs.walkSync = (Dir, Files = []) => {
	const dirFiles = Fs.readdirSync(Dir);
	for (const f of dirFiles) {
		const stat = Fs.lstatSync(Dir + Path.sep + f)
		if (stat.isDirectory()) {
			Fs.walkSync(Dir + Path.sep + f, Files);
		} else {
			Files.push(Dir + Path.sep + f);
		};
	};
	return Files;
};

const MakeSlug = (File) => {
	let Slug = File
		.slice('./Posts/'.length)
		.split('.').slice(0, -1).join('.');
	const Last = Slug.split('/').slice(-1)[0];
	return ((!KeepTree && !(IsSlugTooSimple(Last) || Slug in LocalPosts))
		? Last
		: Slug);
};

const IsSlugTooSimple = (Slug) => {
	let Nums = 0;
	WordSeps.split('').forEach((Sep) => {
		Slug = Slug.replaceAll(Sep, WordSeps[0]);
	});
	Slug = Slug.split(WordSeps[0]);
	for (let i=0; i<Slug.length; i++) {
		if (isNaN(Slug[i])) {
			break;
		} else {
			Nums += 1;
		};
	};
	return (Nums <= 1);
};

// https://developer.wordpress.com/docs/oauth2/
const AuthServer = () => {
	const Serv = Http.createServer((Req, Res) => {
		Res.setHeader('Content-Type', 'text/plain');
		const Query = new URLSearchParams(Req.url.slice(1).replaceAll('?', ''));
		const AuthCode = Query.get('code');
		if (AuthCode) {
			Res.statusCode = 200;
			Res.end('This window can now be closed.');
			Req = Https.request({
				method: "POST",
				host: ApiStr.host,
				path: "/oauth2/token",
				headers: AuthOpts().headers,
			}, (Res) => {
				let Data = '';
				Res.on('data', (Frag) => {
					Data += Frag;
				}).on('end', () => {
					console.log(`${Msg.GotSession}'${Data}'`);
					Session = JSON.parse(Data);
				});
			});
			Req.write(`&client_id=${Auth.client_id}&client_secret=${Auth.client_secret}&code=${AuthCode}&redirect_uri=http://${Host}:${Serv.address().port}&grant_type=authorization_code`);
			Req.end();
		};
		Res.statusCode = 500;
		Res.end();
	});

	Serv.listen(0, Host, () => {
		if (Auth.client_id && Auth.client_secret) {
			console.log(`${Msg.NoSession}<${ApiStr.protocol}${ApiStr.host}/oauth2/authorize?client_id=${Auth.client_id}&redirect_uri=http://${Host}:${Serv.address().port}&response_type=code>`);
		} else {
			console.log(Msg.NoAuth);
			Serv.close();
		};
	});
};

const GetLocalPosts = () => {
	Fs.walkSync('./Posts').forEach((File) => {
		const Meta = ParseMeta(Fs.readFileSync(File, 'utf8').trim().split('\n\n')[0]);
		if (Meta.Meta.Type === 'Post' || !Meta.Meta.Type) {
			const BuiltFile = `./public.Content/${File.split('.').slice(0, -1).join('.')}.html`;
			const Content = Fs.readFileSync(BuiltFile, 'utf8');
			const Slug = MakeSlug(File);
			LocalPosts[Slug] = Object.assign({ Path: Slug, Content: Content, Macros: Meta.Macros, }, Meta.Meta);
			LocalPosts[Slug].Title ||= JsDom.fragment(Content)
				.querySelector('h1, h2, h3, h4, h5, h6')
				.querySelector('.SectionTitle, .staticoso-SectionTitle')
				.textContent;
		};
	});
	GotLocalPosts = true;
};

const GetRemotePosts = (Page) => {
	const QueryOpts = new URLSearchParams({
		context: "edit",
		fields: "ID,slug,status,categories,tags,title,content",
		page_handle: encodeURIComponent(Page || ''),
	}).toString();
	// https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/
	Axios.get(`${ApiStr.url}/sites/${Session.blog_id}/posts/?&${QueryOpts}`, AuthOpts()).then((Res) => {
		const NextPage = Res.data.meta.next_page;
		Res.data.posts.forEach((Post) => {
			RemotePosts[Post.slug] = Post;
		});
		if (NextPage) {
			GetRemotePosts(NextPage);
			process.stdout.write('.');
		} else {
			GotRemotePosts = true;
		};
	});
};

const IsLocalRemotePostEqual = (Loc, Rem) => {
	if (true
		&& Loc.Title === Rem.title
		&& Loc.Content === Rem.content
		&& Loc.Description === Rem.excerpt
		&& Loc.Categories === Rem.categories
		&& Loc.Tags === Rem.tags
		&& Loc.CreatedOn === Rem.date
	) return true;
	else return false;
};

const AfterFetch = () => {
	//let HaveNewPosts = false;
	console.log(LocalPosts);
	console.log(RemotePosts);
	Object.values(LocalPosts).forEach(async (Post) => {
		const Slug = Post.Path;
		const RemPost = RemotePosts[Slug];
		const ReqBody = {
			ID: RemPost ? RemPost.ID : "",
			slug: Slug,
			status: "draft",
			date: Post.CreatedOn || "",
			title: Post.Title,
			content: Post.Content || "",
			excerpt: Post.Description || "",
			categories: Post.Categories || "",
			tags: Post.Tags || "",
		};
		const QueryOpts = new URLSearchParams({
			context: "edit",
		}).toString();
		console.log(Slug, Slug in RemotePosts);
		if (RemPost) {
		// Post is on remote: Check if remote data is same as local, update remote if not
			if (!IsLocalRemotePostEqual(Post, RemPost)) {
				// https://developer.wordpress.com/docs/api/1.1/post/sites/%24site/posts/%24post_ID/
				//await Axios.post(`${ApiStr.url}/sites/${Session.blog_id}/posts/new/?&${QueryOpts}`, Object.assign(ReqBody, {}), AuthOpts()).then((Res) => {
					//console.log(Res.data);
				//});
			};
		} else {
		// Post doesnt exist; create blank post on remote (as draft), then edit it like the first case
			//HaveNewPosts = true;
			// https://developer.wordpress.com/docs/api/1.1/post/sites/%24site/posts/new/
			//await Axios.post(`${ApiStr.url}/sites/${Session.blog_id}/posts/new/?&${QueryOpts}`, Object.assign(ReqBody, { status: "draft", }), AuthOpts()).then((Res) => {
				//console.log(Res.data);
			//});
		};
	});
};

const TryUpsync = () => {
	console.log('[I] ^ Reading local posts...');
	GetLocalPosts();
	console.log('[I] ^ Fetching remote posts...');
	GetRemotePosts();
	var Interv = setInterval(() => {
		if (GotLocalPosts && GotRemotePosts) {
			clearInterval(Interv);
			AfterFetch();
		};
	}, 50);
};

if (!Session.access_token) {
	AuthServer();
};
if (Session.access_token) {
	TryUpsync();
};
