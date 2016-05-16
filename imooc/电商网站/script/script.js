window.onload=function(){
	banner_show();
}

function banner_show(){
	var left_btn = $("#banner_tag_left");
	var right_btn = $("#banner_tag_right");
	var banner_w = $("#banner").width();

	$(left_btn).bind("click",function(){
		if( $("#banner").css("left") == "-"+(banner_w-811)+"px"){
			$("#banner").animate({
				left:"0px",
			},1000)
		} else {
			$("#banner").animate({
				left:"-=811px"
			},300)
		}
	});

	$(right_btn).bind("click",function(){
		if($("#banner").css("left") == "0px"){
			$("#banner").animate({
				left:"-"+(banner_w-811)+"px"
			},1000)
		} else {
			$("#banner").animate({
				left:"+=811px"
			},300)
		}
	});
}