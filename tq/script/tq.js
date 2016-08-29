//创建一个tq的函数，因为我叫taoqun
function tq(){}
//添加原型方法

// ModelShow方法，传入一个需要弹出提示的字符串
tq.prototype.ModelShow = function(str){
    //html模板
    var templateStr ='<div class="tq-model-wrap">\
                            <div class="tq-model-title">提醒<span class="tq-model-close">X</span></div>\
                            <div class="tq-model-content">'+str+'</div>\
                            <div class="tq-model-footer">\
                                <div class="tq-model-true">确定</div>\
                                <div class="tq-model-cancel">取消</div>\
                            </div>\
                        </div>';
    // 在页面中创建生成模板
    var div = document.createElement('div');
    // 生成一个随机的id
    var id = 'tq-model-'+parseInt(Math.random()*101090);
    div.id = id;
    div.className = 'tq-model';
    div.innerHTML = templateStr;
    document.body.appendChild(div);
    //获取模板中按钮
    var control = document.getElementById(id);
    var tqTrue = control.getElementsByClassName('tq-model-true')[0];
    var tqFalse = control.getElementsByClassName('tq-model-cancel')[0];
    var close = control.getElementsByClassName('tq-model-close')[0];
    //给控制按钮添加监听事件
    tqTrue.addEventListener('click',function(){
        console.log('yes');
        document.body.removeChild(div);
        return true;
    });
    tqFalse.addEventListener('click',function(){
        console.log('cancel');
        document.body.removeChild(div);
        return false;
    });
    close.addEventListener('click',function(){
        console.log('cancel');
        document.body.removeChild(div);
        return false;
    });
},
//添加监听事件
tq.prototype.addEvent = function(element,type,handler){
    if(element.addEventListener){
        return element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
        return element.attachEvent('on'+type,handler);
    }else{
        return element['on'+type] = handler;
    }
},
//移除监听事件
tq.prototype.removeEvent = function(element,type,handler){
    if(element.removeEventListener){
        return element.removeEventListener(type,handler,false);
    }else if(element.detachEvent){
        return element.detachEvent('on'+type,handler);
    }else{
        return element['on'+type] = null;
    }
},
//轮播事件左右上下移动，传入一个对象，对象中按照关键词绑定
tq.prototype.showcarousel = function(obj){
    //获取自定义的属性，若无则使用默认属性
    var Nobj = {};
    Nobj.wrap = obj.wrap || 'tq-carousel';
    Nobj.next = obj.nextClassName || 'tq-next';
    Nobj.prev = obj.prevClassName || 'tq-prev';
    Nobj.nav = obj.navClassName || 'tq-carousel-nav';
    Nobj.scrollStyle = obj.scrollStyle || 'scrollX';
    Nobj.Imgs = obj.imgs || 'tq-carousel-img';
    Nobj.selected = obj.navSelected || 'actives';

    var _this = this;
    var carousel = document.getElementsByClassName(Nobj.wrap)[0];
    var carouselImgs = carousel.getElementsByClassName(Nobj.Imgs)[0];
    var navWrap = carousel.getElementsByClassName(Nobj.nav)[0];
    var navs = navWrap.getElementsByTagName('li');
    var Width = carouselImgs.offsetWidth;
    var Height = carouselImgs.offsetHeight;
    var Imgs = carouselImgs.getElementsByTagName('div');
    var next = carousel.getElementsByClassName(Nobj.next)[0];
    var prev = carousel.getElementsByClassName(Nobj.prev)[0];
    var index=0;
    var timer = null;
    //初始化，设置属性，轮播现在是第几个
    function controlIndex(index){
          index = Windex(index);
          carouselImgs.setAttribute('control',index);
          return index;
    }

    //判断索引值
    function Windex(index){
        return (index>=0 && index<Imgs.length)?index:index<0?Imgs.length-1:index>Imgs.length-1?0:index;
    }

    //判断X Y轴移动 调用轮播图滚动函数，
    function runImg(index,pattern,control){
        var Ocss;
        var next = 0,nextHeight = 0,nextOPa = 0;
        //清除定时器
        clearInterval(timer);
        
        if(control == false){
            next = index + 1;
            next = Windex(next);
            
        }else{
            next = Windex(index-1);
        }
        
        switch(pattern){
            case 'scrollY':
                scroolx('top',Height); 
                break;
            case 'scrollX':
                scroolx('left',Width); 
                break;
            case 'fade':
                fade('opacity'); 
                break;
        }

        //图片轮播函数
        function scroolx(Ocss,Number){
            //默认遍历所有图片到最左侧
            for (var i = 0; i < Imgs.length; i++) {
                Imgs[i].style[Ocss] = Number + 'px';
            
            }
            var nextNumber = 0;
            if(control == false){
                Imgs[next].style[Ocss] = nextNumber + 'px';
                Imgs[index].style[Ocss] = '-' + Number+'px';
                 timer = setInterval(function(){
                    if(nextNumber < Number){
                        nextNumber +=10;
                        Imgs[next].style[Ocss] = nextNumber + 'px';
                        Imgs[index].style[Ocss] = '-' + (Number - nextNumber)+'px';
                   }else{
                        nextNumber = Number;
                        Imgs[next].style[Ocss] = nextNumber + 'px';
                        Imgs[index].style[Ocss] = '-' +(Number - nextNumber)+'px' ;
                   }
                },20)
            }else{
                Imgs[next].style[Ocss] = nextNumber + 'px';
                Imgs[index].style[Ocss] = Number+'px';
                timer = setInterval(function(){
                    if(nextNumber < Number){
                        nextNumber +=10;
                        Imgs[next].style[Ocss] = '-' + nextNumber + 'px';
                        Imgs[index].style[Ocss] = Number - nextNumber+'px';
                   }else{
                        nextNumber = Number;
                        Imgs[next].style[Ocss] = '-' + nextNumber + 'px';
                        Imgs[index].style[Ocss] = Number - nextNumber+'px' ;
                   }
                },20)
            }
            
        }

        function fade(Ocss){
            for(var i=0;i<Imgs.length;i++){
                Imgs[i].style[Ocss] = 0;
            }
            var nextNumber = 0;
            Imgs[next].style[Ocss] = 1;
            Imgs[index].style[Ocss] = 0;
            timer = setInterval(function(){
                if(nextNumber < 100){
                     nextNumber += 10;
                    Imgs[next].style[Ocss] = 1 - nextNumber/100;
                    Imgs[index].style[Ocss] = nextNumber/100;
                }else{
                    nextNumber = 100;
                    Imgs[next].style[Ocss] = 1 - nextNumber/100;
                    Imgs[index].style[Ocss] = nextNumber/100;
                }
               
            },50);
        }
    }

    //绑定导航栏功能
    navControl();
    function navControl(number){
        if( number != undefined ){
            for (var i = 0; i < navs.length; i++) {
                navs[i].className = '';
            }
            console.log(number);
            navs[number].className += ' '+ Nobj.selected;
        } 

        for (var i = 0; i < navs.length; i++) {
            navs[i].index = i;
            _this.addEvent(navs[i],'click',function(){
                for (var i = 0; i < navs.length; i++) {
                    navs[i].className = '';
                }
                this.className += ' ' + Nobj.selected;
                runImg(this.index,Nobj.scrollStyle);
            });
        }
    }

   
    //绑定上下点击事件
    _this.addEvent(next,'click',function(){
        index++;
        index = controlIndex(index);
        runImg(index,Nobj.scrollStyle);
    });

    _this.addEvent(prev,'click',function(){
        index--;
        index = controlIndex(index);
        runImg(index,Nobj.scrollStyle,false);
    });
}