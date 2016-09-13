/**
 * Created by root on 16-8-4.
 */
$(function(){
    $("a#singleSwitch").click(function(){
        //alert($(this).find("input[name=status]").val());
        //$.post(
        //    $(this).find('input[name=url]').val(),
        //    {
        //        _token:$(this).find("input[name=_token]").val(),
        //        equip_id:$(this).find("input[name=equip_id]").val(),
        //        status:$(this).find("input[name=status]").val()
        //        //group_id:$(this).find("input[name=group_id]").val()
        //    },
        //    function(data){
        //        window.location.reload();
        //    }
        //);

        $.ajax({
            type:'post',
            url:$(this).find('input[name=url]').val(),
            data:{ _token:$(this).find("input[name=_token]").val(),
                equip_id:$(this).find("input[name=equip_id]").val(),
                status:$(this).find("input[name=status]").val()},
            dataType:'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success:function(data){
                window.location.reload();
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        });
    });
});