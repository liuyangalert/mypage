var tq = {
    //解析cookie为对象
    getCookieObj :function(){
        "user strict"
        var cookie = {},
            cookieAll = document.cookie;
        if( cookieAll == '') return cookie;
        var list = cookieAll.split(';');
        for (var i=0;i<list.length;i++){
            var item = list[i];
            var p = item.indexOf('=');
            var name = item.substring(0,p).replace(/\s/g,'');
            name = decodeURIComponent(name);
            var value = item.substring(p+1);
            value = decodeURIComponent(value);
            cookie[name] = value;
        }
        return cookie;
    },
    //查询cookie 返回true or false
    searchCookie :function (name,value){
        var objCookie = tq.getCookieObj();
        return (objCookie[name] == value) ? true :false;
    },
    //事件监听函数
    addEvent: function (ele,type,handler){
        if(ele.addEventListener){
            return ele.addEventListener(type,handler,false);
        }else if(ele.attachEvent){
            return ele.attachEvent('on'+type,handler)
        }else {
            ele['on'+type] = handler;
        }
    },
    //移除事件监听函数
    removeEvent:function(ele,type,handler){
        if(ele.removeEventListener){
            return ele.removeEventListener(type,handler,false);
        }else if(ele.detachEvent){
            return ele.detachEvent('on'+type,handler)
        }else {
            ele['on'+type] = handler;
        }
    },
    //ajax
    getajax:function(data){
        var obj = {
            type: data.type || 'GET',
            url:data.url || '',
            sync: data.sync || 'true',
            data:data.data || '',
            contentType:data.contentType || 'application/x-www-form-urlencoded',
            success:data.success || function(){console.log("没有返回函数");}
        };
        
        if(typeof obj.data === 'object'){
            var str ='';
            for(var key in obj.data){
                str += key + '='+obj.data[key]+'&';
            }
            obj.data = str.substring(0,str.length-1);
        }
        
        obj.type = obj.type.toUpperCase();
        if(obj.type === 'GET' && obj.data){
            obj.url += '?'+obj.data;
        }

        var xmlhttp;
        if(window.XMLHttpRequest){
            xmlhttp  = new XMLHttpRequest();
        }else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.open(obj.type,obj.url,obj.sync);
        xmlhttp.setRequestHeader("Content-type",obj.contentType);
        if(obj.type === 'GET'){
            xmlhttp.send(null);
        } else{
            xmlhttp.send('Content-type',obj.contentType);
        }
        xmlhttp.onreadystatechange = function(){
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
              var data = JSON.parse(xmlhttp.responseText);
              obj.success(data);
          }
        };
    },
    //弹窗登录组件
    showLogin:function(obj){
        //添加模板文件
        var templete = '<div class="login-wrap">\
            <div class="login-modal">\
            <h5 class="login-title">'+"登录网易云课堂"+'</h5><span class="login-close"></span>\
            <input class="login-username" placeholder="账号" type="text">\
            <input class="login-password" placeholder="密码" type="password">\
            <input type="submit" value="登录">\
            </div>\
            </div>';
        var body = document.querySelector('body');
        var form = document.createElement('form');
            form.innerHTML = templete;
        //创建表单 添加表单
        body.appendChild(form);

        //绑定关闭
        var close = form.querySelector('.login-close');
            tq.addEvent(close,'click',function(){
                body.removeChild(form);
            });
        //设置提交
        var submit = form.querySelector('input[type="submit"]');
        tq.addEvent(submit,'click',function(event){
            event = event || window.event;
            event.preventDefault();
            this.disabled = true;
            var userName = form.querySelector('.login-username').value;
            var password = form.querySelector('.login-password').value;
            var md5_userName = hex_md5(userName);
            var md5_password = hex_md5(password);
            obj = {
                    url:obj.url,
                    type:obj.type || 'GET',
                    sync:obj.sync || 'true',
                    data:{
                        userName:md5_userName,
                        password:md5_password
                    },
                    success:obj.success
            };
            tq.getajax(obj);
            document.cookie = 'userName=' + md5_userName;
            document.cookie = 'password=' + md5_password;
            body.removeChild(form);
        })
    },
    //轮播组件
    carousel:function(obj){
        obj.wrapClass = obj.wrapClass,
        obj.imgClass = obj.imgClass,
        obj.navClass = obj.navClass,
        obj.runTimes = obj.runTimes,
        obj.showTime = obj.showTime,
        obj.selectedClass = obj.selectedClass;

        var carousel = document.getElementsByClassName(obj.wrapClass)[0],
            carouselImg = carousel.querySelector('.'+obj.imgClass),
            imgDiv = carouselImg.querySelectorAll('div'),
            carouselNav = carousel.querySelector('.'+ obj.navClass),
            span = carouselNav.getElementsByTagName('span'),
            timer,timerR;

        navLive();
        timerRun();
        spanControl();
        tq.addEvent(carousel,'mouseover',function(){
            clearInterval(timerR);
        });
        tq.addEvent(carousel,'mouseout',function(){
            timerRun();
        });
        function runImg(number){
            if(imgDiv[number].style.zIndex == '2') return;
            number = parseInt(number);
            var next = number-1;
                next = imgLngth(next);
            var opa = new Number(0);
            for(var i=0;i<imgDiv.length;i++){
                imgDiv[i].style.zIndex = '0';
            }
            imgDiv[number].style.opacity = '0';
            imgDiv[number].style.zIndex = '2';
            timer = setInterval(function(){
                if(opa >= 1){
                    opa = 1;
                    clearInterval(timer);
                }
                opa += 0.2;
                imgDiv[next].style.opacity = (1-opa) ;
                imgDiv[number].style.opacity = opa ;
            },obj.showTime);
            spanColor(number);
        }
        function timerRun(){
            var i = 0;
            timerR = setInterval(function(){
                i++;
                i = imgLngth(i);
                runImg(i);
            },obj.runTimes);
        }
        function imgLngth(i){
            i = (i>=0 && i<imgDiv.length ) ? i:(i<0)?imgDiv.length-1:0;
            return i
        }
        function navLive(){
            for(var i=0;i<imgDiv.length;i++){
                carouselNav.innerHTML += '<span></span>';
            }
        }
        function spanColor(n){
            for(var i =0;i<span.length;i++){
                span[i].className = span[i].className.replace(obj.selectedClass,'');
            }
            span[n].className += ' '+obj.selectedClass;
        }
        function spanControl(){
            for(var i=0;i<span.length;i++){
                span[i].index = i;
                tq.addEvent(span[i],'click',function(){
                    spanColor(this.index);
                    runImg(this.index);
                });
            }
        }
    },
    //获取课程列表
    downContent : function(obj){
        obj.list = obj.list,//内容列表
        obj.wrap = obj.wrap, //内容父元素
        obj.pageNotes = obj.pageNotes, //分页父元素
        obj.pagination = obj.pagination, //分页总页数
        obj.pageNo = obj.pageNo, //当前页数
        obj.next = obj.next, //下一页元素
        obj.prev = obj.prev, //上一页元素
        obj.fn = obj.fn,
        obj.type = obj.type;

       obj.next.onclick=function(){
            rungo(obj.pageNo,'next');
        };
       obj.prev.onclick=function(){
            rungo(obj.pageNo,'prev');
        };
        //内容模板
        obj.wrap.innerHTML = '';
        for(var i=0;i<obj.list.length;i++){
            var li = obj.list[i];
            var ContentTemplate ='<li><div class="imgs"><img src="'+li.bigPhotoUrl+'"></div>'+
                '<p class="cont-title">'+li.name+'</p><p class="classify">'+
                li.provider+'</p><span class="fans">'+li.learnerCount+
                '</span><p class="price">'+li.price+'</p></li>';
            obj.wrap.innerHTML += ContentTemplate;
        }


        //分页模板 start
        obj.pageNotes.innerHTML ='';
        var b;
        if(obj.pagination <=9) b = obj.pagination;
        if(obj.pagination >9 ) b = 5;
        for(var i=1;i<b;i++){
            var a = document.createElement('a');
                a.innerText = i;
                if(i == obj.pageNo ){a.className = 'active'}
                tq.addEvent(a,'click',function(){
                    rungo(this.innerText)
                });
            obj.pageNotes.appendChild(a);
        }

        //当页数大于9时，进行切割
        if(obj.pageNo >9){
            var span = document.createElement('span');
            span.innerHTML = "...";
            obj.pageNotes.appendChild(span);
            for(var i=obj.pageNo-1;i<obj.pageNo+2;i++){
                var a9 = document.createElement('a');
                    a9.innerText = i;
                if(i == obj.pageNo) a9.className ='active';
                tq.addEvent(a9,'click',function(){
                    rungo(this.innerText)
                });
                obj.pageNotes.appendChild(a9);

            }
            var spans = document.createElement('span');
            spans.innerHTML = "...";
            obj.pageNotes.appendChild(spans);

            var a3 = document.createElement('a');
                a3.innerText = obj.pagination;
            obj.pageNotes.appendChild(a3);
        }
        //分页模板end

        //绑定上下翻页事件
        function rungo(index,type){
            if(type == 'next') index++;
            if(type == 'prev') index--;
            if(index > obj.pagination) return;
            if(index < 1) return;
            obj.fn(index,obj.type);
        }
    },
    //视频弹窗组件
    showVideo:function(src){
        var template = '<div class="video-wrap">\
            <div class="video-content">\
            <h5>请观看下面的视频</h5><span class="wrap-close"></span>\
            <video controls autoplay src="'+src+'"></video>\
            </div></div>';

        var div = document.createElement('div');
            div.innerHTML = template;
        document.querySelector('body').appendChild(div);
        var close = div.querySelector('.wrap-close');
            tq.addEvent(close,'click',function(){
                document.querySelector('body').removeChild(div);
        });
    },
    //热门推荐
    recommend:function(obj){
        obj.wrap = obj.wrap,
        obj.list = obj.list;

        obj.wrap.innerHTML = '';
        var li,template;
        for(var i=0;i<obj.list.length;i++){
            li = obj.list[i];
            template = '<li class="right-li clearfix">\
            <img src="'+li.bigPhotoUrl+'" alt="">\
            <div class="right-li-title">\
            <h6>'+li.name+'</h6>\
            <span>'+li.learnerCount+'</span>\
            </div></li>';
            obj.wrap.innerHTML += template;

        }
    }
};

