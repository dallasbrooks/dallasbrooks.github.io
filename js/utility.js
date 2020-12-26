//https://www.iconfinder.com/search/?q=gmail&style=flat

$(".nav-bar").click(function(){
	if($(this).text() == "Dallas Brooks" || $(this).text() == "Home"){
		console.log("here");
		$(".page").css("display", "block");
		return;
	}
	$("#"+$(this).text().toLowerCase()).css("display", "block");
	$(".page").not("#"+$(this).text().toLowerCase()).css("display", "none");
});