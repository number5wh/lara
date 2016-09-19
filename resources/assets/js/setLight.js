/**
 * Created by jqm on 2016/9/19.
 */
$(function(){


   $("#setLight").click(function(){
       //设备id
       var equipId = $("input[name='equipId']").val();
       //类型id
       var typeId = $("input[name='typeId']").val();
       var light = $("#light-num").attr('aria-valuenow');
       //构造地址
       var dm = window.location.host;
       var tg = "/light/setLight";
       var url = "http://"+dm+tg;
       $.post(
           url,
           {
               equipId:equipId,
               light:light,
               _token:$("input[name='_token']").val()
           },
           function(data){
               $.toptip('设置成功','success');
           });
   });
});