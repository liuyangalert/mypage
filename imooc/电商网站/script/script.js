window.onload=function(){
	banner_show();
}

function banner_show(){
	var left_btn = $("#banner_tag_left");
	var right_btn = $("#banner_tag_right");
	var banner = $("banner");
	$(left_btn).bind("click",function(){
		$("#banner").animate({
			left:"-811px",
		},300)
	});
	$(right_btn).bind("click",function(){
		$("#banner").animate({
			left:"0px",
		},300)
	});
}