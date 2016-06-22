(function(){
    headCol();
    number();
})()

function headCol(){
        var close = $(".header span");
        var main =$(".main")[0];
        close[0].onclick = function(e){
           e = e || widow.e;
            $(main).hide(1000);
            e.stopPropagation();
        }
        close[1].onclick = function(){
            main.style.height = "18px";
        }
        close[2].onclick = function(){
            main.style.height = "500px";
        }
        $(document).click(function(){
          $(main).show(1000);
        }

        )
}

function number(){
    var name = $(".row div");
    var x="";
    clear(x);
    name.each(function(){
      $(this).bind("click",function(){
          if(x == 0){x="";}
          x +=  $(this).attr("name");
          screen(x);
      })
    });
}

function clear(x){
    $("#clear").click(function(x){
        x = 0;
        screen(x);
    })
}

function screen(e){
    $(".screen").html(e);
}
