#!/usr/bin/env node
require('./Lib/Syncers.js').importAll();
const Path = require('path');
const Http = require('http');
const Https = require('https');

// true: Reuse the local directory structure for URL slugs
// false: Keep a flat URL slug composing only of the file name
const KeepTree = false;

// Local OAuth server
const Host = '127.0.0.1';

let [Auth, Session] = [
	JSON.parse(process.env.WordpressAuth || '{}'),
	JSON.parse(process.env.WordpressSession || '{}'),
];

const ApiBase = 'public-api.wordpress.com';
const Msg = {
	NoAuth: '\nPlease set the "WordpressAuth" ENV variable as a JSON string with keys "client_id" and "client_secret".\n(<https://developer.wordpress.com/apps/>)',
	NoSession: "\nNo valid session is available. You need to log in.\nOpen this link in a Web browser to log into Wordpress.com:\n",
	GotSession: '\nGot a new session string. Store it, and load it via the "WordpressSession" ENV variable for future use:\n',
};

const AuthHeaders = () => {
	return {
		headers: {
			"Authorization": `Bearer ${Session.access_token}`,
		},
	};
};

let [LocalPosts, RemotePosts] = [[], []];
let FetchingRemotePosts = false;

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
				host: ApiBase,
				path: "/oauth2/token",
				headers: { "Content-Type": "application/x-www-form-urlencoded", },
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
			console.log(`${Msg.NoSession}<https://public-api.wordpress.com/oauth2/authorize?client_id=${Auth.client_id}&redirect_uri=http://${Host}:${Serv.address().port}&response_type=code>`);
		} else {
			console.log(Msg.NoAuth);
			Serv.close();
		};
	});
};

const GetRemotePosts = (Page) => {
	FetchingRemotePosts = true;
	const Opts = {
		Url: `https://${ApiBase}/rest/v1.1/sites/${Session.blog_id}/posts/`,
		fields: "ID,slug,status,categories,tags,title,content",
		page_handle: encodeURIComponent(Page || ''),
	};
	Https.get(`${Opts.Url}?&fields=${Opts.fields}&context=edit&page_handle=${Opts.page_handle}`, AuthHeaders(),
	(Res) => {
		let Data = '';
		Res.on('data', (Frag) => {
			Data += Frag;
		}).on('end', () => {
			const JsonData = JSON.parse(Data);
			const NextPage = JsonData.meta.next_page;
			RemotePosts = RemotePosts.concat(JsonData.posts);
			if (NextPage) {
				GetRemotePosts(NextPage);
				process.stdout.write('.');
			} else {
				FetchingRemotePosts = false;
			};
		});
	});
};

const TryUpsync = () => {
	console.log('[I] Reading local posts...');
	Fs.walkSync('./Posts').forEach((File) => {
		let Content = Fs.readFileSync(File, 'utf8').trim();
		const Meta = ParseMeta(Content.split('\n\n')[0]);
		if (Meta.Meta.Type === 'Post' || !Meta.Meta.Type) {
			Content = Content.split('\n\n').slice('1').join('\n\n');
			const Slug = KeepTree
				? File.slice('./Posts/'.length)
				: File.split('/').slice(-1)[0];
			const Obj = { Path: Slug, Meta: Meta, Content: Content, };
			LocalPosts.push(Obj);
			//LocalPosts[Slug] = Obj;
		};
	});
	console.log(LocalPosts);
	console.log('[I] Fetching remote posts...');
	GetRemotePosts();
	var Interv = setInterval(() => {
		if (!FetchingRemotePosts) {
			clearInterval(Interv);
			console.log(RemotePosts);
			// Find out which posts exist on remote and which not
			//   Exist on remote and local:
			//     Check if remote data is same as local, update remote if not
			//       https://developer.wordpress.com/docs/api/1.1/post/sites/%24site/posts/%24post_ID/
			//   Exist on local only:
			//     Create blank post on remote (as draft), then edit it like the first case
			//       https://developer.wordpress.com/docs/api/1.1/post/sites/%24site/posts/new/
			//   Exist on remote only:
			//     Was probably deleted or moved locally, what to do here?
		};
	}, 50);
};

if (!Session.access_token) {
	AuthServer();
};
if (Session.access_token) {
	TryUpsync();
};
