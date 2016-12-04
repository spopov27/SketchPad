$(document).ready(function(){
	var color1 = 0;
	var color2 = 0;
	var color3 = 0;
	var rainbow = false;

	for(var  i = 0; i < 625; i++){
			$("#container").prepend("<div class=\"grid\"></div>");
	}

	$(".grid").width(25);
	$(".grid").height(25);
	//$("div").css("background", "white");
	//$(".grid").css("border", "1px solid red");
	$(".grid").css("display", "inline-block");
	$(".grid").css("padding", "0");
	$(".grid").css("margin", "0");

	$(".grid").on("mouseover", function(){
		color1 = Math.floor(Math.random() * 256);
		color2 = Math.floor(Math.random() * 256);
		color3 = Math.floor(Math.random() * 256);

		if(rainbow){
			color1 = 0;
			color2 = 0;
			color3 = 0;
		}
		$(this).css("background-color", "rgb(" + color1 + "," + color2 + "," + color3 + ")");
	});

	$("#reset").click(function(){
		$(".grid").css("background-color", "lightblue");
	});


	$("#rainbow").click(function(){
		if(!rainbow){
			rainbow = true
		}else{
			rainbow = false;
		}
	});



});