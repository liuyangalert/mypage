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
        att.nextElementSibling.className += ' removeAtt';
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
        document.cookie = 'userName=';
        document.cookie = 'password=';
    }
//密码校验
    passOnline();
    function passOnline(control){
        var cookie = tq.getCookieObj();
        var obj = {
            url:'http://study.163.com/webDev/login.htm',
            type:'GET',
            data:{
                userName:cookie.userName,
                password:cookie.password,
            },
            success:function(data){
                if(data == 1){
                    attention()
                }else if(data == 0){
                    console.log('本地cookie密码不对');
                    if( control === 'click' ){
                        tq.showLogin(obj);
                    }
                }
            }
        };
        tq.getajax(obj);
    }
    tq.addEvent(att,'click',function(){
        passOnline('click');
    });
})();
//已关注 end

//轮播
tq.carousel({
    wrapClass:'carousel', //轮播容器
    imgClass:'carousel-img',
    navClass:'carousel-nav',
    runTimes:5000,
    showTime:100,
    selectedClass:'selected',
});
//轮播结束

// 初始化获取课程,绑定设计和语言
(function(){
    var classcontent = document.getElementsByClassName('classcontent')[0],
        design = classcontent.querySelector('.design'),
        language = classcontent.querySelector('.language'),
        content = classcontent.querySelector('.content'),
        totalPage = classcontent.querySelector('.totalPage'),
        prev =  classcontent.querySelector('.pageprev'),
        next =  classcontent.querySelector('.pagenext');

    function removeClass(obj){
        design.className = design.className.replace('two','');
        language.className = language.className.replace('two','');
        obj.className += ' '+ 'two';
    }
    //初始化 默认课程列表
    contentReset(1,10);
    //绑定设计点击事件
    tq.addEvent(design,'click',function(){
        removeClass(this);
        contentReset(1,10);
    });
    //绑定语言点击事件
    tq.addEvent(language,'click',function(){
        removeClass(this);
        contentReset(1,20);
    });

    //获取课程函数
    function contentReset(pageNo,type){
        var width = document.body.offsetWidth;
        var psize = 20;
        if(width<1205){ psize = 15}
        tq.getajax({
            url:'http://study.163.com/webDev/couresByCategory.htm',
            type:'get',
            data:{
                pageNo:pageNo,
                psize:psize,
                type:type,
            },
            success:downcontent,
        });

        function downcontent(data){
            tq.downContent({
                list:data.list,
                wrap:content,
                pageNotes:totalPage,
                pagination:data.pagination.totlePageCount,
                pageNo:data.pagination.pageIndex,
                next:next,
                prev:prev,
                type:type,
                fn:contentReset,
            });
        }
    }
})();

//绑定视频点击事件，点击后调用视频弹窗组件
(function(){
    var video = document.querySelector('.right-video video');
    tq.addEvent(video,'click',function(){
        tq.showVideo(this.src);
    });
})();

//热门推荐
(function(){
var rightWrap = document.querySelector('.right-lists');
    tq.getajax({
        url:'http://study.163.com/webDev/hotcouresByCategory.htm',
        success:hotlist,
    });
    //定时器5分钟循环一次
    function hotlist(data){
        var bool=true, list;
        list = data.slice(0, data.length / 2);
        tq.recommend({wrap: rightWrap, list: list});
        var timer = setInterval(function () {
            if (bool) {
                list = data.slice(0, data.length / 2);
                bool = false;
            } else if (!bool) {
                list = data.slice(data.length / 2, data.length);
                bool = true;
            }
            tq.recommend({wrap: rightWrap, list: list});
        },30000);
    }
})();

