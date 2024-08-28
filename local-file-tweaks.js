(function(){

if (location.protocol !== 'file:') {
	return;
}

window.addEventListener('load', (function(){
	Array.from(document.querySelectorAll('a[href]')).forEach(function(linkEl){
		if (linkEl.href.startsWith('file://') && linkEl.href.endsWith('/')) {
			linkEl.href += 'index.html';
		}
	});
}));

})();
