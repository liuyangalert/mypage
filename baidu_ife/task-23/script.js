var result = [];
var timer = null;

window.onload= function() {
	var headNode = document.getElementById("wrapper");
	preOrder(headNode);
	document.getElementById("order").onclick = function(){
		startAnimate();
	}
	document.getElementById("searchAct").onclick = function(){
		var searchContent = document.getElementById("inputCon").value;
		if(!searchContent){
			alert("请输入值");
		} else{
			startAnimate(searchContent);
		}
	}
}

function preOrder(node){
	if(node){
		result.push(node);
	}

	var nodelist = node.children;

	if(nodelist){
		for( var i=0;i<nodelist.length;i++){
			if(nodelist[i].nodeType ==1){
				result.push(preOrder(nodelist[i]));
			}
		}
	}

	for(var s=0;s>result.length;s++){
		if(result[s] === undefined){
			result.splice(s,1);
			s--;
		}
	}
}

function startAnimate(con){
	var flag = true ;
	if( arguments.length == 1 ){
		flag = false;
	}

	var i =0;
	result[i].style.backgroundColor = 'blue';
	timer = setInterval(function(){
		i++;
		if(flag){
			if(i<result.length){
				result[i-1].style.backgroundColor = "#fff";
				result[i].style.backgroundColor = 'blue';
			} else {
				clearInterval(timer);
				result[result.length-1].style.backgroundColor = '#fff';
			}
		} else {
			if( result[i] && result[i].firstChild ){
				var currCon = result[i].firstChild.nodeValue.replace(/^(\s+)|(\s+)$/g,"");
			}
			if(i<result.length && con !== currCon){
				result[i-1].style.backgroundColor = '#fff';
				result[i].style.backgroundColor = 'blue';
			} else if (i<result.length && con === currCon) {
				result[i-1].style.backgroundColor = '#fff';
				result[i].style.backgroundColor = 'red';
				clearInterval(timer);
			} else {
				clearInterval(timer);
				result[result.length-1].style.backgroundColor = '#fff';
			}
		}

	},500)
}