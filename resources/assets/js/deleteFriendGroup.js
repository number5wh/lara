/**
 * Created by jqm on 2016/9/3.
 */
$(function(){
    $("#deleteFriendGroup").click(function(){
        var obj = document.getElementsByName("gid");//选择所有name="groupId"的对象，返回数组
        var s=[];//如果这样定义var s;变量s中会默认被赋个null值
        for(var i=0;i<obj.length;i++){
            if(obj[i].checked) //取到对象数组后，我们来循环检测它是不是被选中
                s[i]=obj[i].value;   //如果选中，将value添加到变量s中
        }
        if(s.length == 0){
            $.alert('请选择分组','错误');
            return false;
        }

        $.confirm('选定的分组即将删除，组内的好友将移动至默认分组‘默认’里。\n确定要删除该分组吗？','确认删除？',
            function(){
                $("#delFGId").attr('value',s);
                $("#deleteGroupForm").submit();
            },function(){return false;});
    });

});

