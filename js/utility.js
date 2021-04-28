//https://www.iconfinder.com/search/?q=gmail&style=flat

$(document).ready(function() {
	$(this).scrollTop(0);
	$(".proj-header:first").toggleClass("active");
	$(".proj-header:first").next(".proj-content").slideToggle("slow");
	$(".proj-header:first").next(".proj-content").toggleClass("show");
  var pageTitle = $("title").text();
	$(window).blur(function() {
		$("title").text("Wait Come Back!");
	});
	$(window).focus(function() {
		$("title").text(pageTitle);
	});
});

$(".nav-bar").click(function(){
	if($(this).text() == "Dallas Brooks" || $(this).text() == "Home"){
		console.log("here");
		$(".page").css("display", "block");
		return;
	}
	$("#"+$(this).text().toLowerCase()).css("display", "block");
	$(".page").not("#"+$(this).text().toLowerCase()).css("display", "none");
});

$(".proj-header").click(function() {
	$(this).toggleClass("active");
	$(this).next(".proj-content").slideToggle("slow");
	$(this).next(".proj-content").toggleClass("show");
	$(".proj-header").not(this).next(".proj-content").slideUp("slow");
	$(".proj-header").not(this).next(".proj-content").removeClass("show");
	$(".proj-header").not(this).removeClass("active");
});
