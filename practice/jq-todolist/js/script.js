$('document').ready(function(){

    addfn();
    function addfn(){
        var taskList = $('.task-list .task');
        $(taskList).each(function(){

            $(this).find('.checkbox').click(function(){
                $(this).parent().toggleClass('tasked');
            });

            $(this).find('.task-close').bind('click',function(){
                $(this).parent().remove();
            });

            $(this).find('.task-content').bind('keydown',function(event){
                event = event || window.event;
                if(event.keyCode === 13){
                    $(this).parent().next().find('.task-content').focus();
                    return false;
                }
            })
        });
    }

    function addTask(){
        var str = $('.add-task .input-info').val();
        if(str !== ''){
            var template = $('<div class="task">\
            <span class="checkbox"></span>\
            <span class="task-close"></span>\
            <div class="task-content" contenteditable="true">'+str+'</div>\
            </div>');
            $('.task-list').prepend(template);
        }
        $('.input-info').eq(0).val('');
        addfn();
    }

    $('.btn-sbt').bind('click',function(){
        addTask();
    });

    $('.add-task .input-info').bind('focus',function(){
        $(this).bind('keyup',function(event){
            event = event || widnow.event;
            if(event.keyCode === 13){
                addTask();
            }
        })
    })


});