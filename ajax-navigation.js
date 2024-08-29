(function(){
// TODO investigate/fix strange screen flash when navigating back from an hash URL
// TODO error handling, caching, loading indication, totally handle hash change

var oldUrl = null;
var firstLoad = true;
window.SiteInitOnLoad = [];

function initPage () {
	oldUrl = location.href;
	document.body.scrollIntoView();
	Array.from(document.querySelectorAll('a')).forEach(function(anchorEl){
		var isInternalLink = anchorEl.href.startsWith(location.protocol + '//' + location.host);
		var isPagewideLink = (anchorEl.href.split('#')[0] === location.href.split('#')[0]);
		if (isInternalLink && !isPagewideLink) {
			anchorEl.onclick = (function(clickEvent){
				clickEvent.preventDefault();
				loadContent(anchorEl.href, true);
			});
		}
	});
	if (!firstLoad) {
		SiteInitOnLoad.forEach(function(routine){ routine(); });
	}
	firstLoad = false;
}

function loadContent (url, push) {
	var fallbackTimeout = setTimeout((function(){ location.href = url; }), 3e3);
	fetch(url)
		.then(function(request){ return request.text(); })
		.then(function(html){
			var domNew = (new DOMParser).parseFromString(html, 'text/html');
			if (push) {
				history.pushState(null, null, url);
			}
			document.head.innerHTML = domNew.head.innerHTML;
			document.body.innerHTML = domNew.body.innerHTML;
			initPage();
			clearTimeout(fallbackTimeout);
		}).catch(function(err){
			console.error(err);
			location.href = url;
		});
}

window.addEventListener('load', initPage);

window.addEventListener('popstate', (stateEvent) => {
	if (location.href.split('#')[0] !== oldUrl.split('#')[0]) {
		loadContent(location.href, false);
	}
	oldUrl = location.href;
});

})();
