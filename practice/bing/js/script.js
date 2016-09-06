var btn = document.querySelector('input[type="button"]');
var text = document.querySelector('input[type="text"]');

text.addEventListener('focus',function(){
    pause(true);
},false);

text.addEventListener('blur',function(){
    pause(false);
},false);
btn.onclick =function(){
    var value = document.getElementsByTagName('input')[0].value;
    console.log(value);
    openURL(value);
};
function openURL(s){
    if(!s){
        s = '拜托，查询点什么！';
    }
    window.open('http://cn.bing.com/search?q=' + s);
}

function pause(bool){
    var mp4 = document.querySelector('video[type="video/mp4"]');
    var mp3 = document.querySelector('video[type="video/mp3"]');
    if(bool){
        mp4.pause();
        mp3.pause();
    }else{
        mp4.play();
        mp3.play();
    }
}