//https://www.iconfinder.com/search/?q=gmail&style=flat

$(".nav-bar").click(function(){
	console.log($(this).text());
	$("#"+$(this).text().toLowerCase()).css("display", "block");
	$(".page").not("#"+$(this).text().toLowerCase()).css("display", "none");
});