$(document).ready(function() {
	$(this).scrollTop(0);
	var pageTitle = $("title").text();
	$(window).blur(() => {
		$("title").text("Wait Come Back!");
	});
	$(window).focus(() => {
		$("title").text(pageTitle);
	});
});

$(".nav-bar").click(function(){
	var text = $(this).text().toLowerCase();
	if(text == "dallas brooks"){
		$(this).scrollTop(0);
		return;
	}else if(text == "resume"){
		return;
	}
	$("#"+text)[0].scrollIntoView();
});

$(".proj-header").click(function() {
	$(this).toggleClass("active");
	$(this).next(".proj-content").slideToggle("slow");
	$(this).next(".proj-content").toggleClass("show");
	$(".proj-header").not(this).next(".proj-content").slideUp("slow");
	$(".proj-header").not(this).next(".proj-content").removeClass("show");
	$(".proj-header").not(this).removeClass("active");
});
