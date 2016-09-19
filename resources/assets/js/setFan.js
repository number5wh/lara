/**
 * Created by jqm on 2016/9/18.
 */
$(function() {
    //设备id
    var equipId = $("input[name='equipId']").val();
    //类型id
    var typeId = $("input[name='typeId']").val();

    $("#setFanSpeed").click(function(){
        var beforeSpeed =  $("#showWindSpeed").children('input').val();
        var afterSpeed = Number((Number(beforeSpeed)+1)%3);
        //构造地址
        var dm = window.location.host;
        var tg = "/fan/setSpeed";
        var url = "http://"+dm+tg;
        $.post(
            url,
        {
            equipId:equipId,
            speed:afterSpeed,
            _token:$("input[name='_token']").val()
        },
            function(data){
                if(afterSpeed == 0){
                    $("#showWindSpeed").html("<input type='text' name='speed' value='0' hidden>风速:低</span>");
                }else if(afterSpeed == 1){
                    $("#showWindSpeed").html("<input type='text' name='speed' value='1' hidden>风速:中");
                }else if(afterSpeed == 2){
                    $("#showWindSpeed").html("<input type='text' name='speed' value='2' hidden>风速:高");
                }
            });
    });
    $("#setFanSwing").click(function(){
        var beforeSwing = $("#show-swing-wind").children('input').val();
        var afterSwing = Number((Number(beforeSwing)+1)%2);
        //构造地址
        var dm = window.location.host;
        var tg = "/fan/setSwing";
        var url = "http://"+dm+tg;

        $.post(
            url,
            {
                equipId:equipId,
                swing:afterSwing,
                _token:$("input[name='_token']").val()
            },
            function(data){
                if(afterSwing == 0){
                    $("#show-swing-wind").html(" <input type='text' name='swing-wind' value='0' hidden>左右摆风 <span class='glyphicon glyphicon-remove-circle'></span>");
                }else if(afterSwing == 1){
                    $("#show-swing-wind").html(" <input type='text' name='swing-wind' value='1' hidden>左右摆风 <span class='glyphicon glyphicon-ok-circle'></span>");
                }
            });
    });
});