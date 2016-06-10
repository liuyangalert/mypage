window.onload = function(){
  userName("user-name",5,16);
  userName("user-pwd",6,16);
  repassword("user-pwd","user-pwd2");
};

function userName(id,min,max){
    // 获取元素节点
    var a = document.getElementById(id);
    var label = a.getElementsByTagName("input")[0];
    var tag_p = a.getElementsByTagName("p")[0];
    // 定义变量定时器
    var timer =null ;
    // 聚焦是显示提示文字
    label.onfocus = function(){
        tag_p.style.display="block";
        // 定时获取输入文字，并显示状态 定时器
        timer = setInterval(function(){
            var label = a.getElementsByTagName("input")[0];
            var i = label.value.length;
            tag_p.innerHTML = "您已经输入了"+i+"位";
            tipsColor(label,tag_p,min,max )
        },100);
    }
    //鼠标离开时，显示提示
    label.onblur = function(){
      clearInterval(timer);
      tips(label,tag_p,min,max);
    };
}
//判断账户长度值 交互颜色
function tipsColor(input,tip,min,max ){
       if( !input.value ||  input.value.length > max ||  input.value.length < min ){
          tip.style.color = "red";
        } else{
          tip.style.color ="rgb(22, 193, 95)";
        }
        if( noNumber(input.value) ){
            tip.style.color = "red";
            tip.innerHTML = "不能以数字开头";
        }
}
//判断账户长度值 提示
function tips(input,tip,min,max ){
       if( !input.value ){
          tip.innerHTML = "不能为空";
        }else if( input.value.length > max){
          tip.innerHTML = "不能大于"+max+"位";
        }else if( input.value.length <min ){
          tip.innerHTML = "不能小于"+min+"位";
        } else{
          tip.innerHTML="正确!";
        }
        tipsColor(input,tip,min,max );
}

//判断不为纯数字
function noNumber(number){
        var re = /^[0-9]/g;
        return re.test(number);
}

function repassword(id1,id2){
      // 获取ID1的值
      var id_1 = document.getElementById(id1);
      var label_1 = id_1.getElementsByTagName("input")[0];
        // 获取ID2的值
      var id_2 = document.getElementById(id2);
      var label_2 = id_2.getElementsByTagName("input")[0];
      var tag_p_2 = id_2.getElementsByTagName("p")[0];
      var timer=null;
      label_2.onfocus=function(){
          tag_p_2.style.display="block";
          timer = setInterval(function(){
              var label_1 = id_1.getElementsByTagName("input")[0].value;
              var label_2 = id_2.getElementsByTagName("input")[0].value;
              if(!label_2){
                  tag_p_2.style.color = "red";
                  tag_p_2.innerHTML = "请输入密码";
              }else if(label_1 != label_2){
                  tag_p_2.style.color = "red";
                  tag_p_2.innerHTML = "密码不一致";
              }else if(label_1 === label_2){
                  tag_p_2.style.color ="rgb(22, 193, 95)";
                  tag_p_2.innerHTML = "正确!";
              }
          },300)
      }
}
