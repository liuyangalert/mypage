/*
* @Author: Administrator
* @Date:   2016-07-20 11:39:26
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-29 10:35:37
*/

'use strict';
addlist();
linedel();
closeclick();
changInput();
changP();
function addevent(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,true);
	} else if(element.attachEvent){
		element.attachEvent('on'+type,handler);
	} else{
		element['on'+type] = handler;
	}
}
function removeevent(element,type,handler){
	if(element.removeEventListener){
		element.removeEventListener(type,handler,flase);
	} else if(element.detachEvent){
		element.detachEvent('on'+type,handler);
	} else{
		element['on'+type] = null;
	}
}
//创建add list任务
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
					closeclick();
					changInput();
					changP();
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

			} else{
				this.parentNode.style.textDecoration = "inherit";
				this.parentNode.style.backgroundColor = "#fff";
			}
		}
	}
}


//点击的P元素变成输入框
function changInput(){
	var list = document.getElementsByClassName("todo-list")[0];
	var check = list.getElementsByTagName("p");
//绑定每个p元素
	for (var i=0;i<check.length;i++) {
		check[i].onclick= function(e){
			e = e || window.e;
			//清楚其他的input变为p元素
			changP();
			var str = this.innerText;
			var input = document.createElement("input");
				input.setAttribute('type','text');
				input.value = str;
			this.parentNode.insertBefore(input,this.parentNode.childNodes[2]);
			this.parentNode.removeChild(this);
			console.log("变成input");
			e.stopPropagation();
		}
	}
}

//转换成文本标签
function changP(){
	var list = document.getElementsByClassName("todo-list")[0];
	var input = list.getElementsByTagName('input');
	var inputP = [];
//获取只是list的input标签
	for(var i=0;i<input.length;i++){
		if( input[i].getAttribute('type') == "text" ){
			inputP.push(input[i]);
		}
	}

	//全部转化成文本标签
	for(var i=0;i<inputP.length;i++){
		var the = inputP[i];
		var str = the.value;
		var p = document.createElement("p");
			p.innerText = str;
			the.parentNode.insertBefore(p,the.parentNode.childNodes[2]);
			the.parentNode.removeChild(the);
			
	}


	//给新建的p标签绑定click事件
	changInput();
	return false;
}
