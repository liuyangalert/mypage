document.onkeyup = function(event){
	if (event.keyCode == 13 | event.keyCode== 32 |event.keyCode== 186) {
		getvalue();
	}
}

function getvalue(){

	var value = document.getElementById("num");
	var ul = document.getElementById("tag_ul");
	var li = document.createElement("li");
	var leng = ul.getElementsByTagName("li");
	var s = "";
	if(value.value.trim()!==""){
		if(!ifvalue(ul,value.value)){
			li.innerHTML = value.value.trim();
			ul.appendChild(li);
			value.value = null;
			if(leng.length > 9){
				ul.removeChild(ul.firstChild);
			}
		}	
	}
	del();	
function ifvalue(tag,txt){
	var li = tag.getElementsByTagName("li");
	for(var i=0;i<li.length;i++){
		if( li[i].innerText == txt ){
			return true;
		} else{
			return false;
		}
	}
}
function del(){
	var ul = document.getElementById("tag_ul");
	var li = ul.getElementsByTagName("li");
	for( var i=0;i<li.length;i++ ){
		var s = "";
		li[i].onclick = function(){
			ul.removeChild(this);
		}
		li[i].onmouseover = function(){
			s = this.innerText;
			this.innerText = "删除 "+this.innerText;
		}
		li[i].onmouseout = function(){
			this.innerText = s;
		}
	}
}
	
}
