/**
 * Created by root on 16-8-19.
 */
$(function(){
    $("div input#addHostBtn").click(function(){

        var dm = window.location.host;
        var tg = "/host/add";
        var url = "http://"+dm+tg;
        //alert(url);
        $.post(
            url,
            {
                name:$('input[name=name]').val(),
                _token:$('input[name=_token]').val(),
                password:$('input[name=password]').val()
            },
            function(data){
                if(data == 'right'){
                    alert('添加主机成功');
                    window.location.href="/equip";
                }else if(data=='wrong host name'){
                    alert('主机名称有误');
                    window.location.href="/host/add";
                }else if(data=='already login'){
                    alert('主机已经被添加过了');
                    window.location.href="/host/add";
                }else if(data=='wrong password'){
                    alert('密码错误');
                    window.location.href="/host/add";
                }

            }
        );
    });

});