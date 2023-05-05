#!/usr/bin/env node
const Http = require('http');
const Https = require('https');

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

// https://developer.wordpress.com/docs/oauth2/
const AuthServer = () => {
	const Serv = Http.createServer((Req, Res) => {
		Res.setHeader('Content-Type', 'text/plain');
		let Query = new URLSearchParams(Req.url.slice(1).replaceAll('?', ''));
		let AuthCode = Query.get('code');
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

// TODO
const TryUpsync = () => {
	// https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/
	Https.get(`https://${ApiBase}/rest/v1.1/sites/${Session.blog_id}/posts/?&fields=ID,slug,status,categories,tags,title,content&context=edit`, AuthHeaders(),
	(Res) => {
		let Data = '';
		Res.on('data', (Frag) => {
			Data += Frag;
		}).on('end', () => {
			let RemotePosts = JSON.parse(Data);
			console.log(RemotePosts);
			// Read existing posts from ./Posts/ here
			// Find out which posts exist on remote and which not
			//   Exist on remote and local:
			//     Check if remote data is same as local, update remote if not
			//     https://developer.wordpress.com/docs/api/1.1/post/sites/%24site/posts/%24post_ID/
			//   Exist on local only:
			//     Create blank post on remote (as draft), then edit it like the first case
			//     https://developer.wordpress.com/docs/api/1.1/post/sites/%24site/posts/new/
			//   Exist on remote only:
			//     Was probably deleted or moved locally, what to do here?
		});
	});
};

if (!Session.access_token) {
	AuthServer();
};
if (Session.access_token) {
	TryUpsync();
};
