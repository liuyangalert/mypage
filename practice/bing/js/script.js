var btn = document.querySelector('input[type="button"]');


btn.onclick =function(){
    var value = document.getElementsByTagName('input')[0].value;
    console.log(value);
    openURL(value);
};
function openURL(s){
    window.open('http://cn.bing.com/search?q=' + s);
}