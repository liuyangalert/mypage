/*
* @Author: Administrator
* @Date:   2016-07-06 14:27:43
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-13 11:38:32
*/

'use strict';
(function(){
	$(".wrap").each(function(index){
		$(".wrap h3").eq(index).bind("click",function(){
		if( $(".wrap ul").eq(index).css("display") == "block" ){
			$(".wrap ul").eq(index).hide();
		} else{
			$(".wrap ul").eq(index).show();
		}
	});
	})
	
})();