(function(){ // TODO error handling, caching, support GitHub and Gitea

const auth = { ...sitoctt.Props, ...sitoctt.localStorage('gitAuth') };
const editorData = {};
let editorHandler;
let currentFilePath = `content/${document.documentElement.lang}/${document.documentElement.dataset.sourceFilePath}`;

const editorId = '--markdown-editor';
const resetFileMessage = 'Reset File to Latest from Git';
const gitPushMessage = 'Commit and Push changes to Git';

const gitApiUrl = (filePath) => `${auth.GitInstanceUrl}/api/v4/projects/${encodeURIComponent(auth.GitRepoThis)}/repository/files/${encodeURIComponent(filePath)}`;

const gitReadFile = async (filePath) => (await (await fetch(`${gitApiUrl(filePath)}/raw?ref=${auth.GitBranchThis}`)).text());

const gitPushFile = (filePath, fileContent, commitMessage) => fetch(gitApiUrl(filePath), {
	method: "PUT",
	headers: { "PRIVATE-TOKEN": auth.GitToken, "Content-Type": "application/json" },
	body: JSON.stringify({
		"id": auth.GitRepoThis,
		"branch": auth.GitBranchThis,
		"file_path": encodeURIComponent(filePath),
		"content": fileContent,
		"commit_message": commitMessage,
	}),
}).catch(err => {
	console.error(err);
	alert(err);
});

const readPageFile = async (filePath) => { // TODO read cached file in localStorage, but not when a newer one is on git
	//if (!filePath) {
	//	return '';
	//}
	return await gitReadFile(filePath);
};

const cachePageFile = async (filePath, fileContent) => null; // TODO write to localStorage, trigger on any text input

const displayCurrentFile = () => document.querySelector('#--editor-buttons').querySelector('span').innerHTML = `(<code>${currentFilePath}</code>)`;

editorData.close = () => {
	const editorEl = document.querySelector(`#${editorId}`);
	editorEl.hidden = true;
	editorEl.style.display = 'none';
	document.body.style.overflow = null;
};

editorData.setup = async () => {
	if (editorHandler) {
		return;
	}

	document.head.appendChild(Object.assign(document.createElement('style'), { innerHTML: `
		#${editorId} {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			z-index: 9;
			background-color: rgba(255, 255, 255, 0.5);
		}

		#${editorId} .toastui-editor-defaultUI {
			width: 95%;
			height: 95%;
			top: 2.5%;
			bottom: 2.5%;
			left: 2.5%;
			right: 2.5%;
			background-color: ghostwhite;
		}

		#${editorId} .toastui-editor-main-container,
		#${editorId} .ProseMirror {
			height: 100%;
			font-size: 16px;
		}

		/* quick fix for showing all buttons on mobile */
		#${editorId} .toastui-editor-dropdown-toolbar {
			display: table;
		}
		#${editorId} .toastui-editor-toolbar-divider {
			display: none;
		}

		#--editor-buttons[data-pin="1"] {
			position: fixed;
			bottom: 0;
			right: 0;
			z-index: 9;
			margin: 1em;
			padding: 1em;
			background-color: black;
		}
	` }));

	document.head.appendChild(Object.assign(document.createElement('link'), {
		rel: "stylesheet", href: "/lib/toastui-editor.min.css",
	}));

	document.body.appendChild(Object.assign(document.createElement('div'), {
		id: editorId, hidden: true, style: "display: none;",
	}));

	await SpaccDotWeb.requireScript('/lib/toastui-editor-all.min.js');

	editorHandler = new toastui.Editor({
		el: document.querySelector(`#${editorId}`),
		height: '100%',
		previewStyle: 'tab',
		hideModeSwitch: true,
		usageStatistics: false,
		initialValue: (await readPageFile(currentFilePath)),
	});

	editorHandler.addCommand('markdown', 'closeEditor', editorData.close);

	editorHandler.addCommand('markdown', 'resetFile', (() => { // TODO re-pull page source from git
		if (confirm(`${resetFileMessage}?`)) {
			gitReadFile(currentFilePath);
		}
	}));

	editorHandler.addCommand('markdown', 'gitPush', (() => {
		const message = prompt(`${gitPushMessage} with Message?`, `Update ${currentFilePath}`);
		if (message) {
			gitPushFile(currentFilePath, editorHandler.getMarkdown(), message);
		}
	}));

	editorHandler.insertToolbarItem({ groupIndex: 6 }, {
		tooltip: gitPushMessage,
		command: 'gitPush',
		text: '@',
		className: 'toastui-editor-toolbar-icons',
		style: { backgroundImage: 'none' },
	});

	/* editorHandler.insertToolbarItem({ groupIndex: 6 }, { // TODO
		tooltip: resetFileMessage,
		command: 'resetFile',
		text: '#',
		className: 'toastui-editor-toolbar-icons',
		style: { backgroundImage: 'none' },
	}); */

	editorHandler.insertToolbarItem({ groupIndex: 6 }, {
		tooltip: "Close the Editor",
		command: 'closeEditor',
		text: 'X',
		className: 'toastui-editor-toolbar-icons',
		style: { backgroundImage: 'none' },
	});

	editorData.setupButtons();

	editorData.setup = Void;
};

editorData.setupButtons = () => {
	const buttonsEl = document.querySelector('#--editor-buttons');
	displayCurrentFile();
	buttonsEl.querySelector('[name="this"]').onclick = editorData.open;
	buttonsEl.querySelector('[name="custom"]').onclick = (async () => {
		const filePath = prompt(`Path of custom File?`, currentFilePath);
		if (filePath) {
			await editorData.setup();
			const fileContent = await readPageFile(currentFilePath = filePath);
			displayCurrentFile();
			editorHandler.setMarkdown(fileContent);
			await editorData.open();
		}
	});
	buttonsEl.querySelector('[name="pin"]').onclick = () => {
		sitoctt.localStorage('editorButtons.pin',
			(buttonsEl.dataset.pin = Number(!Number(buttonsEl.dataset.pin))));
	};
	buttonsEl.dataset.pin = sitoctt.localStorage('editorButtons.pin');
	buttonsEl.style.display = null;
	delete editorData.setupButtons;
};

editorData.open = async () => {
	await editorData.setup();
	const editorEl = document.querySelector(`#${editorId}`);
	editorEl.style.display = 'block';
	editorEl.hidden = false;
	document.body.style.overflow = 'hidden';
};

window.sitoctt.markdownEditor = editorData;

if (auth.GitToken) {
	window.addEventListener('load', editorData.setup);
}

})();
