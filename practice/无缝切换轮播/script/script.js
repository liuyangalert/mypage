/*
* @Author: Administrator
* @Date:   2016-07-26 14:25:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-27 13:19:56
*/

'use strict';
var wrap = document.getElementsByClassName('wrap')[0];
var main = document.getElementsByClassName("main")[0];
var divImg = main.getElementsByTagName('div');
var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];
var number = 2;
var timer = null;

time();
function time(){
    timer = setInterval(function(){
		number++
		number = nub(number);
		go(number,'next');
	},1500)
}



wrap.onmouseover = function(){
	clearInterval(timer);
}
wrap.onmouseout = function(){
 	time();
}

prev.onclick = function(){
	number--;
	number = nub(number);
	go(number,'prev');
}
next.onclick = function(){
	number++;
	number = nub(number);
	go(number,'next')
}

function nub(x){
	x = x < 0 ? divImg.length-1 : x;
	x = x > divImg.length-1 ? 0 : x;
	return x;
}

function go(index,control){
	switch(control){
		case 'prev':
				for (var i = 0; i < divImg.length; i++) {
					divImg[i].style.left = '-' + main.offsetWidth + 'px';
				}
				var x = index+1;
				x = nub(x);

				divImg[x].style.left = '0' + 'px';
				divImg[index].style.left = '-' + main.offsetWidth+'px';

				var left = - main.offsetWidth;
					var timer = setInterval(function(){
						if(left < 0){
							left = left + main.offsetWidth/10;
							divImg[x].style.left =  (main.offsetWidth + left)+'px';
							divImg[index].style.left = left +'px';
						} else if( left == 0 || left>0){
							clearInterval(timer);
						}
					},50);
				console.log('上一张');
				
			break;
		case 'next':
				for (var i = 0; i < divImg.length; i++) {
					divImg[i].style.left = main.offsetWidth + 'px';
				}
				var x = index-1;
					x = nub(x);

				divImg[x].style.left = '0' + 'px';
				divImg[index].style.left = main.offsetWidth+'px';

				var left = main.offsetWidth;
					var timer = setInterval(function(){
						if(left > 0){
							left = left - main.offsetWidth/10;
							divImg[index].style.left = left+'px';
							divImg[x].style.left = '-' + (main.offsetWidth - left) +'px';
						} else if(left == 0 || left<0){
							clearInterval(timer);
						}
					},50);
				console.log('下一张');	

			break;
		default:
				for (var i = 0; i < divImg.length; i++) {
					divImg[i].style.left = main.offsetWidth + 'px';
				}
				var x = index-1;
					x = nub(x);

				divImg[x].style.left = '0' + 'px';
				divImg[index].style.left = main.offsetWidth+'px';
				var left = main.offsetWidth;
					var timer = setInterval(function(){
						if(left != 0){
							left = left - main.offsetWidth/10;
							divImg[index].style.left = left+'px';
							divImg[x].style.left = '-' + (main.offsetWidth - left) +'px';
						} else if(left==0 || left<0){
							clearInterval(timer);
						}
					},50);
				console.log('下一张');	
	}
}