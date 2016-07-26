/*
* @Author: Administrator
* @Date:   2016-07-26 14:25:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-26 17:10:53
*/

'use strict';
init();
function init(){
	run();
}
var index = 0;
function run(){
	var wrap = document.getElementsByClassName('wrap')[0];
	var main = document.getElementsByClassName('main')[0];
	var divImg = main.getElementsByTagName('div');
	var indexs = document.getElementsByClassName('index')[0];
	var timer  = null;
	var wrapW = wrap.offsetWidth;

	var next = wrap.getElementsByClassName('next')[0];
	var prev = wrap.getElementsByClassName('prev')[0];
	next.onclick = function(){
		console.log(index);
		index++;
		console.log(index);
		index = index < divImg.length ? index : 0;
		console.log(index);
		gobanner(index);
		
	}
	prev.onclick = function(){
		console.log(index);
		index--;
		console.log(index);
		index = index < 0 ? divImg.length-1 : index;
		console.log(index);
		gobanner(index);
	}

	wrap.onmouseover = function(){
		clearInterval(timer);
	}
	wrap.onmouseout = function(){
		run();
	}

	timer = setInterval(function(){
		console.log(index);
		index++;
		console.log(index);
		index = index < divImg.length ? index : 0;
		gobanner(index);
	},1000);

	function gobanner(number){
		var span = indexs.getElementsByTagName('span');
		main.style.marginLeft = '-'+number*wrapW + 'px';
	}

	indexspan();
	function indexspan(){
		
		var str = '';
		for (var i = 0; i < divImg.length; i++) {
			str += '<span>'+'</span>';
		}
		indexs.innerHTML = str;

		var span = indexs.getElementsByTagName('span');

		for (var i = 0; i < span.length; i++) {
			
			span[i].index = i;
			span[i].onclick = function(){

				this.style.backgroundColor = 'red';
				gobanner(this.index);
			}
		}
	}
}