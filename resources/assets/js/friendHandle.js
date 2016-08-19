/**
 * Created by root on 16-8-18.
 */
$(document).ready(function(){
    $("li div#friendHandle").change(function(){
        //alert(1);
        var value = $(this).find('option:selected').val();
        if(value == -1) {
            $(this).siblings("div.handleAgree").css('display','none');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','none');
            $(this).siblings("div.handleIgnore").css('display','none');
        }
        if(value == 1) {
            $(this).siblings("div.handleAgree").css('display','block');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','none');
            $(this).siblings("div.handleIgnore").css('display','none');
        }
        if(value == 0) {
            $(this).siblings("div.handleAgree").css('display','none');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','block');
            $(this).siblings("div.handleIgnore").css('display','none');
        }
        if(value == 3) {
            $(this).siblings("div.handleAgree").css('display','none');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','none');
            $(this).siblings("div.handleIgnore").css('display','block');
        }
    });
});
