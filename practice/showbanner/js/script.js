(function(){
    cl();
})();



function cl(){
    $(".banner").click(function(){
        $(".banner_bg").hide();
    });
    $(".main a").click(function(){
        $(".banner_bg").show();
    });
}
