function addEvent(ele,event,handler){
	if (ele.addEvenListener) {
		ele.addEvenListener(event,handler,false);
	}
	else if (ele.attachEvent) {
		ele.attachEvent("on"+event,handler);
	}
	else{
		ele["on"+event] = handler;
	}
	}

var num = 0;
function getnum(){
	num = document.getElementById("num").value;
	}
function insert(){
	var content = document.getElementById("content");
	var insert = document.getElementsByTagName("input");
	insert[1].onclick = function(){
		getnum();
		var x = content.getElementsByTagName("div")[0];
		var n = document.createElement("div");
		n.innerHTML = num;
		content.insertBefore(n,x);
	}
	insert[2].onclick = function(){
		getnum();
		var n = document.createElement("div");
		n.innerHTML = num;
		content.appendChild(n)
	}
	insert[3].onclick = function(){
		var x = content.childNodes;
		content.removeChild(x[0]);
	}
	insert[4].onclick = function(){
		var x = content.childNodes;
		content.removeChild(x[x.length-1]);
	}
}
window.onload = function(){
	insert();
}