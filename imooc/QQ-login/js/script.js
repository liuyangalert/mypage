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
	var main = document.getElementsByClassName('main')[0];
	tt.onmousedown = function(event){
		var  m_left= event.clientX + 'px';
		var  m_top = event.clientY + 'px';

		document.onmousemove = function(){
			msmove();
		
		}
	
	}
	document.onmouseup =function(event){
		document.onmousemove =null;
		tt.onmouseup = null;
	}

}


function msmove(event){
	event = event || window.event;
	var main = document.getElementsByClassName('main')[0];
	var  m_left= event.clientX + 'px';
	var  m_top = event.clientY + 'px';
	main.style.left = m_left;
	main.style.top = m_top;
	document.title = '('+m_left+','+m_top+')';
}