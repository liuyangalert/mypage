/*
* @Author: Administrator
* @Date:   2016-07-06 14:27:43
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-13 10:29:47
*/

'use strict';
(function(){
	$(".wrap h3").bind("click",function(){
		if( $(".wrap ul").css("display") == "block" ){
			$(".wrap ul").hide();
		} else{
			$(".wrap ul").show();
		}
	});
})();