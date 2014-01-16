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
	if(numstring != "0"){
		for(var i = 0; i < numstring.length; i++){
			if(numstring.charAt(i) != '0'){
				break;
			}
			leadzeros++;
		}
	}
	numstring = numstring.substring(leadzeros, numstring.length);
	return numstring;
}

function calculateSigFigs(){
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var op = document.getElementById("op").value;
	var answerPrecision;
	var answer;
	
	num1 = numberSanitizer(num1.toString());
	num2 = numberSanitizer(num2.toString());

	if(isNumber(num1) && isNumber(num2)){
		answerPrecision = Math.min(numberOfSignificantFigures(num1), numberOfSignificantFigures(num2));
		console.log(answerPrecision);
		switch(op){
			case "+":
				console.log("addition");
				break;
			case "-": 
				console.log("subtraction");
				break;
			case "*":
				console.log("multiplication");
				break;
			case "/":
				console.log("division");
				break;
		}
		answer.toPrecision(answerPrecision);
	}
	else{
		document.getElementById("answer").innerHTML="error";
	}
}
