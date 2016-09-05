
//点击不在提醒 start
var tip = document.querySelector('.header-tip');
var noTip =tip.querySelector('.no-tip-angin');
tq.addEvent(noTip,'click',function(){
    document.cookie = 'tipAngin=false';
    tip.parentNode.removeChild(tip);
});
tipTrue()
function tipTrue(){
    var objCookie = tq.getCookieObj();
    if(objCookie['tipAngin'] == 'false'){
        tip.parentNode.removeChild(tip);
    }else{
        tip.style.display = 'block';
    }
}
// 不在提醒 end

//已关注 start
var btn = document.querySelector('.guanzhu');
var att = btn.querySelector('.attention');
//修改关注CSS
function attention(){
    att.disabled = true;
    att.parentNode.className += ' '+'guanzhu2';
    att.nextElementSibling.innerHTML = '取消';
    att.nextElementSibling.className = ' removeAtt';
    tq.addEvent(att.nextElementSibling,'click',function(){
        if(this.className.indexOf('removeAtt') != -1){
            this.className = this.className.replace('removeAtt','');
            removeAtt();
        }
    });
}
function removeAtt(){
    att.disabled = false;
    att.parentNode.className = att.parentNode.className.replace('guanzhu2','');
    att.nextElementSibling.innerHTML = '粉丝<span>45</span>';
}
//密码校验
function passOnline(){
    var cookie = tq.getCookieObj();
    var obj = {
        url:'http://study.163.com/webDev/login.htm',
        type:'GET',
        data:{
            userName:hex_md5(cookie.userName),
            password:hex_md5(cookie.password)
        },
        success:function(data){
            if(data == 1){
                attention();
            }else if(data == 0){
                console.log('密码错误');
                tq.showLogin(obj);
            }
        }
    };
    tq.getajax(obj);
}
tq.addEvent(att,'click',function(){
    passOnline();
});
//已关注 end

//轮播
tq.carousel({
    wrapClass:'carousel',
    imgClass:'carousel-img',
    navClass:'carousel-nav',
    runTimes:5000,
    showTime:100,
    selectedClass:'selected',
});
//轮播结束