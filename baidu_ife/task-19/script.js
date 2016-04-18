
function insert(){
	var content = document.getElementById("content");
	var insert = document.getElementsByTagName("input");
	
	var num = 0;
	var re = /^[0-9]+.?[0-9]*$/;

	function getnum(){
		num = document.getElementById("num").value;
		if (re.test(num)) {
			if(num>100){
				alert("请输入小于100的数字");
				location.reload(true);//刷新此页面
			}else if(num<10){
				alert("请输入大于10的数字");
				location.reload(true);//刷新此页面
			}else{
				return num;
			}
		}else {
			alert("请输入数字");
			location.reload(true);//刷新此页面
		}
	}
	insert[1].onclick = function(){
		getnum();
		var n = document.createElement("div");
		n.innerHTML = num;
		n.style.height = num+"px";
		content.insertBefore(n,content.firstChild);
		pan();
		del();
	}
	insert[2].onclick = function(){
		getnum();
		var n = document.createElement("div");
 		n.innerHTML = num;
 		n.style.height=num+"px";
		content.appendChild(n);
		pan();
		del();
	}
	insert[3].onclick = function(){
		content.removeChild(content.firstChild);
		del();
	}
	insert[4].onclick = function(){
		content.removeChild(content.lastChild);
		del();
	}
	insert[5].onclick = function(){
		content.innerHTML = null;
		for(var i=0;i<60;i++){
			num = Math.round(Math.random()*90+10);
			content.innerHTML += "<div>"+num+"</div>";
			var dd = content.getElementsByTagName("div");
			dd[i].style.height = num+"px";
			del();
		}
	}
	function del(){
	 	var dd = content.getElementsByTagName("div");
	 	for(var i=0;i<dd.length;i++){
	 		dd[i].onclick = function(){
       			this.parentNode.removeChild(this);
	 		}
	 	}
	}
	function pan(){
		var dd = content.childNodes.length;
		if (dd>60) {
			alert("超过60了");
		}
	}

	}
window.onload = function(){
	insert();
}