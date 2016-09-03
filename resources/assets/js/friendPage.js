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
                    var dm = window.location.host;
                    var tg = "/friendGroup/add";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            },
            {
                text: "移动好友",
                className: "color-primary",
                onClick: function() {
                    var dm = window.location.host;
                    var tg = "/friendGroup/move";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            },

            {
                text: "删除好友",
                className: "color-danger",
                onClick: function() {
                    var dm = window.location.host;
                    var tg = "/friend/delete";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            },
            {
                text: "删除好友分组",
                className: "color-danger",
                onClick: function() {
                    var dm = window.location.host;
                    var tg = "/friendGroup/delete";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            },
        ]
    });
});
