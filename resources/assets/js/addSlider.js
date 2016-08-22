/**
 * Created by root on 16-7-29.
 */
$(document).ready(function(){

    $("b.slider").click(function(){
        $(this).parent().next().slideToggle();
    });

});
