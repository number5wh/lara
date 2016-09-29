/**
 * Created by wh on 2016/9/13.
 */

$(document).on("click", "#equipSet", function() {
    $.actions({
        title: "选择操作",
        onClose: function() {
            console.log("close");
        },
        actions: [
   /*         {
                text: "修改设备名",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var tg = "/equipset/setName";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            },*/
        ]
    });
});
