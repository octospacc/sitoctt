(function(){
// TODO should use goatcounter script for full proper handling?

if (!["sitoctt.octt.eu.org", "http.sitoctt.octt.eu.org"].includes(location.hostname) || !location.search) {
	return;
}

window.addEventListener('load', (function(){
	fetch('https://private-analytics-not-for-public-use.octt.eu.org/sitoctt/count?p='
		+ location.pathname + location.search /* + '&rnd=' + Date.now() */);
}));

})();
