
function insert(){
	var content = document.getElementById("content");
	var insert = document.getElementsByTagName("input");
	var dd = content.getElementsByTagName("div");
	var num = "";
	var re = /^[0-9]+.?[0-9]*$/;
	var nm = [];
	function getnum(){
		num = document.getElementById("num").value;
		if(num == ""){
			alert("请输入内容!");
		}else {
			num = num.replace(/[^\d\u4e00-\u9fa5a-zA-Z]+/g, " ").split(" ");
		}
		
	}
	// function getResult(str) {
 //        return str.replace(/[^\d\u4e00-\u9fa5a-zA-Z]+/g, " ").split(" ");
 //    }
	insert[0].onclick = function(){
			getnum();
				for( var i=0;i<num.length;i++ ){
					var n = document.createElement("div");
					n.innerHTML = num[i];
					n.style.height = num[i]+"px";
					content.insertBefore(n,content.firstChild);
					pan();
					del();
				}
	}
	insert[1].onclick = function(){
		getnum();
			for( var i=0;i<num.length;i++ ){
				var n = document.createElement("div");
		 		n.innerHTML = num;
		 		n.style.height=num+"px";
				content.appendChild(n);
				pan();
				del();
			}
	}
	insert[2].onclick = function(){
		content.removeChild(content.firstChild);
		del();
	}
	insert[3].onclick = function(){
		content.removeChild(content.lastChild);
		del();
	}
	insert[4].onclick = function(){
		content.innerHTML = null;
		for(var i=0;i<60;i++){
			num = Math.round(Math.random()*90+10);
			content.innerHTML += "<div>"+num+"</div>";
			var dd = content.getElementsByTagName("div");
			dd[i].style.height = num+"px";
			del();
		}
	}
	insert[5].onclick = function(){
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
	insert[6].onclick = function(){
		getnum();
		var d = content.getElementsByTagName("div");
		 for (var i = 0;i<num.length; i++) {
              for(var j=0;j<d.length;j++){
              	var s = d[j].innerText.search(num[i]);
              	if(s >= 0){
              		d[j].style.background = "red";
              	}
              }
            }
		

	}
	insert[7].onclick = function(){
		content.innerHTML = "";
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