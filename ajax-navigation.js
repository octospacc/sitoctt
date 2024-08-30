(function(){
// TODO investigate/fix strange screen flash when navigating back from an hash URL
// TODO error handling, caching, loading indication, totally handle hash change

window.SiteInitOnLoad = [];
var oldUrl = null;

// TODO before deploying this: handle page-specific scripts (comments, etc...)
//if (location.protocol === 'file:') {
	window.PatchAjaxNavigationAnchor = Void;
	return; // HTTP requests don't work on local files with default browser configuration
//}

function toPathUrl (url) {
	return url.split('#')[0];
}

function initPage () {
	if (oldUrl !== null) {
		document.body.scrollIntoView();
		SiteInitOnLoad.forEach(function(routine){ routine(); });
	}
	oldUrl = location.href;
	var langToken = ('/' + document.documentElement.lang + '/');
	var baseHref = (location.href.split(langToken)[0] + langToken);
	Array.from(document.querySelectorAll('a[href]')).filter(function(anchorEl){
		//var tokens = href.split('/' + document.documentElement.lang + '/');
		//if (location.href.slice(0, href[0]))
		//return (anchorEl.getAttribute('href').replace(location.host, '').replace(/^(\.\.\/)+/, '').replace(/^(\/)+/, '').split('/')[1] === document.documentElement.lang);
		return (anchorEl.href.slice(0, baseHref.length) === baseHref);
	}).forEach(PatchAjaxNavigationAnchor);
}

function loadContent (url, push) {
	function useFallback () {
		location.href = url;
	}
	var fallbackTimeout = setTimeout(useFallback, 3000);
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
			useFallback();
		});
}

window.PatchAjaxNavigationAnchor = (function PatchAjaxNavigationAnchor (anchorEl) {
	var isSitewideLink = anchorEl.href.startsWith(location.protocol + '//' + location.host);
	var isPagewideLink = (toPathUrl(anchorEl.href) === toPathUrl(location.href));
	if (isSitewideLink && !isPagewideLink) {
		anchorEl.addEventListener('click', (function(clickEvent){
			clickEvent.preventDefault();
			loadContent(anchorEl.href, true);
		}));
	}
});

window.addEventListener('DOMContentLoaded', initPage);

window.addEventListener('popstate', (function(stateEvent){
	if (toPathUrl(location.href) !== toPathUrl(oldUrl)) {
		loadContent(location.href, false);
	}
	oldUrl = location.href;
}));

})();
