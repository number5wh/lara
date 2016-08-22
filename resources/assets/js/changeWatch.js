/**
 * Created by root on 16-8-22.
 */
$(document).ready(function(){
    $("#changeWatch").click(function(){
        var dm = window.location.host;
        var tg = "/equip/changeWatch";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                type:$(this).find('img').attr('alt')
            },
            function(){
                alert(666);
            }
        );
    });
});