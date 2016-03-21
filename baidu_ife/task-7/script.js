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

	var	men = document.getElementById("city");
	var mul = men.getElementsByTagName("ul")[0];
	var select = mul.getElementsByTagName("li");
	for(var n=0;n<select.length-1;n++){
		select[n].onmouseover = function(){
			this.id = "sele";
			var slmen = this.getElementsByTagName("ul")[0];
			if(slmen){
				slmen.style.display = "block";
				var ss = slmen.getElementsByTagName("li");
				for(var i=0;i<ss.length;i++){
				ss[i].onmouseover = function(){
					this.style.background = "#bf4f48";
					this.style.color = "#fff";
					var sp = this.getElementsByTagName("span")[0];
					if(sp){
						sp.style.display = "block";
					}
				}
				ss[i].onmouseout = function(){
					this.style.background = "";
					this.style.color = ""; 
					var sp = this.getElementsByTagName("span")[0];
					if(sp){
						sp.style.display = "none";
					}
				}
			}
		}}
		select[n].onmouseout = function(){
			this.id = "";
			var slmen = this.getElementsByTagName("ul")[0];
				slmen.style.display = "none";}
		}

		var seach = document.getElementById("seach");
			seach.onmouseover = function(){
				this.style.background = "#bf3f48"
			}
			seach.onmouseout = function(){
				this.style.background = ""
			}



}