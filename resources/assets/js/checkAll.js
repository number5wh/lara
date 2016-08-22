/**
 * Created by root on 16-8-3.
 */
$(function(){
    $('input.checkedAll1').click(function() {
       //alert($(this).parent().next().find("[name='equip_id[]']:checkbox").html());

        if($(this).prop("checked")){
            $(this).parent().next().find("[name='equip_id[]']:checkbox").prop('checked',true);
        }else{
            $(this).parent().next().find("[name='equip_id[]']:checkbox").prop('checked',false);
        }
    });
});