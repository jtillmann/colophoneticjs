
String.prototype.colognePhonetics = (function(){

	var substitution = {'ä': 'a', 'ö': 'o', 'ü': 'u', 'ß': 'ss', 'ph': 'f'}
	var exceptions_leading = {
		4: ["ca","ch","ck","cl","co","cq","cu","cx"],
		8: ["dc","ds","dz","tc","ts","tz"]
	};
	var exceptions_following = ["sc","zc","cx","kx","qx"];
	var coding_table = {
		0: 	"aeijouy",
		1: 	"bp",
		2: 	"dt",
		3: 	"fvw",
		4: 	"cgkq",
		48: "x",
		5: 	"l",
		6: 	"mn",
		7: 	"r",
		8: 	"csz"
	};

	if(Array.prototype.contains === undefined){
		Array.prototype.contains = function(element){
			for (var i = 0; i < this.length; ++i) {
				if (this[i] == element) {
					return true;
				}
			}
			return false;
		}
	}

	return function(word){

		var word = word || this + "";

		if(typeof word === 'string' && word.indexOf(' ') !== -1){
			word = word.split(' ');
		}

		if(typeof word === 'object'){
			var phons = [];
			for(i in word){
				phons.push(arguments.callee(word[i]));
			}
			return phons.join(' ');
		}

		if(typeof word !== 'string'){
			return '';
		}

		word = word.toLowerCase();
		for(s in substitution){
			word = word.replace(new RegExp(s, "g"), substitution[s]);
		}

		var value = [];
		var length = word.length;

		for(var i = 0; i < length; i++){

			var l 		= word.substr(i, 1);
			value[i] 	= '';

			if(i === 0 && length > 1 && word[i] + word[i+1] === 'cr'){
				value[i] = 4;
			}

			for(code in exceptions_leading){
				if(exceptions_leading[code].contains(word[i] + word[i+1])){
					value[i] = parseInt(code);
				}
			}

			if(i !== 0 && exceptions_following.contains(word[i-1] + word[i])){
				value[i] = 8;
			}

			if(value[i] == ''){
				for(code in coding_table){
					if(coding_table[code].indexOf(l) !== -1){
						value[i] = parseInt(code);
						break;
					}
				}
			}
		}

		for(var i = 1; i < length; i++){
			if(value[i] == value[i-1]){
				value[i] = "";
			}
			if(value[i] == 0){
				value[i] = "";
			}
		}

		return value.join('') + "";
	}

	})();

