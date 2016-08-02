/*
* @Author: Administrator
* @Date:   2016-07-28 12:10:30
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-28 14:02:14
*/

'use strict';

timer();
function timer(){
	var year = document.getElementsByClassName('year')[0];
	var month = document.getElementsByClassName('month')[0];
	var day = document.getElementsByClassName('day')[0];
	var week = document.getElementsByClassName('week')[0];
	var time = document.getElementsByClassName('time')[0];
	var weeks = [
		'星期日',
		'星期一',
		'星期二',
		'星期三',
		'星期四',
		'星期五',
		'星期六'
		]
	var seconds = setInterval(function(){
		var date = new Date();
		year.innerText = date.getFullYear() + '年' ;
		month.innerText =  date.getMonth()+1 + '月';
		day.innerText = date.getDate() + '日 ';
		week.innerText = weeks[date.getDay()];
		var second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds(); 
		time.innerText = ' ' + date.getHours() + ':' + date.getMinutes() + ":" + second;
	},500)
}

skin();
function skin(){
	var skins = document.getElementsByClassName('skin')[0];
	var control = true;
	skins.onclick = function(){

		if(control){
			document.getElementsByClassName('header')[0].style.borderBottomColor = '#99CC99';
			control = false;
		} else{
			document.getElementsByClassName('header')[0].style.borderBottomColor = '#ddd';
			control = true;
		}

		

	}
}
