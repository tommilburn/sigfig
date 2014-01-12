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
		//@fails 0.0004
		else{
			console.log("decimal number");
			return sigstring.length-1

		}
}

function isNumber(num){
	return ! isNaN(parseFloat(num)) && isFinite(num);
}

function numberSanitizer(numstring){
	//remove lead zeros
	var leadzeros = 0;
	for(var i = 0; i < numstring.length; i++){
		if(numstring.charAt(i) != '0'){
			break;
		}
		leadzeros++;
	}
	numstring = numstring.substring(leadzeros, numstring.length);
	return numstring;
}

function calculateSigFigs(){
	var num1= document.getElementById("num1").value;
	if(isNumber(num1)){
		answer = numberOfSignificantFigures(numberSanitizer(num1));
		document.getElementById("answer").innerHTML=answer;	
	}
}
