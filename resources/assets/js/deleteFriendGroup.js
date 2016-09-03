/**
 * Created by jqm on 2016/9/3.
 */
$(function(){
    $("#deleteFriendGroup").click(function(){
        var obj = document.getElementsByName("groupId");//选择所有name="groupId"的对象，返回数组
        var s='';//如果这样定义var s;变量s中会默认被赋个null值
        for(var i=0;i<obj.length;i++){
            if(obj[i].checked) //取到对象数组后，我们来循环检测它是不是被选中
                s+=obj[i].value+',';   //如果选中，将value添加到变量s中
        }
        if(!s){
            $.alert('请选择分组','错误');
            return false;
        }
        $.confirm('选定的分组即将删除，组内的好友将移动至默认分组‘默认’里。\n确定要删除该分组吗？','确认删除？',
            $(function(){
                var dm = window.location.host;
                var tg = "/friend/delete";
                var url = "http://"+dm+tg;
                $.post(
                    url,
                    {
                        _token:$("input[name='_token']").val(),
                        groupId:s,
                    },
                    function(data){
                        $.alert(data);
                        if(data == 'success'){
                            $.alert("删除成功!",'成功');
                            setTimeout(function(){window.location="http://"+dm+"/friend";},3000);
                        }
                    }
                )
            }),function(){return false;});
    });

});

