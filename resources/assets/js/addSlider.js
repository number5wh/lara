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


});
