/**
 * Created by root on 16-7-29.
 */
$(document).ready(function(){

    $("b.sliderFriendGroup").click(function(){
        $(this).parent().next().slideToggle();
    });

});
