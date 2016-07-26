/*
* @Author: Administrator
* @Date:   2016-07-26 09:59:00
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-26 12:51:55
*/

'use strict';

function carousel(){
	var wrap = document.getElementsByClassName("wrap")[0];
	var main = wrap.getElementsByClassName('main')[0];
	var divImg = main.getElementsByTagName('div');
	var timer = null;
	
	wrap.onmouseover = function(){
		clearInterval(timer);
	}
	wrap.onmouseout = function(){
		play();
	}
	
	function indexspan(){
		var index = wrap.getElementsByClassName('index')[0];
		var str='';
		for(var i=0;i<divImg.length;i++){
			str += '<span>'+'</span>';
		}
		index.innerHTML = str;
	}
	indexspan();

	function play(){
		var number = 0;
		var control = wrap.getElementsByClassName('control')[0]
		var next = control.getElementsByClassName("next")[0];
		var prev = control.getElementsByClassName('prev')[0];
		var index = wrap.getElementsByClassName('index')[0];
		var indexs = index.getElementsByTagName('span');
		timer = setInterval(run,1000);

		next.onclick = function(){
			run();
		}

		prev.onclick = function(){
			--number;
			number = number < 0 ? divImg.length-1:number;
			change(number);
		}
		
		for (var i = 0; i < indexs.length; i++) {
				indexs[i].index = i;
			indexs[i].onclick = function(){
				change(this.index);
			}
		}

		function run(){
			++number;
			number = number < divImg.length ? number: 0 ;
			change(number);
			
		}
		function change(n){
			for(var i=0;i<divImg.length;i++){
				divImg[i].style.opacity = '0';
				divImg[i].style.zIndex = '0';
				indexs[i].style.backgroundColor = '#999'
			}
			divImg[n].style.opacity = '1';
			divImg[n].style.zIndex = '1';
			indexs[n].style.backgroundColor = "red";
		}
	}
	play();
	
}

function init(){
	carousel();
}

init();