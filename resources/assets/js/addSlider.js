/**
 * Created by root on 16-7-29.
 */
$(document).ready(function(){


    $(".slider").click(function(){
        if( $(this).parent().next().css('display') == 'none' ){
            $(this).removeClass('list');
            $(this).addClass('list-req');
            $(this).parent().next().slideDown();
        }else{
            $(this).removeClass('list-req');
            $(this).addClass('list');
            $(this).parent().next().slideUp();
        }

    });
    $(".slider1").click(function(){
            $(this).parent().next().slideToggle();
    });
    $(".slider2").click(function(){
        if( $(this).parent().next().css('display') == 'none' ){
            $(this).removeClass('list');
            $(this).find("span").removeClass("glyphicon glyphicon-chevron-right pull-right");
            $(this).find("span").addClass("glyphicon glyphicon-chevron-down pull-right");
            $(this).addClass('list-req');
            $(this).parent().next().slideDown();
        }else{
            $(this).removeClass('list-req');
            $(this).addClass('list');
            $(this).find("span").removeClass("glyphicon glyphicon-chevron-down pull-right");
            $(this).find("span").addClass("glyphicon glyphicon-chevron-right pull-right");

            $(this).parent().next().slideUp();
        }

    });

});
