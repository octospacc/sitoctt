(function(){

const editorId = '--markdown-editor';
const resetFileMessage = 'Reset File to Latest from Git';
const gitPushMessage = 'Commit and Push changes to Git';

// TODO configure this and access token via HTML form
const G = {
	instance: 'https://gitlab.com',
	repo: 'octtspacc/sitoctt',
	branch: 'sitoctt-next',
};

const editorData = {
	currentFilePath: `content/${document.documentElement.lang}/${document.documentElement.dataset.sourceFilePath}`,
};
let editorHandler;

const gitReadFile = async (filePath) => (await (await fetch(`${G.instance}/api/v4/projects/${encodeURIComponent(G.repo)}/repository/files/${encodeURIComponent(filePath)}/raw?ref=${G.branch}`)).text());

const gitPushFile = (filePath, fileContent) => null; // TODO

const readPageFile = async (filePath) => { // TODO read cached file in localStorage, but not when a newer one is on git
	//if (!filePath) {
	//	return '';
	//}
	return await gitReadFile(filePath);
};

const cachePageFile = async (filePath, fileContent) => null; // TODO write to localStorage, trigger on any text input

const displayCurrentFile = () => document.querySelector('#--editor-buttons').querySelector('span').innerHTML = `(<code>${editorData.currentFilePath}</code>)`;

editorData.close = () => {
	const editorEl = document.querySelector(`#${editorId}`);
	editorEl.hidden = true;
	editorEl.style.display = 'none';
	document.body.style.overflow = null;
};

editorData.setup = async (/*filePath*/) => {
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
		initialValue: (await readPageFile(editorData.currentFilePath)),
	});

	editorHandler.addCommand('markdown', 'closeEditor', editorData.close);

	editorHandler.addCommand('markdown', 'resetFile', (() => { // TODO re-pull page source from git
		if (confirm(`${resetFileMessage}?`)) {
			gitReadFile(editorData.currentFilePath);
		}
	}));

	editorHandler.addCommand('markdown', 'gitPush', (() => {
		if (confirm(`${gitPushMessage}?`)) {
			gitPushFile(editorData.currentFilePath);
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
		const filePath = prompt(`Path of custom File?`);
		if (filePath) {
			await editorData.setup(/*filePath*/);
			const fileContent = await readPageFile(editorData.currentFilePath = filePath);
			displayCurrentFile();
			editorHandler.setMarkdown(fileContent);
			await editorData.open();
		}
	});
	buttonsEl.style.display = null;
	delete editorData.setupButtons;
};

editorData.open = async () => {
	await editorData.setup(/*filePath*/);
	const editorEl = document.querySelector(`#${editorId}`);
	editorEl.style.display = 'block';
	editorEl.hidden = false;
	document.body.style.overflow = 'hidden';
};

window.sitoctt.markdownEditor = editorData;

if (false) { // TODO show edit page button and presetup editor if localStorage contains token
	window.addEventListener('load', editorData.setup);
}

})();
