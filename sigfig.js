function numberOfSignificantFigures(num){
	var figures = 0;
		sigstring = num.toString();
		var pos = 0
		//whole numbers
		if(sigstring.indexOf('.') == -1){
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
			if(num<1){
				return numberSanitizer(sigstring.substring(sigstring.indexOf('.')+1)).length;
			}
			return sigstring.length-1

		}
}

function isNumber(num){
	return ! isNaN(parseFloat(num)) && isFinite(num);
}

function numberSanitizer(numstring){
	numstring = numstring.replace(/[A-Za-z,]/g, '');
	//remove lead zeros
	var leadzeros = 0;
	for(var i = 0; i < numstring.length; i++){
		if(numstring.charAt(i) != '0'){
			break;
		}
		leadzeros++;
	}
	numstring = numstring.substring(leadzeros, numstring.length);
	console.log(numstring);
	return numstring;
}

function calculateSigFigs(){
	var num1= document.getElementById("num1").value;

	num1 = numberSanitizer(num1);
	if(isNumber(num1)){
		document.getElementById("num1").value = num1;
		answer = numberOfSignificantFigures(num1);
		document.getElementById("answer").innerHTML=answer;	
	}
	else{
		document.getElementById("answer").innerHTML="error";
	}
}
