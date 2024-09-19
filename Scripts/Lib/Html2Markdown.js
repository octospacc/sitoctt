const Exp = {};

const TurndownService = require('turndown');
const turndownService = (new TurndownService({
	headingStyle: "atx",
	hr: "---",
	bulletListMarker: "*",
	codeBlockStyle: "fenced",
	fence: "```",
	emDelimiter: "_",
	strongDelimiter: "**",
	linkStyle: "inlined",
}));
turndownService.keep(['span', 'small', 'sup', 'sub', 'table', 'dl', 'iframe', 'video', 'audio', 'scripts']);

Exp.Transform = (html) => turndownService.turndown(html);

module.exports = Exp;
