window.onload=function(){
	banner_show();
}

function banner_show(){
	var left_btn = $("#banner_tag_left");
	var right_btn = $("#banner_tag_right");
	var Owidth = $("#banner ul li").width();
	var Oindex = $("#banner ul li");
	var banner_w = $("#banner").width();
 	var index = 0;
	$(left_btn).bind("click",function(){
		index++;
		if( index>(Oindex.length-1)){
			index = 0;
		}
		$("#banner").animate({
			left:-Owidth*index+"px",
		},300)
	});
	$(right_btn).bind("click",function(){
		index--;
		if( index<0){
			index=Oindex.length-1;
		}
		$("#banner").animate({
			left:-Owidth*index+"px",
		},300)
	});
}