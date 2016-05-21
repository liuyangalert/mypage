window.onload=function(){
	banner_show();
}

function banner_show(){
	var left_btn = $("#prev");
	var right_btn = $("#next");
	var Owidth = $("#banner ul li").width();
	var Oindex = $("#banner ul li");
	var banner_w = $("#banner").width();
 	var num = 0;
	$(left_btn).bind("click",function(){
		num++;
		if( num>(Oindex.length-1)){
			num = 0;
		}
		$("#banner").animate({
			left:-Owidth*num+"px",
		},300)
		banner_icon();
	});

	$(right_btn).bind("click",function(){
		num--;
		if( num<0){
			num=Oindex.length-1;
		}
		$("#banner").animate({
			left:-Owidth*num+"px",
		},300)
		banner_icon();
	});
	var timer = setInterval(function(){
					num++;
					
					if( num>(Oindex.length-1)){
						num = 0;
					}
					if( num<0){
						num=Oindex.length-1;
					}
					
					$("#banner").animate({
						left:-Owidth*num+"px",
					},300)
					banner_icon();
				},1000)

	$("#main_banner").hover(function(){
			clearInterval(timer);
		},function(){
			banner_show();
		});

	$(".banner_icon").bind("click",function(){
		$this = $(this);
		num = $this.html() - 1;
		$("#banner").animate({
			left:-Owidth*num+"px",
		},300)
		$(".banner_icon").removeClass("banner_icon_active");
		$this.addClass("banner_icon_active");
	})

	function banner_icon(){
	$(".banner_icon").removeClass("banner_icon_active");
	$(".banner_icon").eq(num).addClass("banner_icon_active");
	}
}
	