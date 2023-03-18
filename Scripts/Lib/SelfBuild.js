const Exp = {};
Exp.Fs = require('fs');

// https://stackoverflow.com/a/69049676
Exp.importAll = function importAll(){ delete this.importAll; Object.assign(global, this); };

Exp.TryStringToList = In => {
	if (typeof(In) == 'string') {
		return In.split(',');
	} else {
		return In;
	};
};

Exp.Range = (Start, Stop, Step) => {
	Step = Step || 1;
	return Array.from(
		{ length: (Stop - Start) / Step + 1 },
		(value, index) => Start + index * Step,
	);
};

Exp.RawDataCssRule = RawData => {
	//RawData = RawData.map(x => {
	//	return({animal: x});
	//});
	//var JsonData = {};
	//RawData.forEach(function(Val) { // sad, variable name not transcribed with function pass
	//	var [Name] = Object.keys({Val});
	//	Object.assign(JsonData, JSON.parse(`{"${Name}": "${Val}"}`));
	//});
	// TODO: Handle apostrophes?
	return `#RawDataCssInject{background:url('${JSON.stringify(RawData)}');}`;//'\n/*' + JSON.stringify(JsonData) + '*/';
};

Exp.Unpack = (Left, Middle, Right) => {
	var Str = '';
	TryStringToList(Middle).forEach(function(Target) {
		Str += `${Left}${Target}${Right}`;
	});
	return Str;
};

// Make a CSS string basically emulating the :where selector, for old browsers
Exp.Where = (Left, Middle, Right) => {
	var Style = '';
	TryStringToList(Middle).forEach(function(Target) {
		Style += `${Left}${Target}${Right},`;
	});
	return Style.slice(0, -1);
};

module.exports = Exp;
