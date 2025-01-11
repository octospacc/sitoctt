(function(){
	var addr = [['octt+sitoctt', 'spacc/eu/org'], ['octospacc', 'altervista/org'], ['@minioctt', 'octospacc/altervista/org']];
	var els = document.querySelectorAll('.octt-contact');
	for (var i=0; i<els.length; i++) {
		els[i].innerHTML = '<a href="javascript:void(0);">[Clicca per visualizzare]</a>';
		els[i].querySelector('a').onclick = (function(i){
			return function(ev){
				ev.target.parentElement.textContent = addr[i].join('@').replace('/', '.').replace('/', '.');
			};
		})(i);
	}
})();
