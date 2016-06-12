(function(){
  headMove();
  touch();
  news();
})();


function headMove(){
    document.body.addEventListener('touchmove', function(event){
    }, false);
    var timer = null;
    var tt = document.getElementsByClassName("menu")[0];
    $(tt).bind("touchstart",function(e){
        e = e || window.e;
        var touch = e.touches[0];
        var x = touch.clientX;

        $(tt).bind("touchmove",function(event){
            event = event || window.event;
            var touchs = event.touches[0];
            var moveX = touchs.clientX;
            moveX = moveX<0 ? 0 :moveX;
            var lf = moveX - x;
            lf = lf > 100 ? 100: lf;
            lf = lf <-200 ? -200: lf;
            console.log("x:"+x);
            console.log("move"+moveX);
            console.log("lf:"+lf);
            $(".menu ul").css("margin-left",lf);
        });
    });
    $(tt).bind("touchend",function(e){
        $(".menu ul").css("margin-left","0px");
    })
}

function touch(){
    $(".menu li").each(function(index,ele){
        $(".menu li").bind("touchstart",function(){
            $(ele).removeClass("active");
            var ss = this;
            $(ss).addClass("active");
        })
    })
}

function news(){
    $(".new").each(function(index,ele){
            $(".new").bind("touchstart",function(){
                $(ele).css("background-color","#fff");
                var _this = this;
                $(_this).css("background-color","#eee");
            })
    })
}
