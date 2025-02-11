(function(stepsEl){

function convertText (sourceEl, destinationEl, handler) {
	var text = sourceEl.value;
	for (var i=0; i<stepsEl.value; i++) {
		text = handler(text);
	}
	destinationEl.value = text;
}

function makeConvertHandler(sourceEl, destinationEl, handler) {
	return (function(){
		convertText(sourceEl, destinationEl, handler);
	});
}

sitoctt.utils.setTextConvertEvents(document.querySelector('textarea[name="plain"]'), document.querySelector('textarea[name="coded"]'), encodeURIComponent, decodeURIComponent, makeConvertHandler);

})(document.querySelector('input[name="steps"]'));
