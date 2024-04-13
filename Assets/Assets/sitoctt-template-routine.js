// Issue on Firefox 69 / Chromium: Getting background CSS property doesn't work, maybe background: url('') is invalid for <meta>? Maybe use content: ''?
//var RawDataCss = JSON.parse(window.getComputedStyle(document.getElementById('RawDataCssInject')).background.split('url("')[1].split('")').slice(0, -1).join('")').replaceAll('\\\"', '\"'));

/* Hyperbroken
var MediaQuery = window.matchMedia(`(min-width: ${RawDataCss.DeskModeMinWid})`);
var SectionMenu = document.querySelector('#RightBoxContainer > Details');
var SectionButton = SectionMenu.querySelector('Summary');

var NormalOpen = SectionMenu.open;
SectionButton.onclick = function() {
	if (!MediaQuery.matches) {
		// For some reason without the ! it sets the opposite of what's really happening???
		// Maybe the onclick event fires before the details element is actually opened by the click?
		NormalOpen = !SectionMenu.open;
	};
};

function MediaQueryCheck(Query) {
	if (MediaQuery.matches) SectionMenu.open = true; // Go in desktop mode
	else SectionMenu.open = NormalOpen; // Going in normal mode
	// we must when handle user manually disable desktop mode if we want hide the button
	//SectionButton.style.display = {true: "none", false: ""}[Query.matches];
};
MediaQuery.addListener(MediaQueryCheck);
MediaQueryCheck(MediaQuery);
*/

var BackgroundFilter = getComputedStyle(Background).filter;
function ResetShowPageBg() {
	Background.onclick = null;
	Background.style.cursor = '';
	Background.style.filter = BackgroundFilter;
	Body.style.overflow = '';
	[Header, Container].forEach(function(El) {
		['visibility', 'overflow'].forEach(function(Prop) {
			El.style[Prop] = '';
		});
	});
};

function ShowPageBg() {
	[Header, Container].forEach(function(El) {
		['visibility', 'overflow'].forEach(function(Prop) {
			El.style[Prop] = 'hidden';
		});
	});
	Body.style.overflow = 'hidden';
	Background.style.filter = 'none';
	Background.style.cursor = 'pointer';
	Background.onclick = ResetShowPageBg;
};

var PageBgEl = document.getElementById('fn:PageBg');
if (PageBgEl) {
	var PageBgPar = PageBgEl.querySelector('p');
	var PageBgTokens = PageBgPar.innerHTML.split('</a>');
	PageBgPar.innerHTML = PageBgTokens[0] + '</a>&nbsp;<button onclick="ShowPageBg()">Guarda</button>' + PageBgTokens.slice(1, -1);
};
