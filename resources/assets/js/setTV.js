/**
 * Created by jqm on 2016/9/22.
 */
$(function(){
    //设备id
    var equipId = $("input[name='equipId']").val();
    //类型id
    var typeId = $("input[name='typeId']").val();
    //token
    var _token = $("input[name='_token']").val();

    //频道加
    $("#plusChannel").click(function(){
        var beforeChannel = Number($("input[name='channel']").val());
        var afterChannel = 0;
        if(beforeChannel == 200){
            afterChannel = 0;
        }else{
            afterChannel = beforeChannel+1;
        }
        //构造地址
        var dm = window.location.host;
        var tg = "/tv/setChannel";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                channel:afterChannel,
                _token:_token
            },
            function(data){
                $("input[name='channel']").val(afterChannel);
            });
    });
    //频道减
    $("#minusChannel").click(function(){
        var beforeChannel = Number($("input[name='channel']").val());
        var afterChannel = 0;
        if(beforeChannel == 0){
            afterChannel = 200;
        }else{
            afterChannel = beforeChannel-1;
        }
        //构造地址
        var dm = window.location.host;
        var tg = "/tv/setChannel";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                channel:afterChannel,
                _token:_token
            },
            function(data){
                $("input[name='channel']").val(afterChannel);
            });
    });

    //音量加
    $("#plusVol").click(function(){
        var beforeVol = Number($("input[name='volume']").val());
        var afterVol = 0;
        if(beforeVol == 100){
            afterVol = 100;
        }else{
            afterVol = beforeVol+1;
        }
        //构造地址
        var dm = window.location.host;
        var tg = "/tv/setVolume";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                volume:afterVol,
                _token:_token
            },
            function(data){
                $("input[name='volume']").val(afterVol);
            });
    });
    //音量减
    $("#minusVol").click(function(){
        var beforeVol = Number($("input[name='volume']").val());
        var afterVol = 0;
        if(beforeVol == 0){
            afterVol = 0;
        }else{
            afterVol = beforeVol-1;
        }
        //构造地址
        var dm = window.location.host;
        var tg = "/tv/setVolume";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                volume:afterVol,
                _token:_token
            },
            function(data){
                $("input[name='volume']").val(afterVol);
            });
    });
    //静音
    $("#silentTV").click(function(){
        var silent = Number($("input[name='silent']").val());
        var newSilent = 0;
        if(silent == 0){
            newSilent = 1;
        }else if(silent == 1){
            newSilent = 0;
        }
        //构造地址
        var dm = window.location.host;
        var tg = "/tv/setSilent";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                silent:newSilent,
                _token:_token
            },
            function(data){
                $("input[name='silent']").val(newSilent);


            });
    });
    //模式
    $("#modelTV").click(function(){
        var beforeModel = Number($("input[name='model']").val());
        var afterModel = Number((Number(beforeModel)+1)%3);
        //构造地址
        var dm = window.location.host;
        var tg = "/tv/setModel";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                equipId:equipId,
                model:afterModel,
                _token:_token
            },
            function(data){
                $("input[name='model']").val(afterModel);
            });
    });

    //时间
    $("#nowtime").click(function(){
        var d = new Date(),str = '当前时间是:';
        str += d.getFullYear()+'年';
        str  += d.getMonth() + 1+'月';
        str  += d.getDate()+'日';
        str += d.getHours()+'时';
        str  += d.getMinutes()+'分';
        str+= d.getSeconds()+'秒';
        $.toptip(str,'success');
    });
});