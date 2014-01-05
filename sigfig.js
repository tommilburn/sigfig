function numberOfSignificantFigures(num){
	var figures = 0;
		console.log("initial number: " + parseInt(num, 10));
		sigstring = num.toString();
		console.log("this is the number: " + parseFloat(num, 10) + " this is the number  string: " + sigstring);
		var pos = 0
		//whole numbers
		if(sigstring.indexOf('.') == -1){
			console.log("whole number");
			var trailzeros = 0;
			for(var i = sigstring.length-1; i>=0; i--){
				if(sigstring.charAt(i) != '0'){
					break;
				}
				trailzeros++;
			}
			return sigstring.length - trailzeros;
		}

		//decimal number
		else{
			console.log("decimal number");

		}
	return sigstring.length;
}

function isNumber(num){
	return ! isNaN(parseFloat(num)) && isFinite(num);
}

function numberSanitizer(num){
	numstring = num.toString();
	//remove commas
	numstring = num.replace(/','/g,'');
	//remove lead zeros
	var leadzeros = 0;
	for(var i = 0; i < sigstring.length; i++){
		if(sigstring.charAt(i) != '0'){
			break;
		}
		leadzeros++;
	}
	numstring = num.substring(leadzeros, numstring.length -1);
}
