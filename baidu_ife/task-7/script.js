window.onload = function(){
	var menu = document.getElementsByTagName("ul")[0];
	var mm = menu.getElementsByTagName("li");
	for(var i=0;i<mm.length;i++){
		mm[i].onmouseover = function(){
			for (var i=0;i<mm.length;i++){
				mm[i].className="";
			}
			this.className="on";
		}
	} 
}