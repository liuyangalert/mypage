window.onload = function(){
    waterfull("content","box");

    var dataInt = { 'data':[ {'src':'1.jpg'},{'src':'17.jpg'},{'src':'18.jpg'},{'src':'15.jpg'},{'src':'21.jpg'},{'src':'8.jpg'},{'src':'11.jpg'},{'src':'8.jpg'} ] };

    window.onscroll = function(){
      if(checkscrollside()){
        var oparent = document.getElementById('content');
        for( var i=0;i<dataInt.data.length;i++ ){
          var opin = document.createElement("div");
          opin.className = "box";
          oparent.appendChild(opin);
          var obd = document.createElement('div');
          obd.className = 'bd';
          opin.appendChild(obd);
          var oimg = document.createElement('img');
          oimg.src="./images/"+dataInt.data[i].src;
          obd.appendChild(oimg);
        }
        waterfull('content','box');
      }

    }
}

function waterfull(parent,cls){
  var oparent = document.getElementById(parent);
  var ocls = getclassobj(oparent,cls);
  var oclsw = ocls[0].offsetWidth;
  var num = Math.floor( document.documentElement.clientWidth/oclsw );
  oparent.style.cssText = "width:"+oclsw*num+"px;margin:0 auto;";

  var wid = [];
  for( var i=0;i<ocls.length;i++ ){
     var oclsH = ocls[i].offsetHeight;
     if(i<num){
       wid[i] = oclsH;
     } else {
       var minH = Math.min.apply(null,wid);
       var minHIndex = getminHIndex( wid,minH );
       ocls[i].style.position = "absolute";
       ocls[i].style.top = minH+"px";
       ocls[i].style.left = ocls[minHIndex].offsetLeft+"px";
       wid[minHIndex] += ocls[i].offsetHeight;
     }
  }
}

function getclassobj(parent,cls){
  var tag = parent.getElementsByTagName('*');
  var zu = [];
  for(var i=0;i<tag.length;i++){
    if(tag[i].className==cls){
      zu.push(tag[i]);
    }
  }
  return zu;
}


function getminHIndex( arr,minh ){
  for(var i in arr){
    if(arr[i] == minh){
      return i;
    }
  }
}
function checkscrollside(){
  var oparent = document.getElementById("content");
  var apin = getclassobj(oparent,'box');
  var lastpinh = apin[apin.length-1].offsetTop + Math.floor(apin[apin.length-1].offsetHeight/2);
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var documentH = document.documentElement.clientHeight;
  return (lastpinh<scrollTop+documentH)?true:false;
}
