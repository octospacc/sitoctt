if (!String.prototype.replaceAll) {
	// https://stackoverflow.com/a/63958411
	String.prototype.replaceAll = function replaceAll(search, replace) {
		return this.split(search).join(replace);
	};
};
