/**
 * Created by root on 16-8-18.
 */
//$(document).ready(function(){
//    $("#friendPage").click(function(){
//        $(this).siblings("ul").toggle();
//    });
//});
$(document).on("click", "#groupDetailPage", function() {
    $.actions({
        title: "选择操作",
        onClose: function() {
            console.log("close");
        },
        actions: [
            {
                text: "添加设备到分组",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var id = $("#groupDetailPage").find('p').text();
                    var tg = "/equipGroup/group/"+id+"/addEquip";
                    var url = "http://"+dm+tg;
                    //alert(url);
                    window.location.href=url;

                }
            },
            {
                text: "删除分组设备",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var id = $("#groupDetailPage").find('p').text();
                    var tg = "/equipGroup/group/"+id+"/deleteEquip";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            }
        ]
    });
});
