/**
 * Created by root on 16-8-18.
 */
//$(document).ready(function(){
//    $("#friendPage").click(function(){
//        $(this).siblings("ul").toggle();
//    });
//});
$(document).on("click", "#friendPage", function() {
    $.actions({
        title: "选择操作",
        onClose: function() {
            console.log("close");
        },
        actions: [
            {
                text: "添加好友",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var tg = "/friend/add";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            },
            {
                text: "添加分组",
                className: "color-primary",
                onClick: function() {
                    $.alert("你选择了“编辑”");
                }
            }
        ]
    });
});
