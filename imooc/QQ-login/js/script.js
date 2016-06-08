window.onload = function(){
	showOnline();
	ff()
}

function showOnline(){
	var showifm = document.getElementsByClassName("showifm")[0];
	var online = document.getElementsByClassName("online")[0];
	var ul = document.getElementsByClassName("online_list")[0];
	var list = ul.getElementsByTagName("li");
	var show_icon = document.getElementById("icon");

	for(var i=0;i<list.length;i++){
		list[i].onclick = function(event){
			var span = this.getElementsByClassName("icon")[0];
			ul.style.display = 'none';
			showifm.innerText = this.innerText;
			show_icon.className = span.className;
			event.stopPropagation();
		}
	}

	online.onclick = function(event){
		ul.style.display = 'block';
		event.stopPropagation();
	}

	document.onclick = function(event){
        ul.style.display = "none";
        
    }  

}

function ff(){
	var tt = document.getElementById("title");
	tt.onmousedown = function(event){
		var  m_left= event.clientX + 'px';
		var  m_top = event.clientY + 'px';
		var main = document.getElementsByClassName('main')[0];
		var main_l = event.clientX - main.offsetLeft;
		var main_t = event.clientY - main.offsetTop;
		document.onmousemove = function(event){
			event = event || window.event;
			msmove(event,main_l,main_t);
		}
		document.onmouseup =function(event){
			document.onmousemove =null;
			document.onmouseup = null;
		}
<<<<<<< HEAD
	
	}
	document.onmouseup =function(event){
		document.onmousemove =null;
		tt.onmouseup = null;
	}

=======
}
>>>>>>> 9e2c86f07fd152ccce4caaee7517559a9021bd5d
}


function msmove(event,main_l,main_t){
	var main = document.getElementsByClassName('main')[0];
	var l = event.clientX - main_l;
	var t = event.clientY - main_t;
	var winW=document.documentElement.clientWidth || document.body.clientWidth;
	var winH=document.documentElement.clientHeight || document.body.clientHeight;
		winW = winW - main.offsetWidth -10;
		winH = winH - main.offsetHeight-10;

	if(l<0){
		l = 10;
	} else if( l> winW){
			l = winW;
	}
	if(t<0){
		t = 10;
	} else if( t> winH){
			t = winH;
	}

	main.style.left = l+ 'px';
	main.style.top = t + 'px';
}