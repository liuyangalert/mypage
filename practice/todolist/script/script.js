/*
* @Author: Administrator
* @Date:   2016-07-20 11:39:26
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-21 18:12:06
*/

'use strict';
addlist();
linedel();
closeclick();
changInput();


//创建list任务
function addlist(){
	var task = document.getElementsByClassName("todo-input")[0];
	var list = document.getElementsByTagName("ul")[0];
	task.onfocus = function(){
		document.onkeydown = function(e){
			e = event || window.event;
			if( e.keyCode == 13 ){
				if(task.value){
					var firstli = list.getElementsByTagName("li");
						//创建input元素，并设置属性
					var checkbtn = document.createElement("input");
						checkbtn.setAttribute('type','checkbox');
						//创建P元素，并获取value
					var p = document.createElement("p");
						p.innerText = task.value;
						//创建span元素，并设置class
					var span = document.createElement("span");
						span.setAttribute('class','li-close');
						span.innerHTML ='&times;';

						//创建li元素，并增加子节点
					var li = document.createElement("li");
						li.appendChild(checkbtn);
						li.appendChild(p);	
						li.appendChild(span);
						//列表增加li为第一个节点
					list.insertBefore(li,list.childNodes[0]);
					task.value = '';
					linedel();
					changInput();
					closeclick();
				}
			}

			
		}
	}
}


// 关闭函数
function closeclick(){
	var close = document.getElementsByClassName("li-close");
	for(var i=0;i<close.length;i++){
		close[i].onclick = function(){
			this.parentNode.parentNode.removeChild(this.parentNode);
		}
	}
}


// 选中增加删除线，取消去除
function linedel(){
	var close = document.getElementsByClassName("todo-list")[0];
	var check = close.getElementsByTagName("input");
	
	for(var i=0;i<check.length;i++){
		if( check[i].checked ){
			check[i].parentNode.style.textDecoration = "line-through";
			check[i].parentNode.style.backgroundColor = "#eee";
		}

		check[i].onclick =function(){
			if( this.checked ){
				this.parentNode.style.textDecoration = "line-through";
				this.parentNode.style.backgroundColor = "#eee";

			} else if( !this.checked ){
				this.parentNode.style.textDecoration = "none";
				this.parentNode.style.backgroundColor = "#fff";
			}
		}
	}
}


// 点击变成输入按钮
function changInput(){
	var list = document.getElementsByClassName("todo-list")[0];
	var check = list.getElementsByTagName("p");

	for (var i=0;i<check.length;i++) {
		check[i].onclick =function(){
			var str = this.innerText;
			var input = document.createElement("input");
				input.setAttribute('type','text');
				input.value = str;
			this.parentNode.insertBefore(input,this.parentNode.childNodes[1]);
			this.parentNode.removeChild(this);
		}
	}
}


// function changP(){
// 	var input = document.getElementsByClassName("todo-list")[0];
// }