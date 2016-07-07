/*
* @Author: Administrator
* @Date:   2016-07-07 13:55:48
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-07 14:20:17
*/

'use strict';
(function(){
	GetInformation();
})();

function GetInformation(){
	var color = "";
	var norms = "";
	$(".color li").bind("click",function(){


		$(".color li").each(function(){
			$(".color li").css("border-color","#cbcbcb")
		});

		$(this).css("border-color","#337dea");

		color = $(this).html();
		
		getimf(color,norms);

	})
	
	$(".norms li").bind("click",function(){


		$(".norms li").each(function(){
			$(".norms li").css("border-color","#cbcbcb")
		});

		$(this).css("border-color","#337dea");

		norms = $(this).html();

		getimf(color,norms);


		
	})

	

}

function getimf(color,norms){
	var imf = '“'+color +" | "+norms+'”';
	$("#information").html(imf);
}