(function(){
// TODO should use goatcounter script for full proper handling?

if (!["sitoctt.octt.eu.org", "http.sitoctt.octt.eu.org"].includes(location.hostname) || !location.search) {
	return;
}

window.addEventListener('load', (function(){
	var path = (location.pathname + location.search);
	fetch('https://private-analytics-not-for-public-use.octt.eu.org/sitoctt/count?p=' + path /* + '&rnd=' + Date.now() */)
		.catch(function(err){
			console.error(err);
			fetch('https://sitoctt.goatcounter.com/count?p=' + path);
		});
}));

})();
