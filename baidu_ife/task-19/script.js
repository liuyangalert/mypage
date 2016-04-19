
function insert(){
	var content = document.getElementById("content");
	var insert = document.getElementsByTagName("input");
	var dd = content.getElementsByTagName("div");
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
	insert[6].onclick = function(){

		var eleHeight = [];
		for(var i=0;i<dd.length;i++){
			eleHeight.push(dd[i].offsetHeight);
		}
		var i=0,j=1,timer = null;
		timer = setInterval(run,3);
		function run(){
			if( i < eleHeight.length ) {
				if( j < eleHeight.length ) {
					if( eleHeight[i] > eleHeight[j] ){
						var temp = eleHeight[i];
						eleHeight[i] = eleHeight[j];
						eleHeight[j] = temp;
						dd[i].style.height = eleHeight[i]+"px";
						dd[i].innerText = eleHeight[i]
						dd[j].style.height = temp+"px";
						dd[j].innerText = temp;
					}
					j++;
				} else {
					i++;
					j = i+1;
				}
			}else {
				clearInterval(timer);
				return;
			}
		}

	}
	function del(){
	 	var d = content.getElementsByTagName("div");
	 	for(var i=0;i<dd.length;i++){
	 		d[i].onclick = function(){
       			this.parentNode.removeChild(this);
	 		}
	 	}
	}
	function pan(){
		var d = content.childNodes.length;
		if (d>60) {
			alert("超过60了");
		}
	}

	}
window.onload = function(){
	insert();
}