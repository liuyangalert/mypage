window.onload = function(){
	banner_show();
	content_ad("left_ad1");
	content_ad("left_ad2");
	top1();
	immm(".list_ad");
	immm(".list_ad_mini");
}

function banner_show () {
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

function content_ad(id){
	var id = document.getElementById(id);
	var x = id.getElementsByClassName("content_left_icon");
	for(var i=0;i<x.length;i++){
		x[i].index = i;
		$(x[i]).bind("click",function(){
			$this= $(this);
			$(x).removeClass("content_left_icon_active");
			$this.addClass("content_left_icon_active");
			$(id).children(".content_left_ad").children("li").css("z-index","-2");
			$(id).children(".content_left_ad").children("li").eq(this.index).css("z-index","-1");
		});
		
	}
		
}
function top1(){
	 var s = $(".top_btn")[0];
	 var timer = setInterval(
	 	function(){
	 	if( $("body").scrollTop()>200){
	 		$(s).show();
		 } else {
	 		$(s).hide();
		 }
	 	}
	 	,300) 
	 s.onclick=function(){ 
	 	$("body").animate({scrollTop:0},500);
	 }
}

function immm(cls){
	var img = $(cls+" img");
	var lf =$(img).position().left;
	$(img).hover(function(){
		$(this).animate({
			left:lf+5+"px"
		},300); 
	},function(){
		$(this).animate({
			left:lf
		},300); 
	});
}
