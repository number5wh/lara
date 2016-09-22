/**
 * Created by jqm on 2016/9/14.
 */
$(function(){
    //设备id
    var equipId = $("input[name='equipId']").val();
    //类型id
    var typeId = $("input[name='typeId']").val();

    //设置模式
   $("#setAirModel").click(function(){

       //当前空调模式
       var beforeModel = $("#air-model").children('input').val();
       //下一个空调模式
       var afterModel = Number((Number(beforeModel)+1)%5);

       //构造地址
       var dm = window.location.host;
       var tg = "/air/setModel";
       var url = "http://"+dm+tg;
       $.post(
           url,
           {
               equipId:equipId,
               model:afterModel,
               _token:$("input[name='_token']").val()
           },
           function(data){
               if(afterModel == 0){
                   $(".sub").html("<span class='glyphicon glyphicon-asterisk'></span><span id='air-model'><input type='text' value='0' hidden> 制冷</span>");
               }else if(afterModel == 1){
                   $(".sub").html("<span class='glyphicon glyphicon-fire'></span><span id='air-model'><input type='text' value='1' hidden> 制热</span>");
               }else if(afterModel == 2){
                   $(".sub").html("<span class='glyphicon glyphicon-leaf'></span><span id='air-model'><input type='text' value='2' hidden> 自动</span>");
               }else if(afterModel == 3){
                   $(".sub").html("<span class='glyphicon glyphicon-refresh'></span><span id='air-model'><input type='text' value='3' hidden> 通风</span>");
               }else if(afterModel == 4){
                   $(".sub").html("<span class='glyphicon glyphicon-tint'></span><span id='air-model'><input type='text' value='4' hidden> 除湿</span>");
               }
           }
       );
   });

    //设置风速
   $("#setAirSpeed").click(function(){
       var beforeSpeed = $("input[name='speed']").val();
       var afterSpeed = Number((Number(beforeSpeed)+1)%4);
       //构造地址
       var dm = window.location.host;
       var tg = "/air/setSpeed";
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
                   $("#showSpeed").html("风速 <span id='airSpeed'><input type='text' name='speed' value='0' hidden>自动</span>");
               }else if(afterSpeed ==1){
                   $("#showSpeed").html("风速 <span id='airSpeed'><input type='text' name='speed' value='1' hidden>低</span>");
               }else if(afterSpeed ==2){
                   $("#showSpeed").html("风速 <span id='airSpeed'><input type='text' name='speed' value='2' hidden>中</span>");
               }else if(afterSpeed ==3){
                   $("#showSpeed").html("风速 <span id='airSpeed'><input type='text' name='speed' value='3' hidden>高</span>");
               }
           }
       )
   });

    //设置风向
    $("#setAirDirection").click(function(){
        var beforeDirection = $("input[name='direction']").val();
        var afterDirection = Number((Number(beforeDirection)+1)%4);
        //构造地址
        var dm = window.location.host;
        var tg = "/air/setDirection";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                direction:afterDirection,
                _token:$("input[name='_token']").val()
            },
            function(data){
                if(afterDirection == 0){
                    $("#showDirection").html("<span class='glyphicon glyphicon-arrow-right'></span><input type='text' name='direction' value='0' hidden> 风向 中");
                }else if(afterDirection == 1){
                    $("#showDirection").html("<span class='glyphicon glyphicon-arrow-up'></span><input type='text' name='direction' value='1' hidden> 风向 上");
                }else if(afterDirection == 2){
                    $("#showDirection").html("<span class='glyphicon glyphicon-arrow-down'></span><input type='text' name='direction' value='2' hidden> 风向 下");
                }else if(afterDirection == 3){
                    $("#showDirection").html("<span class='glyphicon glyphicon-random'></span><input type='text' name='direction' value='3' hidden> 风向 扫风");
                }
            }
        )
    });
    $("#setTem").knob({
        'change':function(v){
            //将实时改变的值写入到input中
            $("#setTem").attr('value',v);
        },
        'release':function(){
            var dm = window.location.host;
            var tg = "/air/setTemperature";
            var url = "http://"+dm+tg;
            $.post(
                url,
                {
                    equipId:equipId,
                    temperature:$("#setTem").attr('value'),
                    _token:$("input[name='_token']").val()
                },
                function(data){
                }
            )}

    });



 /*   //减温度
    $("#setAirTemperatureMinus").click(function(){
        var beforeTem = $("#showTemperature").text();
        var afterTem = Number((Number(beforeTem)-1));
        //构造地址
        var dm = window.location.host;
        var tg = "/air/setTemperature";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                temperature:afterTem,
                _token:$("input[name='_token']").val()
            },
            function(data){
                $("#showTemperature").text(afterTem);
            }
        )
    });
    //加温度
    $("#setAirTemperaturePlus").click(function(){
        var beforeTem = $("#showTemperature").text();
        var afterTem = Number((Number(beforeTem)+1));
        //构造地址
        var dm = window.location.host;
        var tg = "/air/setTemperature";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                temperature:afterTem,
                _token:$("input[name='_token']").val()
            },
            function(data){
                $("#showTemperature").text(afterTem);
            }
        )
    });*/
});