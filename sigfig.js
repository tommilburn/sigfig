function numberOfSignificantFigures(num){
	var figures = 0;
	if(isNumber(num)){
		sigstring = num.toString();
		var pos = 0
		//whole numbers
		if(sigstring.indexOf('.') == -1){
			console.log("whole number");
			return sigstring.length - pos;
			//check for leading 0s
			for(var pos; pos<sigstring.length; pos++){
				if(sigstring.charAt(pos) != 0){
					break;
				}
			}
		}	
		else{
			console.log("decimal number");

		}
	}
	else{
		return -1;
	}
	return sigstring.length - pos;
}

function isNumber(num){
	return ! isNaN(parseFloat(num)) && isFinite(num);
}

