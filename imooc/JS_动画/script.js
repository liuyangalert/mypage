window.onload=function(){
	
	var dd = document.getElementById("dd");
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");
	dd.onmouseover = function(){ 
		clearInterval(dd.time)
		dd.time = setInterval(function(){
		if (d1.offsetHeight<150) {
			d1.style.height = d1.offsetHeight+5+"px";
			}
		else if(d1.offsetHeight>=150) {
			clearInterval(dd.time);
		}
	},30)
}
	dd.onmouseout =function(){
		clearInterval(dd.time)
		dd.time = setInterval(function(){
			if (d1.offsetHeight>0){
				d1.style.height = d1.offsetHeight-5+"px";
			}
			else if(d1.offsetHeight<=0){
				clearInterval(dd.time);
			}
		},30)
	}

}