/**
 * Created by root on 16-8-20.
 */

$(document).on("click", "#equipPageAdmin", function() {
    $.actions({
        title: "选择操作",
        onClose: function() {
            console.log("close");
        },
        actions: [
            {
                text: "添加主机",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var tg = "/host/add";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            },
            {
                text: "添加设备",
                className: "color-primary",
                onClick: function() {
                    var dm = window.location.host;
                    var tg = "/equip/add";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            },
            {
                text: "移除设备",
                className: "color-primary",
                onClick: function() {
                    var dm = window.location.host;
                    var tg = "/equip/detele";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            }
        ]
    });
});
