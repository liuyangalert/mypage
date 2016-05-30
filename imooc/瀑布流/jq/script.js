$(window).on('load',function(){
  waterfull('mcontent','box');
  var dataInt = {'data':[{ 'src':'13.jpg'},{'src':'2.jpg'},{ 'src':'10.jpg'},{'src':'25.jpg'},{ 'src':'12.jpg'},{'src':'22.jpg'}]}
  window.onscroll=function(){
    if(checkscrollside){
      $.each(dataInt.data,function(index,value){
        var cbox = $('<div>').addClass('box').appendTo('#content');
        var cbd = $("<div>").addClass('bd').appendTo(cbox);
        $("<img>").attr("src","./images/"+$(value).attr('src')).appendTo(cbd); 
      });
      waterfull('mcontent','box');
    }
  }
})

function waterfull(parent,className){
    var $box = $('#content>div');
    var boxWidth = $box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);

    $('#content').css({
      "width:":num*boxWidth,
      "margin:":'0 auto'
    })

    var boxHeights=[];
    $box.each(function(index,value){
      var boxHeight = $box.eq(index).height();
      if( index<num ){
        boxHeights[index] = boxHeight;
      } else {
        var minHeight = Math.min.apply(null,boxHeights);
        var minIndex = $.inArray(minHeight,boxHeights);
        $(value).css({
          'position':'absolute',
          'top':minHeight+15,
          'left':$box.eq(minIndex).position().left
        });
        boxHeights[minIndex] += $box.eq(index).height()+15;
      }
    })
 }

function checkscrollside(){
  var $box=$("#content>div");
  var lastboxHeight = $box.last().get(0).offsetTop + Math.floor($box.last().height()/2);
  var scrollTop = $(window).scrollTop();
  var documentHeight = $(document).width();
  return (lastboxHeight < scrollTop+documentHeight) ? true : false;
}