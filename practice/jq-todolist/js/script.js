$('document').ready(function(){

    addfn();
    // 绑定每条list任务事件
    function addfn(){
        $('.task-list .task').each(function(){

            $(this).find('.checkbox').unbind().bind('click',function(){
                $(this).parent().toggleClass('tasked');
            });

            $(this).find('.task-close').unbind().bind('click',function(){
                $(this).parent().remove();
            });

            $(this).find('.task-content').unbind().bind('keydown',function(event){
                event = event || window.event;
                if(event.keyCode === 13){
                    $(this).parent().next().find('.task-content').focus();
                    return false;
                }
            })
        });
    }

    //添加list
    function addTask(){
        var str = $('.add-task .input-info').val();
        if(str !== ''){
            var template = $('<div class="task">\
            <span class="checkbox"></span>\
            <span class="task-close"></span>\
            <div class="task-content" contenteditable="true">'+str+'</div>\
            </div>');
            $('.task-list').prepend(template);
            $('.input-info').eq(0).val('');
        }
        addfn();
    }


    //绑定点击按钮
    $('.btn-sbt').bind('click',function(){
        addTask();
    });

    //绑定回车键
    $('.add-task .input-info').bind('focus',function(){
        $(this).bind('keyup',function(event){
            event = event || widnow.event;
            if(event.keyCode === 13){
                addTask();
            }
        })
    })


});