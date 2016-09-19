$(function(){
	$('#fullpage').fullpage({
		'verticalCentered':true,
		'resize':true,
		"navigation":true,
		"navigationPosition":"right",
		"navigationColor":'#333',
		"slidesNavigation":true,
		"scrollOverflow":true,
		"css3":true,
		"afterLoad":function(anchorLink,index){
			if(index == 1){
				$('.selected1').find('.content').css({"top":"200px"});
			}
			if(index == 3){
				console.log('3');
			}
			
		},
		"onLeave":function(index,nextindex,direction){
			if(index == 1){
				$('.selected1').find('.content').css({"top":"50px"});
			}
		}
	})
});