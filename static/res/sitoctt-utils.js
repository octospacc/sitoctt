(function(self){

self.setTextFieldEvents = (function (el, handler) {
	['click', 'change', 'input', 'paste'].forEach(function(event){
		el.addEventListener(event, handler);
	});
});

self.setTextConvertEvents = (function (el0, el1, convertHandler, unconvertHandler, constructor) {
	self.setTextFieldEvents(el0, constructor(el0, el1, convertHandler));
	self.setTextFieldEvents(el1, constructor(el1, el0, unconvertHandler));
});

})(sitoctt.utils);
