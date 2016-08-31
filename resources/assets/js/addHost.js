/**
 * Created by root on 16-8-19.
 */
$(document).on("click", "div input#addHostBtn", function() {

    var dm = window.location.host;
    var tg = "/host/add";
    var url = "http://"+dm+tg;
    //alert(url);
    $.post(
        url,
        {
            id:$('input[name=id]').val(),
            name:$('input[name=name]').val(),
            _token:$('input[name=_token]').val(),
            password:$('input[name=password]').val()
        },
        function(data){
            if(data == 'right'){
                $.alert('添加主机成功');
                //setTimeout("http://"+dm+"/equip",3000);
               // window.location.href="http://"+dm+"/equip";
            }else if(data=='wrong host name'){
                $.alert("主机id有误");
            }else if(data=='already login'){
                $.alert('主机已经被添加过了');
            }else if(data=='wrong password'){
                $.alert('密码错误');
            }
        }
    );
});