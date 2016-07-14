$(function(){
	$(".check label").click(function(){
		$("input").attr("checked",true);
			if( !$("input").eq(0).prop("checked")){;
				$("input").prop("checked","checked");
				$(".check label").text("全不选");
			} else {
				$("input").removeAttr("checked");
				$(".check label").text("全选");
			}

	}) 

});