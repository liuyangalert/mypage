(function(){
	touch();
	active();
	point();
})();
function touch(){
	var box = document.getElementsByClassName("box");
	for (var i = 0; i < box.length; i++) {
		box[i].ontouchstart = function(){
			this.style.backgroundColor = "#eee";
		}
		box[i].ontouchmove = function(){
			this.style.backgroundColor = "#ccc";
		}
		box[i].ontouchend = function(){
			this.style.backgroundColor = "";
		}
	}
}
function active () {
	 var  Oul = document.getElementById("btn");
	 var  btn = Oul.getElementsByTagName("li");
	 for (var i = 0; i < btn.length; i++) {
	 	btn[i].ontouchstart = function  () {
	 		for (var i = 0; i < btn.length; i++) {
	 			btn[i].className = "";
	 		}
	 		this.className = "btnActive";
	 	}
	 }
}
function point() {
	 var point = document.getElementsByClassName("head")[0].getElementsByTagName("div")[2];
	 var span = point.getElementsByTagName("span")[0];
	 point.ontouchstart = function() {
	 	if (span.style.display == "none") {
	 		span.style.display = "block";
	 	} else{
	 		 span.style.display = "none";
	 	}
	 }
}