window.onload = function(){
	/*var head = document.getElementById("header");
	var menu = head.getElementsByTagName("ul")[0];
	var mm = menu.getElementsByTagName("li");
	for(var i=0;i<mm.length;i++){
		mm[i].onmouseover = function(){
			for (var i=0;i<mm.length;i++){
				mm[i].className="";
			}
			this.className="on";
		}
	} */

	var	men = document.getElementById("city");
	var mul = men.getElementsByTagName("ul")[0];
	var select = mul.getElementsByTagName("li");
	for(var i=0;i<select.length;i++){
		select[i].onmouseover = function(){
			this.style.background = "#bf4f48";
		}
	}


}