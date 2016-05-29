var btn = document.getElementsByTagName("input"),
	preBtn = btn[0],
	inBtn = btn[1],
	posBtn = btn[2],
	treeRoot = document.getElementsByClassName("root")[0],
	divList = [],
	timer = null;
window.onload =function(){

	preBtn.onclick = function(){
		 reset();
		 preOrder(treeRoot);
		 changeColor();
	}
	inBtn.onclick = function(){
		 reset();
		 inOrder(treeRoot);
		 changeColor();
	}
	posBtn.onclick = function(){
		 reset();
		 posOrder(treeRoot);
		 changeColor();
	}
}

function preOrder(node){
	if(!(node==null)){
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild)

	}
}

function inOrder (node) {
	 if(!(node==null)){
	 	inOrder(node.firstElementChild);
	 	divList.push(node);
	 	inOrder(node.lastElementChild);
	 } 
}
function posOrder(node){
	if(!(node==null)){
		posOrder(node.firstElementChild);
		posOrder(node.lastElementChild);
		divList.push(node);
	}
}

function changeColor(){
	var i = 0;
	divList[i].style.backgroundColor= "blue";
	timer = setInterval(function(){
		i++;
		if(i< divList.length){
			divList[i-1].style.backgroundColor="#fff";
			divList[i].style.backgroundColor = "blue";
		} else {
			clearInterval(timer);
			divList[divList.length-1].style.backgroundColor = "#fff";
		}
	},500);
}
function reset () {
	 divList = [];
	 clearInterval(timer);
	 var divs = document.getElementsByTagName("div");
	 for(var i =0;i<divs.length;i++){
	 	divs[i].style.backgroundColor = "#fff";
	 }
}