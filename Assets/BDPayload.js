/*(function(){
	var Force = false;
	var Duration = OcttTime.Duration;
	var Curr = OcttTime.YearsAgeNow() % 1;
	if (Force || (Curr < Duration) || ((1 - Curr) < Duration)) {
		if ((Curr < Duration)) { // After day
			var Dir = 'right';
		} else
		if ((1 - Curr) < Duration) { // Before day
			var Dir = 'left';
		};
		var BDCover = document.createElement('div');
		var BDView = document.createElement('div');
		//var BDProg = document.createElement('div');
		BDCover.style = `
			position: fixed;
			z-index: 999998;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: black;
			opacity: ${0.5};
		`;
		BDView.style = `
			position: fixed;
			z-index: 999999;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			color: white;
		`;
		BDView.innerHTML = `
			<div style="
				position: fixed;
				top: 35%;
				height: 4em;
				background-color: white;
				${Dir}: 0;
				width: ${50}%;
			"></div>
		`;
		//BDProg.style = `
		//	position: fixed;
		//	z-index: 999999;
		//	top: 35%;
		//	height: 4em;
		//	background-color: white;
		//	${'left'}: 0;
		//	width: ${50}%;
		//`;
		document.body.appendChild(BDCover);
		document.body.appendChild(BDView);
		//document.body.appendChild(BDProg);
		//if (true) {
		//	setTimeout(function(){
		//		Wrap.innerHTML = '<h1>È</h1>';
		//	}, 1000);
		//};
	};
})();*/
