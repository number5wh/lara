/**
 * Created by jqm on 2016/9/19.
 */
$(function(){


   $("#light-num").mouseleave(function(){

       //设备id
       var equipId = $("input[name='equipId']").val();
       //类型id
       var typeId = $("input[name='typeId']").val();
       var light = $("#light-num").children('div').attr('aria-valuenow');
       $("#l-num").html(light+'%');
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
           });
   });
});