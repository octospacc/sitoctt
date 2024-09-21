const Exp = {};

const markdownOptions = {
	headingStyle: "atx",
	hr: "---",
	bulletListMarker: "*",
	codeBlockStyle: "fenced",
	fence: "```",
	emDelimiter: "_",
	strongDelimiter: "**",
	linkStyle: "inlined",
};

const TurndownService = require('turndown');
const turndownService = (new TurndownService(markdownOptions));
turndownService.keep(['span', 'small', 'sup', 'sub', 'dl', 'details', 'table', 'iframe', 'video', 'audio', 'scripts']);

Exp.Transform = (html) => fixFootnoteRefs(turndownService.turndown(html));

function fixFootnoteRefs (markdown) {
	const parts = markdown.split('\n' + markdownOptions.hr + '\n');
	if (parts.length > 1) {
		let footnotesText = '';
		const footnotes = ('\n' + parts.slice(-1)[0]).split('[↩](#fnref');
		for (let index=1; index<footnotes.length; index++) {
			const footnote = ((footnotes[index - 1].split('.')[0].split(')')[1] || ('\n' + index))
				+ '. <span id="fn' + index + '"></span>'
				+ footnotes[index - 1].split('\n').slice(1).join('\n').split('.').slice(1).join('.')
				+ '[↩](#fnref' + footnotes[index].split('\n')[0]);
			footnotesText += footnote;
		}
		parts[parts.length - 1] = footnotesText;
	}
	return parts.join('\n' + markdownOptions.hr + '\n');
}

module.exports = Exp;
