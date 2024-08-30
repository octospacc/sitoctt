(function(){

if (location.protocol !== 'file:') {
	window.PatchLocalFileAnchor = Void;
	return;
}

window.PatchLocalFileAnchor = (function PatchLocalFileAnchor (anchorEl) {
	var href = anchorEl.href;
	if (href.startsWith('file://')) {
		var tokens = href.split('#');
		href = tokens[0];
		if (href.endsWith('/')) {
			href += 'index.html';
		}
		tokens = tokens.slice(1);
		if (tokens.length) {
			href += ('#' + tokens.join('#'));
		}
		anchorEl.href = href;
	}
});

window.addEventListener('DOMContentLoaded', (function(){
	Array.from(document.querySelectorAll('a[href]')).forEach(PatchLocalFileAnchor);
}));

})();
