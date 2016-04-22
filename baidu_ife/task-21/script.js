document.onkeyup = function(event){
	if (event.keyCode == 13 | event.keyCode== 32 |event.keyCode== 186) {
		getvalue();
	}
}

function getvalue(){
	var value = document.getElementById("num");
	var ul = document.getElementById("tag_ul");
	var s = "";
	var number = 13;
	s += "<li>"+value.value+"</li>";
	ul.innerHTML += s;
	value.value = null;
}
