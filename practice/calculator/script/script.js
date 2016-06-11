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
function screen(e){
    $(".screen").html(e);
}
function number(){
    var name = $(".row div");
    var x=0;
    name.each(function(){
      $(this).bind("click",function(){
          x +=  $(this).attr("name");
          equal();
          screen(x);
      })
    });
}
function equal(){
  $("#equal").bind("click",function(){
      var number =$(".screen").text();
      var e = number;
      screen(e);
  })
}
