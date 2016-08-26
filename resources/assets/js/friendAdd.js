/**
 * Created by root on 16-8-19.
 */
$("#showTooltips").click(function() {
    var email = $("input[name=email]").val();
    //alert(email);
    var filter = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
    //alert(filter.test(email));
    if(filter.test(email) === false)
    {
        $.toptip('请输入正确的邮箱地址');
    }

});


