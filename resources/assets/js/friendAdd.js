/**
 * Created by root on 16-8-19.
 */
$("#showTooltips").click(function() {
    var email = $('#email').val();
    var filter=/(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
    if(filter.test(email))
    {
        $.toptip('提交成功', 'success');
    }

    else if(!filter.test(email)){
        $.toptip('请输入正确的邮箱地址');
    }
});


