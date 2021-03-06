$(document).ready(function(){
	$('#num1').focus();
});

$("#num1").keypress(function(key){
	if(key.which === 43){
		//addition		
		key.preventDefault();
		$("#addition").attr("checked", true);
		$("#num2").focus();
	}
	else if(key.which === 45){
		//subtraction
		key.preventDefault();
		$("#subtraction").attr("checked", true);
		$("#num2").focus();
	}
	else if(key.which === 42){
		//multiplication
		key.preventDefault();
		$("#multiplication").attr("checked", true);
		$("#num2").focus();
	}
	else if(key.which === 47){
		//division		
		key.preventDefault();
		$("#division").attr("checked", true);
		$("#num2").focus();
	}
});

$("#num2").keypress(function(key){
	if(key.which === 13){
		key.preventDefault();
		calculateSigFigs();
	}
	else if(key.which === 43){
		//addition		
		key.preventDefault();
		$("#addition").attr("checked", true);
		calculateSigFigs();
	}
	else if(key.which === 45){
		//subtraction
		key.preventDefault();
		$("#subtraction").attr("checked", true);
		calculateSigFigs();
	}
	else if(key.which === 42){
		//multiplication
		key.preventDefault();
		$("#multiplication").attr("checked", true);
		calculateSigFigs();
	}
	else if(key.which === 47){
		//division		
		key.preventDefault();
		$("#division").attr("checked", true);
		calculateSigFigs();
	}
});

$(":radio").click(function(){
	if(document.getElementById("num2").value != "" && document.getElementById("num1").value != ""){
		calculateSigFigs();
	}
	else{
		$("#num2").focus();
	}
});

$("#num1").click(function(){
	this.select();
});

$("#num2").click(function(){
	this.select();
});

$("#answer").click(function(){
	this.dblclick();
});