/*
* @Author: Administrator
* @Date:   2016-07-12 13:00:51
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-12 13:13:49
*/

'use strict';
var button = document.getElementsByTagName("input");
for(var i=0;i<button.length;i++){
		button[i].onclick = function(e){
			for(var i=0;i<button.length;i++){
				button[i].type = "button";	
			}
			this.type = "text";
			e.stopPropagation();
	}
	
}
document.onclick = function(){
	for(var i=0;i<button.length;i++){

		button[i].type = "button";

		}
}

