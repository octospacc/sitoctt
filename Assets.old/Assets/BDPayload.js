var BDRunInterval;

function ReadCookie(Key) {
	var Value;
	document.cookie.split('; ').forEach(function(Cookie){
		if (Cookie.startsWith(`${Key}=`)) {
			Value = Cookie.split('=')[1];
		};
	});
	return Value;
};

function BDDuration() {
	return OcttTime.Duration;
};
function BDCurrent() {
	return OcttTime.YearsAgeNow() % 1;
};

function BDMargin(Duration, Current) {
	if (Current < Duration) {
		return 'After';
	} else
	if ((1 - Current) < Duration) {
		return 'Before';
	};
};

function BDRun() {
	if (BDInit(BDDuration(), BDCurrent())) {
		BDRunInterval = setInterval(function(){
			BDDraw(BDDuration(), BDCurrent());
		}, 200);
	};
};

function BDInit(Duration, Current) {
	var TimeMargin = BDMargin(Duration, Current);
	if (
		(TimeMargin === 'After' && !ReadCookie('BDAfter'))
		||
		(TimeMargin === 'Before' && !ReadCookie('BDBefore'))
	) {
		var BDCover = document.createElement('div');
		var BDView = document.createElement('div');
		BDCover.id = 'BDCover';
		BDView.id = 'BDView';
		BDCover.style = `
			position: fixed;
			z-index: 999997;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: black !important;
		`;
		BDView.innerHTML = `
			<style>
				#BDView {
					position: fixed;
					z-index: 999998;
					top: 0;
					left: 0;
					width: 100vw;
					height: 100vh;
					color: white !important;
					padding: 1em;
				}
				#BDView > * {
					position: fixed;
				}
				#BDView > p {
					top: 30%;
					background-color: #222222 !important;
					max-width: calc(100% - 2em);
				}
				#BDView > p, #BDView > h2 {
					z-index: 999999;
					animation: BDFadeIn 10s;
				}
				@keyframes BDFadeIn {
					0% { opacity: 0; }
					100% { opacity: 1; }
				}
			</style>
			<a
				href="javascript:void(0);"
				onclick="BDClose();"
				style="
					color: #eeddff !important;
					background-color: black !important;
					font-size: larger;
					font-weight: bold;
					top: 0.5em;
					right: 0.5em;
					padding: 0.5em;
					animation: BDFadeIn 7s;
				"
			>
				❌️ Chiudi
			</a>
			<div id="BDProg"></div>
		`;
		document.body.appendChild(BDCover);
		document.body.appendChild(BDView);
		return true;
	} else {
		return false;
	};
};

function BDDraw(Duration, Current) {
	var TimeMargin = BDMargin(Duration, Current);
	if (TimeMargin === 'After') {
		var Dir = 'right';
		var Prog = 1 - (Current / Duration);
		// Try to remove yesterday elements
		BDView.querySelectorAll('.BDBefore').forEach(function(El){
			El.remove();
		});
		// Try to add today elements
		if (!BDView.querySelector('.BDAfter')) { 
			BDView.innerHTML += `
				<h2 class="BDAfter" style="color: #eeddff !important;">
					È compleannoctt!!!
				</h2>
				<p class="BDAfter">
					A causa di compleannoctt,
					il sitoctt è temporaneamente in manutenzione,
					fino al completamento della barra di progresso.
					<br/>
					Questa non è assolutamente una scusa per introdurre
					un easter egg stagionale nel sito, ovviamente.
				</p>
				<iframe
					id="BDIframe"
					class="BDAfter"
					src="https://hub.octt.eu.org"
				></iframe>
			`;
		};
		BDIframe.style = `
			bottom: 1em;
			left: 10%;
			right: 10%;
			width: 80%;
			height: 50%;
			max-height: 50%;
			opacity: ${Prog};
		`;
	} else
	if (TimeMargin === 'Before') {
		var Dir = 'left';
		var Prog = 1 - ((1 - Current) / Duration);
		if (!BDView.querySelector('.BDBefore')) {
			BDView.innerHTML += `
				<p class="BDBefore">
					Il sitoctt è temporaneamente in manutenzione,
					fino al completamento della barra di progresso.
					<br/>
					Ci dispiace per il disagio.
				</p>
			`;
		};
	} else {
		BDClose();
		return;
	};
	BDCover.style.opacity = (0.32 + Prog);
	BDProg.style = `
		position: fixed;
		top: 20%;
		height: 64px;
		background-color: white;
		${Dir}: 0;
		width: ${Prog*100}%;
	`;
};

function BDClose() {
	clearInterval(BDRunInterval);
	var TimeMargin = BDMargin(BDDuration(), BDCurrent());
	var CookieAge = 31536000 * BDDuration() * 2;
	if (TimeMargin === 'After') {
		document.cookie = `BDAfter=1; max-age=${CookieAge}`;
	} else
	if (TimeMargin === 'Before') {
		document.cookie = `BDBefore=1; max-age=${CookieAge}`;
	};
	BDCover.remove();
	BDView.remove();
};

BDRun();
