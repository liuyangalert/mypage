//点击不在提醒 start
(function(){
    var tip = document.querySelector('.header-tip');
    var noTip =tip.querySelector('.no-tip-angin');
    tq.addEvent(noTip,'click',function(){
        document.cookie = 'tipAngin=false';
        tip.parentNode.removeChild(tip);
    });
    tipTrue();
    function tipTrue(){
        var objCookie = tq.getCookieObj();
        if(objCookie['tipAngin'] == 'false'){
            tip.parentNode.removeChild(tip);
        }else{
            tip.style.display = 'block';
        }
    }
})();
// 不在提醒 end
//已关注 start
(function(){
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
                userName:cookie.userName,
                password:cookie.password
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
})();
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
// 初始化获取课程,绑定设计和语言
    var classcontent = document.getElementsByClassName('classcontent')[0];
    var design = classcontent.querySelector('.design');
    var language = classcontent.querySelector('.language');
    var content = classcontent.querySelector('.content');
    var totalPage = classcontent.querySelector('.totalPage');
    var type = 20;

    function removeClass(obj){
        design.className = design.className.replace('two','');
        language.className = language.className.replace('two','');
        obj.className += ' '+ 'two';
    }
    rungo({});
    function rungo(obj){
        obj.pageNo = obj.pageNo || 1;
        obj.psize = obj.psize || 20;
        obj.type = obj.type || 10;
        tq.getajax({
            url:'http://study.163.com/webDev/couresByCategory.htm',
            data:obj,
            success:function(data){
                content.innerHTML = '';
                for(var i=0;i<data.list.length;i++){
                    var obj = data.list[i];
                    var li = document.createElement('li');
                    var temple = '<img src="'+obj['bigPhotoUrl']+'">'+'<p class="cont-title">'+obj['name']+'</p>'+'<p class="classify">'+obj['provider']+'</p>'+'<span class="fans">'+obj['learnerCount']+'</span>'+'<p class="price">'+obj['price']+'</p>';
                    li.innerHTML = temple;
                    content.appendChild(li);
                }
                totalPage.innerHTML = '';
                for(var j=1;j<data.pagination.totlePageCount && j<30;j++){
                    var a = document.createElement('a');
                    if(data.pagination.pageIndex == j) a.className = 'active';
                        a.innerText = j;
                    pagContorl(a,type);
                    totalPage.appendChild(a);
                }
            }
        });
    }
    tq.addEvent(design,'click',function(){
        removeClass(this);
        type = 10;
        rungo({type:type,pageNo:1});
    });
    tq.addEvent(language,'click',function(){
        removeClass(this);
        type = 20;
        rungo({type:type,pageNo:1});
    });
    function pagContorl(ele,type){
            tq.addEvent(ele,'click',function(){
                rungo({pageNo:parseInt(ele.innerText),type:type});
            });
    }

