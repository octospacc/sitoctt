const Exp = {};
Exp.Fs = require('fs');
Exp.ConfigParser = require('./config-ini-parser').ConfigIniParser;

// https://stackoverflow.com/a/69049676
Exp.importAll = function importAll(){ delete this.importAll; Object.assign(global, this); };

Exp.ParseMeta = (Raw) => {
	let Mid = { Meta: "", Macros: "" };
	let Data = { Meta: {}, Macros: {}, IsToml: false };
	const Lines = Raw.trim().split('\n');
	if (Lines[0].trim() === '+++' && Lines.slice(-1)[0].trim() === '+++') {
		Data.IsToml = true;
		Lines = Lines.slice(1, -1);
	}
	for (let i=0; i<Lines.length; i++) {
		let Type;
		let Line = Lines[i].trim();
		if (Line.startsWith('//')) {
			Line = Line.slice('2').trim();
		}
		if (['%', '$'].includes(Line[0])) {
			if (Line.startsWith('%')) {
				Type = 'Meta';
			} else if (Line.startsWith('$')) {
				Type = 'Macros';
			}
		} else {
			if (!Data.IsToml) {
				continue;
			}
			Mid.Meta += Line.trim() + '\n';
		}
		Mid[Type] += Line.substring(1).trim() + '\n';
	}
	Object.keys(Mid).forEach((Type) => {
		const Items = new ConfigParser().parse(Mid[Type]).items();
		Items.forEach((Item) => {
			Data[Type][Item[0]] = Item[1];
		});
	});
	return Data;
};

module.exports = Exp;
