/*
* @Author: Administrator
* @Date:   2016-07-12 10:58:12
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-12 11:23:21
*/

'use strict';
var hour = document.getElementsByName("hour")[0];
var minute = document.getElementsByName("minute")[0];
var second = document.getElementsByName("second")[0];

var time = setInterval(function(){
	var date = new Date();
		hour.innerText = date.getHours(); 
		minute.innerText = date.getMinutes(); 
		second.innerText = date.getSeconds(); 
},100);

