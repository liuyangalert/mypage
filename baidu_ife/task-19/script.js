var num = 0;
var re = /^[0-9]+.?[0-9]*$/;

function getnum(){
	num = document.getElementById("num").value;
	}
function insert(){
	var content = document.getElementById("content");
	var insert = document.getElementsByTagName("input");
	insert[1].onclick = function(){
		getnum();
		var n = document.createElement("div");
		if (re.test(num)) {
	 		n.innerHTML = num;
			content.insertBefore(n,content.firstChild);
			del();
		}else{
			alert("请输入数字！");
		}
	}
	insert[2].onclick = function(){
		getnum();
		var n = document.createElement("div");
		if (re.test(num)) {
	 		n.innerHTML = num;
			content.appendChild(n);
			del();
		}else{
			alert("请输入数字！");
		}
	}
	insert[3].onclick = function(){
		var x = content.childNodes;
		content.removeChild(content.firstChild);
		del();
	}
	insert[4].onclick = function(){
		var x = content.childNodes;
		content.removeChild(content.lastChild);
		del();
	}
	function del(){
	 	var dd = content.getElementsByTagName("div");
	 	for(var i=0;i<dd.length;i++){
	 		dd[i].onclick = function(){
				var x = this.parentNode;
       			x.removeChild(this);
				del();
	 		}
	 	}
	}

	}
window.onload = function(){
	insert();
}