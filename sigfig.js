function numberOfSignificantFigures(num){
	var figures = 0;
	if(isNumber(num)){
		sigstring = num.toString();
		var pos = 0
		//check for leading 0s
		for(var pos; pos<sigstring.length; pos++){
			if(sigstring.charAt(pos) != 0){
				break;
			}
		}
	return sigstring.length - pos;
	}
	else{
		return -1;
	}
}

function isNumber(num){
	return ! isNaN(parseFloat(num));
}
