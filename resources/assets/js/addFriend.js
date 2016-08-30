/**
 * Created by root on 16-8-19.
 */
$("#addFriend").click(function() {
    var email = $("input[name=email]").val();
    //alert($("#selectGroups").find("option:selected").val());
    var filter = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
    //alert(filter.test(email));
    if(filter.test(email) === false)
    {
        $.toptip('请输入正确的邮箱地址');
        return false;
    }
    var dm = window.location.host;
    var tg = "/friend/add";
    var url = "http://"+dm+tg;
    $.post(
        url,
        {
            email:$("input[name='email']").val(),
            groupId:$("#selectGroups").find("option:selected").val(),
            _token:$("input[name='_token']").val(),
        },
        function(data){
            $.alert(data);
            if(data == 'not exist'){
                $.alert('用户名不存在!','错误');
            }else if(data=='self') {
                $.alert("不能添加自己为好友!",'错误');
            }else if(data=='success') {
                $.alert("请求已发出!",'成功');
            }
        }
    );

});


