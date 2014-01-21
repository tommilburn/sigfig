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
	var ops = document.getElementsByName("ops");

	var answerPrecision;
	var calculation;
	
	num1 = numberSanitizer(num1.toString());
	num2 = numberSanitizer(num2.toString());

	if(isNumber(num1) && isNumber(num2)){
		answerPrecision = Math.min(numberOfSignificantFigures(num1), numberOfSignificantFigures(num2));
		console.log(answerPrecision);
		
		if(ops[0].checked){
			calculation = parseFloat(num1) + parseFloat(num2);
		}
		else if(ops[1].checked){ 
			calculation = parseFloat(num1) - parseFloat(num2);
		}
		else if(ops[2].checked){ 
			calculation = parseFloat(num1) * parseFloat(num2);
		}
		
		else if(ops[3].checked){ 
			calculation = parseFloat(num1) / parseFloat(num2);
		}
		else{
			document.getElementById("answer").innerHTML="no operation";
			return;
		}

		answer = new Number(calculation);
		answer = parseFloat(answer.toPrecision(answerPrecision));
		console.log(answer);
		document.getElementById("answer").innerHTML= answer.toLocaleString();
	}
	else{
		document.getElementById("answer").innerHTML="error";
	}
}

function getOp(){

}
