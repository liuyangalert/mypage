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
		banner_icon();
	});

	$(right_btn).bind("click",function(){
		index--;
		if( index<0){
			index=Oindex.length-1;
		}
		$("#banner").animate({
			left:-Owidth*index+"px",
		},300)
		banner_icon();
	});

	setInterval(function(){
		index++;
		if( index>(Oindex.length-1)){
			index = 0;
		}
		if( index<0){
			index=Oindex.length-1;
		}
		$("#banner").animate({
			left:-Owidth*index+"px",
		},300)
		banner_icon();
	},5000)

	$(".banner_icon").bind("click",function(){
		$this = $(this);
		index = $this.html() - 1;
		$("#banner").animate({
			left:-Owidth*index+"px",
		},300)
		$(".banner_icon").removeClass("banner_icon_active");
		$this.addClass("banner_icon_active");
	})

	function banner_icon(){
	$(".banner_icon").removeClass("banner_icon_active");
	var x = document.getElementsByClassName("banner_icon");
	for( var i=0;i<x.length;i++ ){
		$(x[index]).addClass("banner_icon_active");
	}
	}
}