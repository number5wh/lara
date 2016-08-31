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
            }else if(data=='existed') {
                $.alert("已在好友列表里!",'错误');
            }else if(data=='can\'t send twice') {
                $.alert("不能在还有请求未处理时再发起另一次请求!",'错误');
            }else if(data=='success') {
                $.alert("请求已发出!",'成功');
            }
        }
    );

});



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
/**
 * Created by root on 16-7-29.
 */
$(document).ready(function(){

    $("b.slider").click(function(){
        $(this).parent().next().slideToggle();
    });

});

/**
 * Created by root on 16-8-22.
 */
$(document).ready(function(){
    $("#changeWatch").click(function(){
        var dm = window.location.host;
        var tg = "/equip/changeWatch";
        var url = "http://"+dm+tg;
        $.post(
            url,
            {
                type:$(this).find('img').attr('alt')
            },
            function(){
                alert(666);
            }
        );
    });
});
/**
 * Created by root on 16-8-3.
 */
$(function(){
    $('input.checkedAll1').click(function() {
       //alert($(this).parent().next().find("[name='equip_id[]']:checkbox").html());

        if($(this).prop("checked")){
            $(this).parent().next().find("[name='equip_id[]']:checkbox").prop('checked',true);
        }else{
            $(this).parent().next().find("[name='equip_id[]']:checkbox").prop('checked',false);
        }
    });
});
// jshint ignore: start
+function($){

$.rawCitiesData = [
    {
        "name":"北京",
        "sub": [
          {
          "name": "北京市",

          "sub":[
              {
                  "name":"请选择"
              },
              {
                  "name":"东城区"
              },
              {
                  "name":"西城区"
              },
              {
                  "name":"崇文区"
              },
              {
                  "name":"宣武区"
              },
              {
                  "name":"朝阳区"
              },
              {
                  "name":"海淀区"
              },
              {
                  "name":"丰台区"
              },
              {
                  "name":"石景山区"
              },
              {
                  "name":"房山区"
              },
              {
                  "name":"通州区"
              },
              {
                  "name":"顺义区"
              },
              {
                  "name":"昌平区"
              },
              {
                  "name":"大兴区"
              },
              {
                  "name":"怀柔区"
              },
              {
                  "name":"平谷区"
              },
              {
                  "name":"门头沟区"
              },
              {
                  "name":"密云县"
              },
              {
                  "name":"延庆县"
              },
              {
                  "name":"其他"
              }
          ]
          }],
        "type":0
    },
    {
        "name":"广东",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"广州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"越秀区"
                    },
                    {
                        "name":"荔湾区"
                    },
                    {
                        "name":"海珠区"
                    },
                    {
                        "name":"天河区"
                    },
                    {
                        "name":"白云区"
                    },
                    {
                        "name":"黄埔区"
                    },
                    {
                        "name":"番禺区"
                    },
                    {
                        "name":"花都区"
                    },
                    {
                        "name":"南沙区"
                    },
                    {
                        "name":"萝岗区"
                    },
                    {
                        "name":"增城市"
                    },
                    {
                        "name":"从化市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"深圳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"福田区"
                    },
                    {
                        "name":"罗湖区"
                    },
                    {
                        "name":"南山区"
                    },
                    {
                        "name":"宝安区"
                    },
                    {
                        "name":"龙岗区"
                    },
                    {
                        "name":"盐田区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"珠海",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"香洲区"
                    },
                    {
                        "name":"斗门区"
                    },
                    {
                        "name":"金湾区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"汕头",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"金平区"
                    },
                    {
                        "name":"濠江区"
                    },
                    {
                        "name":"龙湖区"
                    },
                    {
                        "name":"潮阳区"
                    },
                    {
                        "name":"潮南区"
                    },
                    {
                        "name":"澄海区"
                    },
                    {
                        "name":"南澳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"韶关",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"浈江区"
                    },
                    {
                        "name":"武江区"
                    },
                    {
                        "name":"曲江区"
                    },
                    {
                        "name":"乐昌市"
                    },
                    {
                        "name":"南雄市"
                    },
                    {
                        "name":"始兴县"
                    },
                    {
                        "name":"仁化县"
                    },
                    {
                        "name":"翁源县"
                    },
                    {
                        "name":"新丰县"
                    },
                    {
                        "name":"乳源瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"佛山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"禅城区"
                    },
                    {
                        "name":"南海区"
                    },
                    {
                        "name":"顺德区"
                    },
                    {
                        "name":"三水区"
                    },
                    {
                        "name":"高明区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"江门",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"蓬江区"
                    },
                    {
                        "name":"江海区"
                    },
                    {
                        "name":"新会区"
                    },
                    {
                        "name":"恩平市"
                    },
                    {
                        "name":"台山市"
                    },
                    {
                        "name":"开平市"
                    },
                    {
                        "name":"鹤山市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"湛江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"赤坎区"
                    },
                    {
                        "name":"霞山区"
                    },
                    {
                        "name":"坡头区"
                    },
                    {
                        "name":"麻章区"
                    },
                    {
                        "name":"吴川市"
                    },
                    {
                        "name":"廉江市"
                    },
                    {
                        "name":"雷州市"
                    },
                    {
                        "name":"遂溪县"
                    },
                    {
                        "name":"徐闻县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"茂名",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"茂南区"
                    },
                    {
                        "name":"茂港区"
                    },
                    {
                        "name":"化州市"
                    },
                    {
                        "name":"信宜市"
                    },
                    {
                        "name":"高州市"
                    },
                    {
                        "name":"电白县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"肇庆",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"端州区"
                    },
                    {
                        "name":"鼎湖区"
                    },
                    {
                        "name":"高要市"
                    },
                    {
                        "name":"四会市"
                    },
                    {
                        "name":"广宁县"
                    },
                    {
                        "name":"怀集县"
                    },
                    {
                        "name":"封开县"
                    },
                    {
                        "name":"德庆县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"惠州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"惠城区"
                    },
                    {
                        "name":"惠阳区"
                    },
                    {
                        "name":"博罗县"
                    },
                    {
                        "name":"惠东县"
                    },
                    {
                        "name":"龙门县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"梅州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"梅江区"
                    },
                    {
                        "name":"兴宁市"
                    },
                    {
                        "name":"梅县"
                    },
                    {
                        "name":"大埔县"
                    },
                    {
                        "name":"丰顺县"
                    },
                    {
                        "name":"五华县"
                    },
                    {
                        "name":"平远县"
                    },
                    {
                        "name":"蕉岭县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"汕尾",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城区"
                    },
                    {
                        "name":"陆丰市"
                    },
                    {
                        "name":"海丰县"
                    },
                    {
                        "name":"陆河县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"河源",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"源城区"
                    },
                    {
                        "name":"紫金县"
                    },
                    {
                        "name":"龙川县"
                    },
                    {
                        "name":"连平县"
                    },
                    {
                        "name":"和平县"
                    },
                    {
                        "name":"东源县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阳江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"江城区"
                    },
                    {
                        "name":"阳春市"
                    },
                    {
                        "name":"阳西县"
                    },
                    {
                        "name":"阳东县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"清远",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"清城区"
                    },
                    {
                        "name":"英德市"
                    },
                    {
                        "name":"连州市"
                    },
                    {
                        "name":"佛冈县"
                    },
                    {
                        "name":"阳山县"
                    },
                    {
                        "name":"清新县"
                    },
                    {
                        "name":"连山壮族瑶族自治县"
                    },
                    {
                        "name":"连南瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"东莞",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"中山",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"潮州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"湘桥区"
                    },
                    {
                        "name":"潮安县"
                    },
                    {
                        "name":"饶平县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"揭阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"榕城区"
                    },
                    {
                        "name":"普宁市"
                    },
                    {
                        "name":"揭东县"
                    },
                    {
                        "name":"揭西县"
                    },
                    {
                        "name":"惠来县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"云浮",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"云城区"
                    },
                    {
                        "name":"罗定市"
                    },
                    {
                        "name":"云安县"
                    },
                    {
                        "name":"新兴县"
                    },
                    {
                        "name":"郁南县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"上海",
        "sub": [
          {
            "name": "上海市",
            "sub":[
                {
                    "name":"请选择"
                },
                {
                    "name":"黄浦区"
                },
                {
                    "name":"卢湾区"
                },
                {
                    "name":"徐汇区"
                },
                {
                    "name":"长宁区"
                },
                {
                    "name":"静安区"
                },
                {
                    "name":"普陀区"
                },
                {
                    "name":"闸北区"
                },
                {
                    "name":"虹口区"
                },
                {
                    "name":"杨浦区"
                },
                {
                    "name":"宝山区"
                },
                {
                    "name":"闵行区"
                },
                {
                    "name":"嘉定区"
                },
                {
                    "name":"松江区"
                },
                {
                    "name":"金山区"
                },
                {
                    "name":"青浦区"
                },
                {
                    "name":"南汇区"
                },
                {
                    "name":"奉贤区"
                },
                {
                    "name":"浦东新区"
                },
                {
                    "name":"崇明县"
                },
                {
                    "name":"其他"
                }
            ]
          }],
        "type":0
    },
    {
        "name":"天津",
        "sub": [
          {
            "name": "天津市",
            "sub":[
              {
                "name":"请选择"
              },
              {
                "name":"和平区"
              },
              {
                "name":"河东区"
              },
              {
                "name":"河西区"
              },
              {
                "name":"南开区"
              },
              {
                "name":"河北区"
              },
              {
                "name":"红桥区"
              },
              {
                "name":"塘沽区"
              },
              {
                "name":"汉沽区"
              },
              {
                "name":"大港区"
              },
              {
                "name":"东丽区"
              },
              {
                "name":"西青区"
              },
              {
                "name":"北辰区"
              },
              {
                "name":"津南区"
              },
              {
                "name":"武清区"
              },
              {
                "name":"宝坻区"
              },
              {
                "name":"静海县"
              },
              {
                "name":"宁河县"
              },
              {
                "name":"蓟县"
              },
              {
                "name":"其他"
              }
            ]
          }],
        "type":0
    },
    {
        "name":"重庆",
        "sub": [
          {
            "name": "重庆市",
            "sub":[
                {
                    "name":"请选择"
                },
                {
                    "name":"渝中区"
                },
                {
                    "name":"大渡口区"
                },
                {
                    "name":"江北区"
                },
                {
                    "name":"南岸区"
                },
                {
                    "name":"北碚区"
                },
                {
                    "name":"渝北区"
                },
                {
                    "name":"巴南区"
                },
                {
                    "name":"长寿区"
                },
                {
                    "name":"双桥区"
                },
                {
                    "name":"沙坪坝区"
                },
                {
                    "name":"万盛区"
                },
                {
                    "name":"万州区"
                },
                {
                    "name":"涪陵区"
                },
                {
                    "name":"黔江区"
                },
                {
                    "name":"永川区"
                },
                {
                    "name":"合川区"
                },
                {
                    "name":"江津区"
                },
                {
                    "name":"九龙坡区"
                },
                {
                    "name":"南川区"
                },
                {
                    "name":"綦江县"
                },
                {
                    "name":"潼南县"
                },
                {
                    "name":"荣昌县"
                },
                {
                    "name":"璧山县"
                },
                {
                    "name":"大足县"
                },
                {
                    "name":"铜梁县"
                },
                {
                    "name":"梁平县"
                },
                {
                    "name":"开县"
                },
                {
                    "name":"忠县"
                },
                {
                    "name":"城口县"
                },
                {
                    "name":"垫江县"
                },
                {
                    "name":"武隆县"
                },
                {
                    "name":"丰都县"
                },
                {
                    "name":"奉节县"
                },
                {
                    "name":"云阳县"
                },
                {
                    "name":"巫溪县"
                },
                {
                    "name":"巫山县"
                },
                {
                    "name":"石柱土家族自治县"
                },
                {
                    "name":"秀山土家族苗族自治县"
                },
                {
                    "name":"酉阳土家族苗族自治县"
                },
                {
                    "name":"彭水苗族土家族自治县"
                },
                {
                    "name":"其他"
                }
            ]
          }],
        "type":0
    },
    {
        "name":"辽宁",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"沈阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"沈河区"
                    },
                    {
                        "name":"皇姑区"
                    },
                    {
                        "name":"和平区"
                    },
                    {
                        "name":"大东区"
                    },
                    {
                        "name":"铁西区"
                    },
                    {
                        "name":"苏家屯区"
                    },
                    {
                        "name":"东陵区"
                    },
                    {
                        "name":"于洪区"
                    },
                    {
                        "name":"新民市"
                    },
                    {
                        "name":"法库县"
                    },
                    {
                        "name":"辽中县"
                    },
                    {
                        "name":"康平县"
                    },
                    {
                        "name":"新城子区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"大连",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西岗区"
                    },
                    {
                        "name":"中山区"
                    },
                    {
                        "name":"沙河口区"
                    },
                    {
                        "name":"甘井子区"
                    },
                    {
                        "name":"旅顺口区"
                    },
                    {
                        "name":"金州区"
                    },
                    {
                        "name":"瓦房店市"
                    },
                    {
                        "name":"普兰店市"
                    },
                    {
                        "name":"庄河市"
                    },
                    {
                        "name":"长海县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鞍山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"铁东区"
                    },
                    {
                        "name":"铁西区"
                    },
                    {
                        "name":"立山区"
                    },
                    {
                        "name":"千山区"
                    },
                    {
                        "name":"海城市"
                    },
                    {
                        "name":"台安县"
                    },
                    {
                        "name":"岫岩满族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"抚顺",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"顺城区"
                    },
                    {
                        "name":"新抚区"
                    },
                    {
                        "name":"东洲区"
                    },
                    {
                        "name":"望花区"
                    },
                    {
                        "name":"抚顺县"
                    },
                    {
                        "name":"清原满族自治县"
                    },
                    {
                        "name":"新宾满族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"本溪",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"平山区"
                    },
                    {
                        "name":"明山区"
                    },
                    {
                        "name":"溪湖区"
                    },
                    {
                        "name":"南芬区"
                    },
                    {
                        "name":"本溪满族自治县"
                    },
                    {
                        "name":"桓仁满族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"丹东",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"振兴区"
                    },
                    {
                        "name":"元宝区"
                    },
                    {
                        "name":"振安区"
                    },
                    {
                        "name":"东港市"
                    },
                    {
                        "name":"凤城市"
                    },
                    {
                        "name":"宽甸满族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"锦州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"太和区"
                    },
                    {
                        "name":"古塔区"
                    },
                    {
                        "name":"凌河区"
                    },
                    {
                        "name":"凌海市"
                    },
                    {
                        "name":"黑山县"
                    },
                    {
                        "name":"义县"
                    },
                    {
                        "name":"北宁市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"营口",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"站前区"
                    },
                    {
                        "name":"西市区"
                    },
                    {
                        "name":"鲅鱼圈区"
                    },
                    {
                        "name":"老边区"
                    },
                    {
                        "name":"大石桥市"
                    },
                    {
                        "name":"盖州市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阜新",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海州区"
                    },
                    {
                        "name":"新邱区"
                    },
                    {
                        "name":"太平区"
                    },
                    {
                        "name":"清河门区"
                    },
                    {
                        "name":"细河区"
                    },
                    {
                        "name":"彰武县"
                    },
                    {
                        "name":"阜新蒙古族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"辽阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"白塔区"
                    },
                    {
                        "name":"文圣区"
                    },
                    {
                        "name":"宏伟区"
                    },
                    {
                        "name":"太子河区"
                    },
                    {
                        "name":"弓长岭区"
                    },
                    {
                        "name":"灯塔市"
                    },
                    {
                        "name":"辽阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"盘锦",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"双台子区"
                    },
                    {
                        "name":"兴隆台区"
                    },
                    {
                        "name":"盘山县"
                    },
                    {
                        "name":"大洼县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"铁岭",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"银州区"
                    },
                    {
                        "name":"清河区"
                    },
                    {
                        "name":"调兵山市"
                    },
                    {
                        "name":"开原市"
                    },
                    {
                        "name":"铁岭县"
                    },
                    {
                        "name":"昌图县"
                    },
                    {
                        "name":"西丰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"朝阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"双塔区"
                    },
                    {
                        "name":"龙城区"
                    },
                    {
                        "name":"凌源市"
                    },
                    {
                        "name":"北票市"
                    },
                    {
                        "name":"朝阳县"
                    },
                    {
                        "name":"建平县"
                    },
                    {
                        "name":"喀喇沁左翼蒙古族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"葫芦岛",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"龙港区"
                    },
                    {
                        "name":"南票区"
                    },
                    {
                        "name":"连山区"
                    },
                    {
                        "name":"兴城市"
                    },
                    {
                        "name":"绥中县"
                    },
                    {
                        "name":"建昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"江苏",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"南京",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"玄武区"
                    },
                    {
                        "name":"白下区"
                    },
                    {
                        "name":"秦淮区"
                    },
                    {
                        "name":"建邺区"
                    },
                    {
                        "name":"鼓楼区"
                    },
                    {
                        "name":"下关区"
                    },
                    {
                        "name":"栖霞区"
                    },
                    {
                        "name":"雨花台区"
                    },
                    {
                        "name":"浦口区"
                    },
                    {
                        "name":"江宁区"
                    },
                    {
                        "name":"六合区"
                    },
                    {
                        "name":"溧水县"
                    },
                    {
                        "name":"高淳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"苏州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"金阊区"
                    },
                    {
                        "name":"平江区"
                    },
                    {
                        "name":"沧浪区"
                    },
                    {
                        "name":"虎丘区"
                    },
                    {
                        "name":"吴中区"
                    },
                    {
                        "name":"相城区"
                    },
                    {
                        "name":"常熟市"
                    },
                    {
                        "name":"张家港市"
                    },
                    {
                        "name":"昆山市"
                    },
                    {
                        "name":"吴江市"
                    },
                    {
                        "name":"太仓市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"无锡",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"崇安区"
                    },
                    {
                        "name":"南长区"
                    },
                    {
                        "name":"北塘区"
                    },
                    {
                        "name":"滨湖区"
                    },
                    {
                        "name":"锡山区"
                    },
                    {
                        "name":"惠山区"
                    },
                    {
                        "name":"江阴市"
                    },
                    {
                        "name":"宜兴市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"常州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"钟楼区"
                    },
                    {
                        "name":"天宁区"
                    },
                    {
                        "name":"戚墅堰区"
                    },
                    {
                        "name":"新北区"
                    },
                    {
                        "name":"武进区"
                    },
                    {
                        "name":"金坛市"
                    },
                    {
                        "name":"溧阳市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"镇江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"京口区"
                    },
                    {
                        "name":"润州区"
                    },
                    {
                        "name":"丹徒区"
                    },
                    {
                        "name":"丹阳市"
                    },
                    {
                        "name":"扬中市"
                    },
                    {
                        "name":"句容市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"南通",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"崇川区"
                    },
                    {
                        "name":"港闸区"
                    },
                    {
                        "name":"通州市"
                    },
                    {
                        "name":"如皋市"
                    },
                    {
                        "name":"海门市"
                    },
                    {
                        "name":"启东市"
                    },
                    {
                        "name":"海安县"
                    },
                    {
                        "name":"如东县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"泰州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海陵区"
                    },
                    {
                        "name":"高港区"
                    },
                    {
                        "name":"姜堰市"
                    },
                    {
                        "name":"泰兴市"
                    },
                    {
                        "name":"靖江市"
                    },
                    {
                        "name":"兴化市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"扬州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"广陵区"
                    },
                    {
                        "name":"维扬区"
                    },
                    {
                        "name":"邗江区"
                    },
                    {
                        "name":"江都市"
                    },
                    {
                        "name":"仪征市"
                    },
                    {
                        "name":"高邮市"
                    },
                    {
                        "name":"宝应县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"盐城",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"亭湖区"
                    },
                    {
                        "name":"盐都区"
                    },
                    {
                        "name":"大丰市"
                    },
                    {
                        "name":"东台市"
                    },
                    {
                        "name":"建湖县"
                    },
                    {
                        "name":"射阳县"
                    },
                    {
                        "name":"阜宁县"
                    },
                    {
                        "name":"滨海县"
                    },
                    {
                        "name":"响水县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"连云港",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"新浦区"
                    },
                    {
                        "name":"海州区"
                    },
                    {
                        "name":"连云区"
                    },
                    {
                        "name":"东海县"
                    },
                    {
                        "name":"灌云县"
                    },
                    {
                        "name":"赣榆县"
                    },
                    {
                        "name":"灌南县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"徐州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"云龙区"
                    },
                    {
                        "name":"鼓楼区"
                    },
                    {
                        "name":"九里区"
                    },
                    {
                        "name":"泉山区"
                    },
                    {
                        "name":"贾汪区"
                    },
                    {
                        "name":"邳州市"
                    },
                    {
                        "name":"新沂市"
                    },
                    {
                        "name":"铜山县"
                    },
                    {
                        "name":"睢宁县"
                    },
                    {
                        "name":"沛县"
                    },
                    {
                        "name":"丰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"淮安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"清河区"
                    },
                    {
                        "name":"清浦区"
                    },
                    {
                        "name":"楚州区"
                    },
                    {
                        "name":"淮阴区"
                    },
                    {
                        "name":"涟水县"
                    },
                    {
                        "name":"洪泽县"
                    },
                    {
                        "name":"金湖县"
                    },
                    {
                        "name":"盱眙县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宿迁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"宿城区"
                    },
                    {
                        "name":"宿豫区"
                    },
                    {
                        "name":"沭阳县"
                    },
                    {
                        "name":"泗阳县"
                    },
                    {
                        "name":"泗洪县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"湖北",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"武汉",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"江岸区"
                    },
                    {
                        "name":"武昌区"
                    },
                    {
                        "name":"江汉区"
                    },
                    {
                        "name":"硚口区"
                    },
                    {
                        "name":"汉阳区"
                    },
                    {
                        "name":"青山区"
                    },
                    {
                        "name":"洪山区"
                    },
                    {
                        "name":"东西湖区"
                    },
                    {
                        "name":"汉南区"
                    },
                    {
                        "name":"蔡甸区"
                    },
                    {
                        "name":"江夏区"
                    },
                    {
                        "name":"黄陂区"
                    },
                    {
                        "name":"新洲区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黄石",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"黄石港区"
                    },
                    {
                        "name":"西塞山区"
                    },
                    {
                        "name":"下陆区"
                    },
                    {
                        "name":"铁山区"
                    },
                    {
                        "name":"大冶市"
                    },
                    {
                        "name":"阳新县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"十堰",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"张湾区"
                    },
                    {
                        "name":"茅箭区"
                    },
                    {
                        "name":"丹江口市"
                    },
                    {
                        "name":"郧县"
                    },
                    {
                        "name":"竹山县"
                    },
                    {
                        "name":"房县"
                    },
                    {
                        "name":"郧西县"
                    },
                    {
                        "name":"竹溪县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"荆州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"沙市区"
                    },
                    {
                        "name":"荆州区"
                    },
                    {
                        "name":"洪湖市"
                    },
                    {
                        "name":"石首市"
                    },
                    {
                        "name":"松滋市"
                    },
                    {
                        "name":"监利县"
                    },
                    {
                        "name":"公安县"
                    },
                    {
                        "name":"江陵县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宜昌",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西陵区"
                    },
                    {
                        "name":"伍家岗区"
                    },
                    {
                        "name":"点军区"
                    },
                    {
                        "name":"猇亭区"
                    },
                    {
                        "name":"夷陵区"
                    },
                    {
                        "name":"宜都市"
                    },
                    {
                        "name":"当阳市"
                    },
                    {
                        "name":"枝江市"
                    },
                    {
                        "name":"秭归县"
                    },
                    {
                        "name":"远安县"
                    },
                    {
                        "name":"兴山县"
                    },
                    {
                        "name":"五峰土家族自治县"
                    },
                    {
                        "name":"长阳土家族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"襄樊",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"襄城区"
                    },
                    {
                        "name":"樊城区"
                    },
                    {
                        "name":"襄阳区"
                    },
                    {
                        "name":"老河口市"
                    },
                    {
                        "name":"枣阳市"
                    },
                    {
                        "name":"宜城市"
                    },
                    {
                        "name":"南漳县"
                    },
                    {
                        "name":"谷城县"
                    },
                    {
                        "name":"保康县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鄂州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鄂城区"
                    },
                    {
                        "name":"华容区"
                    },
                    {
                        "name":"梁子湖区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"荆门",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东宝区"
                    },
                    {
                        "name":"掇刀区"
                    },
                    {
                        "name":"钟祥市"
                    },
                    {
                        "name":"京山县"
                    },
                    {
                        "name":"沙洋县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"孝感",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"孝南区"
                    },
                    {
                        "name":"应城市"
                    },
                    {
                        "name":"安陆市"
                    },
                    {
                        "name":"汉川市"
                    },
                    {
                        "name":"云梦县"
                    },
                    {
                        "name":"大悟县"
                    },
                    {
                        "name":"孝昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黄冈",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"黄州区"
                    },
                    {
                        "name":"麻城市"
                    },
                    {
                        "name":"武穴市"
                    },
                    {
                        "name":"红安县"
                    },
                    {
                        "name":"罗田县"
                    },
                    {
                        "name":"浠水县"
                    },
                    {
                        "name":"蕲春县"
                    },
                    {
                        "name":"黄梅县"
                    },
                    {
                        "name":"英山县"
                    },
                    {
                        "name":"团风县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"咸宁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"咸安区"
                    },
                    {
                        "name":"赤壁市"
                    },
                    {
                        "name":"嘉鱼县"
                    },
                    {
                        "name":"通山县"
                    },
                    {
                        "name":"崇阳县"
                    },
                    {
                        "name":"通城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"随州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"曾都区"
                    },
                    {
                        "name":"广水市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"恩施土家族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"恩施市"
                    },
                    {
                        "name":"利川市"
                    },
                    {
                        "name":"建始县"
                    },
                    {
                        "name":"来凤县"
                    },
                    {
                        "name":"巴东县"
                    },
                    {
                        "name":"鹤峰县"
                    },
                    {
                        "name":"宣恩县"
                    },
                    {
                        "name":"咸丰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"仙桃",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"天门",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"潜江",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"神农架林区",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"四川",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"成都",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"青羊区"
                    },
                    {
                        "name":"锦江区"
                    },
                    {
                        "name":"金牛区"
                    },
                    {
                        "name":"武侯区"
                    },
                    {
                        "name":"成华区"
                    },
                    {
                        "name":"龙泉驿区"
                    },
                    {
                        "name":"青白江区"
                    },
                    {
                        "name":"新都区"
                    },
                    {
                        "name":"温江区"
                    },
                    {
                        "name":"都江堰市"
                    },
                    {
                        "name":"彭州市"
                    },
                    {
                        "name":"邛崃市"
                    },
                    {
                        "name":"崇州市"
                    },
                    {
                        "name":"金堂县"
                    },
                    {
                        "name":"郫县"
                    },
                    {
                        "name":"新津县"
                    },
                    {
                        "name":"双流县"
                    },
                    {
                        "name":"蒲江县"
                    },
                    {
                        "name":"大邑县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"自贡",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"大安区"
                    },
                    {
                        "name":"自流井区"
                    },
                    {
                        "name":"贡井区"
                    },
                    {
                        "name":"沿滩区"
                    },
                    {
                        "name":"荣县"
                    },
                    {
                        "name":"富顺县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"攀枝花",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"仁和区"
                    },
                    {
                        "name":"米易县"
                    },
                    {
                        "name":"盐边县"
                    },
                    {
                        "name":"东区"
                    },
                    {
                        "name":"西区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"泸州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"江阳区"
                    },
                    {
                        "name":"纳溪区"
                    },
                    {
                        "name":"龙马潭区"
                    },
                    {
                        "name":"泸县"
                    },
                    {
                        "name":"合江县"
                    },
                    {
                        "name":"叙永县"
                    },
                    {
                        "name":"古蔺县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"德阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"旌阳区"
                    },
                    {
                        "name":"广汉市"
                    },
                    {
                        "name":"什邡市"
                    },
                    {
                        "name":"绵竹市"
                    },
                    {
                        "name":"罗江县"
                    },
                    {
                        "name":"中江县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"绵阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"涪城区"
                    },
                    {
                        "name":"游仙区"
                    },
                    {
                        "name":"江油市"
                    },
                    {
                        "name":"盐亭县"
                    },
                    {
                        "name":"三台县"
                    },
                    {
                        "name":"平武县"
                    },
                    {
                        "name":"安县"
                    },
                    {
                        "name":"梓潼县"
                    },
                    {
                        "name":"北川羌族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"广元",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"元坝区"
                    },
                    {
                        "name":"朝天区"
                    },
                    {
                        "name":"青川县"
                    },
                    {
                        "name":"旺苍县"
                    },
                    {
                        "name":"剑阁县"
                    },
                    {
                        "name":"苍溪县"
                    },
                    {
                        "name":"市中区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"遂宁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"船山区"
                    },
                    {
                        "name":"安居区"
                    },
                    {
                        "name":"射洪县"
                    },
                    {
                        "name":"蓬溪县"
                    },
                    {
                        "name":"大英县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"内江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"市中区"
                    },
                    {
                        "name":"东兴区"
                    },
                    {
                        "name":"资中县"
                    },
                    {
                        "name":"隆昌县"
                    },
                    {
                        "name":"威远县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"乐山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"市中区"
                    },
                    {
                        "name":"五通桥区"
                    },
                    {
                        "name":"沙湾区"
                    },
                    {
                        "name":"金口河区"
                    },
                    {
                        "name":"峨眉山市"
                    },
                    {
                        "name":"夹江县"
                    },
                    {
                        "name":"井研县"
                    },
                    {
                        "name":"犍为县"
                    },
                    {
                        "name":"沐川县"
                    },
                    {
                        "name":"马边彝族自治县"
                    },
                    {
                        "name":"峨边彝族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"南充",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"顺庆区"
                    },
                    {
                        "name":"高坪区"
                    },
                    {
                        "name":"嘉陵区"
                    },
                    {
                        "name":"阆中市"
                    },
                    {
                        "name":"营山县"
                    },
                    {
                        "name":"蓬安县"
                    },
                    {
                        "name":"仪陇县"
                    },
                    {
                        "name":"南部县"
                    },
                    {
                        "name":"西充县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"眉山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东坡区"
                    },
                    {
                        "name":"仁寿县"
                    },
                    {
                        "name":"彭山县"
                    },
                    {
                        "name":"洪雅县"
                    },
                    {
                        "name":"丹棱县"
                    },
                    {
                        "name":"青神县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宜宾",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"翠屏区"
                    },
                    {
                        "name":"宜宾县"
                    },
                    {
                        "name":"兴文县"
                    },
                    {
                        "name":"南溪县"
                    },
                    {
                        "name":"珙县"
                    },
                    {
                        "name":"长宁县"
                    },
                    {
                        "name":"高县"
                    },
                    {
                        "name":"江安县"
                    },
                    {
                        "name":"筠连县"
                    },
                    {
                        "name":"屏山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"广安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"广安区"
                    },
                    {
                        "name":"华蓥市"
                    },
                    {
                        "name":"岳池县"
                    },
                    {
                        "name":"邻水县"
                    },
                    {
                        "name":"武胜县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"达州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"通川区"
                    },
                    {
                        "name":"万源市"
                    },
                    {
                        "name":"达县"
                    },
                    {
                        "name":"渠县"
                    },
                    {
                        "name":"宣汉县"
                    },
                    {
                        "name":"开江县"
                    },
                    {
                        "name":"大竹县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"雅安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"雨城区"
                    },
                    {
                        "name":"芦山县"
                    },
                    {
                        "name":"石棉县"
                    },
                    {
                        "name":"名山县"
                    },
                    {
                        "name":"天全县"
                    },
                    {
                        "name":"荥经县"
                    },
                    {
                        "name":"宝兴县"
                    },
                    {
                        "name":"汉源县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"巴中",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"巴州区"
                    },
                    {
                        "name":"南江县"
                    },
                    {
                        "name":"平昌县"
                    },
                    {
                        "name":"通江县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"资阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"雁江区"
                    },
                    {
                        "name":"简阳市"
                    },
                    {
                        "name":"安岳县"
                    },
                    {
                        "name":"乐至县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阿坝藏族羌族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"马尔康县"
                    },
                    {
                        "name":"九寨沟县"
                    },
                    {
                        "name":"红原县"
                    },
                    {
                        "name":"汶川县"
                    },
                    {
                        "name":"阿坝县"
                    },
                    {
                        "name":"理县"
                    },
                    {
                        "name":"若尔盖县"
                    },
                    {
                        "name":"小金县"
                    },
                    {
                        "name":"黑水县"
                    },
                    {
                        "name":"金川县"
                    },
                    {
                        "name":"松潘县"
                    },
                    {
                        "name":"壤塘县"
                    },
                    {
                        "name":"茂县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"甘孜藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"康定县"
                    },
                    {
                        "name":"丹巴县"
                    },
                    {
                        "name":"炉霍县"
                    },
                    {
                        "name":"九龙县"
                    },
                    {
                        "name":"甘孜县"
                    },
                    {
                        "name":"雅江县"
                    },
                    {
                        "name":"新龙县"
                    },
                    {
                        "name":"道孚县"
                    },
                    {
                        "name":"白玉县"
                    },
                    {
                        "name":"理塘县"
                    },
                    {
                        "name":"德格县"
                    },
                    {
                        "name":"乡城县"
                    },
                    {
                        "name":"石渠县"
                    },
                    {
                        "name":"稻城县"
                    },
                    {
                        "name":"色达县"
                    },
                    {
                        "name":"巴塘县"
                    },
                    {
                        "name":"泸定县"
                    },
                    {
                        "name":"得荣县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"凉山彝族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西昌市"
                    },
                    {
                        "name":"美姑县"
                    },
                    {
                        "name":"昭觉县"
                    },
                    {
                        "name":"金阳县"
                    },
                    {
                        "name":"甘洛县"
                    },
                    {
                        "name":"布拖县"
                    },
                    {
                        "name":"雷波县"
                    },
                    {
                        "name":"普格县"
                    },
                    {
                        "name":"宁南县"
                    },
                    {
                        "name":"喜德县"
                    },
                    {
                        "name":"会东县"
                    },
                    {
                        "name":"越西县"
                    },
                    {
                        "name":"会理县"
                    },
                    {
                        "name":"盐源县"
                    },
                    {
                        "name":"德昌县"
                    },
                    {
                        "name":"冕宁县"
                    },
                    {
                        "name":"木里藏族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"陕西",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"西安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"莲湖区"
                    },
                    {
                        "name":"新城区"
                    },
                    {
                        "name":"碑林区"
                    },
                    {
                        "name":"雁塔区"
                    },
                    {
                        "name":"灞桥区"
                    },
                    {
                        "name":"未央区"
                    },
                    {
                        "name":"阎良区"
                    },
                    {
                        "name":"临潼区"
                    },
                    {
                        "name":"长安区"
                    },
                    {
                        "name":"高陵县"
                    },
                    {
                        "name":"蓝田县"
                    },
                    {
                        "name":"户县"
                    },
                    {
                        "name":"周至县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"铜川",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"耀州区"
                    },
                    {
                        "name":"王益区"
                    },
                    {
                        "name":"印台区"
                    },
                    {
                        "name":"宜君县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宝鸡",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"渭滨区"
                    },
                    {
                        "name":"金台区"
                    },
                    {
                        "name":"陈仓区"
                    },
                    {
                        "name":"岐山县"
                    },
                    {
                        "name":"凤翔县"
                    },
                    {
                        "name":"陇县"
                    },
                    {
                        "name":"太白县"
                    },
                    {
                        "name":"麟游县"
                    },
                    {
                        "name":"扶风县"
                    },
                    {
                        "name":"千阳县"
                    },
                    {
                        "name":"眉县"
                    },
                    {
                        "name":"凤县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"咸阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"秦都区"
                    },
                    {
                        "name":"渭城区"
                    },
                    {
                        "name":"杨陵区"
                    },
                    {
                        "name":"兴平市"
                    },
                    {
                        "name":"礼泉县"
                    },
                    {
                        "name":"泾阳县"
                    },
                    {
                        "name":"永寿县"
                    },
                    {
                        "name":"三原县"
                    },
                    {
                        "name":"彬县"
                    },
                    {
                        "name":"旬邑县"
                    },
                    {
                        "name":"长武县"
                    },
                    {
                        "name":"乾县"
                    },
                    {
                        "name":"武功县"
                    },
                    {
                        "name":"淳化县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"渭南",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"临渭区"
                    },
                    {
                        "name":"韩城市"
                    },
                    {
                        "name":"华阴市"
                    },
                    {
                        "name":"蒲城县"
                    },
                    {
                        "name":"潼关县"
                    },
                    {
                        "name":"白水县"
                    },
                    {
                        "name":"澄城县"
                    },
                    {
                        "name":"华县"
                    },
                    {
                        "name":"合阳县"
                    },
                    {
                        "name":"富平县"
                    },
                    {
                        "name":"大荔县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"延安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"宝塔区"
                    },
                    {
                        "name":"安塞县"
                    },
                    {
                        "name":"洛川县"
                    },
                    {
                        "name":"子长县"
                    },
                    {
                        "name":"黄陵县"
                    },
                    {
                        "name":"延川县"
                    },
                    {
                        "name":"富县"
                    },
                    {
                        "name":"延长县"
                    },
                    {
                        "name":"甘泉县"
                    },
                    {
                        "name":"宜川县"
                    },
                    {
                        "name":"志丹县"
                    },
                    {
                        "name":"黄龙县"
                    },
                    {
                        "name":"吴起县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"汉中",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"汉台区"
                    },
                    {
                        "name":"留坝县"
                    },
                    {
                        "name":"镇巴县"
                    },
                    {
                        "name":"城固县"
                    },
                    {
                        "name":"南郑县"
                    },
                    {
                        "name":"洋县"
                    },
                    {
                        "name":"宁强县"
                    },
                    {
                        "name":"佛坪县"
                    },
                    {
                        "name":"勉县"
                    },
                    {
                        "name":"西乡县"
                    },
                    {
                        "name":"略阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"榆林",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"榆阳区"
                    },
                    {
                        "name":"清涧县"
                    },
                    {
                        "name":"绥德县"
                    },
                    {
                        "name":"神木县"
                    },
                    {
                        "name":"佳县"
                    },
                    {
                        "name":"府谷县"
                    },
                    {
                        "name":"子洲县"
                    },
                    {
                        "name":"靖边县"
                    },
                    {
                        "name":"横山县"
                    },
                    {
                        "name":"米脂县"
                    },
                    {
                        "name":"吴堡县"
                    },
                    {
                        "name":"定边县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"安康",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"汉滨区"
                    },
                    {
                        "name":"紫阳县"
                    },
                    {
                        "name":"岚皋县"
                    },
                    {
                        "name":"旬阳县"
                    },
                    {
                        "name":"镇坪县"
                    },
                    {
                        "name":"平利县"
                    },
                    {
                        "name":"石泉县"
                    },
                    {
                        "name":"宁陕县"
                    },
                    {
                        "name":"白河县"
                    },
                    {
                        "name":"汉阴县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"商洛",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"商州区"
                    },
                    {
                        "name":"镇安县"
                    },
                    {
                        "name":"山阳县"
                    },
                    {
                        "name":"洛南县"
                    },
                    {
                        "name":"商南县"
                    },
                    {
                        "name":"丹凤县"
                    },
                    {
                        "name":"柞水县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"河北",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"石家庄",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"长安区"
                    },
                    {
                        "name":"桥东区"
                    },
                    {
                        "name":"桥西区"
                    },
                    {
                        "name":"新华区"
                    },
                    {
                        "name":"裕华区"
                    },
                    {
                        "name":"井陉矿区"
                    },
                    {
                        "name":"鹿泉市"
                    },
                    {
                        "name":"辛集市"
                    },
                    {
                        "name":"藁城市"
                    },
                    {
                        "name":"晋州市"
                    },
                    {
                        "name":"新乐市"
                    },
                    {
                        "name":"深泽县"
                    },
                    {
                        "name":"无极县"
                    },
                    {
                        "name":"赵县"
                    },
                    {
                        "name":"灵寿县"
                    },
                    {
                        "name":"高邑县"
                    },
                    {
                        "name":"元氏县"
                    },
                    {
                        "name":"赞皇县"
                    },
                    {
                        "name":"平山县"
                    },
                    {
                        "name":"井陉县"
                    },
                    {
                        "name":"栾城县"
                    },
                    {
                        "name":"正定县"
                    },
                    {
                        "name":"行唐县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"唐山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"路北区"
                    },
                    {
                        "name":"路南区"
                    },
                    {
                        "name":"古冶区"
                    },
                    {
                        "name":"开平区"
                    },
                    {
                        "name":"丰南区"
                    },
                    {
                        "name":"丰润区"
                    },
                    {
                        "name":"遵化市"
                    },
                    {
                        "name":"迁安市"
                    },
                    {
                        "name":"迁西县"
                    },
                    {
                        "name":"滦南县"
                    },
                    {
                        "name":"玉田县"
                    },
                    {
                        "name":"唐海县"
                    },
                    {
                        "name":"乐亭县"
                    },
                    {
                        "name":"滦县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"秦皇岛",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海港区"
                    },
                    {
                        "name":"山海关区"
                    },
                    {
                        "name":"北戴河区"
                    },
                    {
                        "name":"昌黎县"
                    },
                    {
                        "name":"抚宁县"
                    },
                    {
                        "name":"卢龙县"
                    },
                    {
                        "name":"青龙满族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"邯郸",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"邯山区"
                    },
                    {
                        "name":"丛台区"
                    },
                    {
                        "name":"复兴区"
                    },
                    {
                        "name":"峰峰矿区"
                    },
                    {
                        "name":"武安市"
                    },
                    {
                        "name":"邱县"
                    },
                    {
                        "name":"大名县"
                    },
                    {
                        "name":"魏县"
                    },
                    {
                        "name":"曲周县"
                    },
                    {
                        "name":"鸡泽县"
                    },
                    {
                        "name":"肥乡县"
                    },
                    {
                        "name":"广平县"
                    },
                    {
                        "name":"成安县"
                    },
                    {
                        "name":"临漳县"
                    },
                    {
                        "name":"磁县"
                    },
                    {
                        "name":"涉县"
                    },
                    {
                        "name":"永年县"
                    },
                    {
                        "name":"馆陶县"
                    },
                    {
                        "name":"邯郸县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"邢台",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"桥东区"
                    },
                    {
                        "name":"桥西区"
                    },
                    {
                        "name":"南宫市"
                    },
                    {
                        "name":"沙河市"
                    },
                    {
                        "name":"临城县"
                    },
                    {
                        "name":"内丘县"
                    },
                    {
                        "name":"柏乡县"
                    },
                    {
                        "name":"隆尧县"
                    },
                    {
                        "name":"任县"
                    },
                    {
                        "name":"南和县"
                    },
                    {
                        "name":"宁晋县"
                    },
                    {
                        "name":"巨鹿县"
                    },
                    {
                        "name":"新河县"
                    },
                    {
                        "name":"广宗县"
                    },
                    {
                        "name":"平乡县"
                    },
                    {
                        "name":"威县"
                    },
                    {
                        "name":"清河县"
                    },
                    {
                        "name":"临西县"
                    },
                    {
                        "name":"邢台县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"保定",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"新市区"
                    },
                    {
                        "name":"北市区"
                    },
                    {
                        "name":"南市区"
                    },
                    {
                        "name":"定州市"
                    },
                    {
                        "name":"涿州市"
                    },
                    {
                        "name":"安国市"
                    },
                    {
                        "name":"高碑店市"
                    },
                    {
                        "name":"易县"
                    },
                    {
                        "name":"徐水县"
                    },
                    {
                        "name":"涞源县"
                    },
                    {
                        "name":"顺平县"
                    },
                    {
                        "name":"唐县"
                    },
                    {
                        "name":"望都县"
                    },
                    {
                        "name":"涞水县"
                    },
                    {
                        "name":"高阳县"
                    },
                    {
                        "name":"安新县"
                    },
                    {
                        "name":"雄县"
                    },
                    {
                        "name":"容城县"
                    },
                    {
                        "name":"蠡县"
                    },
                    {
                        "name":"曲阳县"
                    },
                    {
                        "name":"阜平县"
                    },
                    {
                        "name":"博野县"
                    },
                    {
                        "name":"满城县"
                    },
                    {
                        "name":"清苑县"
                    },
                    {
                        "name":"定兴县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"张家口",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"桥东区"
                    },
                    {
                        "name":"桥西区"
                    },
                    {
                        "name":"宣化区"
                    },
                    {
                        "name":"下花园区"
                    },
                    {
                        "name":"张北县"
                    },
                    {
                        "name":"康保县"
                    },
                    {
                        "name":"沽源县"
                    },
                    {
                        "name":"尚义县"
                    },
                    {
                        "name":"蔚县"
                    },
                    {
                        "name":"阳原县"
                    },
                    {
                        "name":"怀安县"
                    },
                    {
                        "name":"万全县"
                    },
                    {
                        "name":"怀来县"
                    },
                    {
                        "name":"赤城县"
                    },
                    {
                        "name":"崇礼县"
                    },
                    {
                        "name":"宣化县"
                    },
                    {
                        "name":"涿鹿县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"承德",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"双桥区"
                    },
                    {
                        "name":"双滦区"
                    },
                    {
                        "name":"鹰手营子矿区"
                    },
                    {
                        "name":"兴隆县"
                    },
                    {
                        "name":"平泉县"
                    },
                    {
                        "name":"滦平县"
                    },
                    {
                        "name":"隆化县"
                    },
                    {
                        "name":"承德县"
                    },
                    {
                        "name":"丰宁满族自治县"
                    },
                    {
                        "name":"宽城满族自治县"
                    },
                    {
                        "name":"围场满族蒙古族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"沧州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"新华区"
                    },
                    {
                        "name":"运河区"
                    },
                    {
                        "name":"泊头市"
                    },
                    {
                        "name":"任丘市"
                    },
                    {
                        "name":"黄骅市"
                    },
                    {
                        "name":"河间市"
                    },
                    {
                        "name":"献县"
                    },
                    {
                        "name":"吴桥县"
                    },
                    {
                        "name":"沧县"
                    },
                    {
                        "name":"东光县"
                    },
                    {
                        "name":"肃宁县"
                    },
                    {
                        "name":"南皮县"
                    },
                    {
                        "name":"盐山县"
                    },
                    {
                        "name":"青县"
                    },
                    {
                        "name":"海兴县"
                    },
                    {
                        "name":"孟村回族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"廊坊",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"安次区"
                    },
                    {
                        "name":"广阳区"
                    },
                    {
                        "name":"霸州市"
                    },
                    {
                        "name":"三河市"
                    },
                    {
                        "name":"香河县"
                    },
                    {
                        "name":"永清县"
                    },
                    {
                        "name":"固安县"
                    },
                    {
                        "name":"文安县"
                    },
                    {
                        "name":"大城县"
                    },
                    {
                        "name":"大厂回族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"衡水",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"桃城区"
                    },
                    {
                        "name":"冀州市"
                    },
                    {
                        "name":"深州市"
                    },
                    {
                        "name":"枣强县"
                    },
                    {
                        "name":"武邑县"
                    },
                    {
                        "name":"武强县"
                    },
                    {
                        "name":"饶阳县"
                    },
                    {
                        "name":"安平县"
                    },
                    {
                        "name":"故城县"
                    },
                    {
                        "name":"景县"
                    },
                    {
                        "name":"阜城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"山西",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"太原",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"杏花岭区"
                    },
                    {
                        "name":"小店区"
                    },
                    {
                        "name":"迎泽区"
                    },
                    {
                        "name":"尖草坪区"
                    },
                    {
                        "name":"万柏林区"
                    },
                    {
                        "name":"晋源区"
                    },
                    {
                        "name":"古交市"
                    },
                    {
                        "name":"阳曲县"
                    },
                    {
                        "name":"清徐县"
                    },
                    {
                        "name":"娄烦县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"大同",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城区"
                    },
                    {
                        "name":"矿区"
                    },
                    {
                        "name":"南郊区"
                    },
                    {
                        "name":"新荣区"
                    },
                    {
                        "name":"大同县"
                    },
                    {
                        "name":"天镇县"
                    },
                    {
                        "name":"灵丘县"
                    },
                    {
                        "name":"阳高县"
                    },
                    {
                        "name":"左云县"
                    },
                    {
                        "name":"广灵县"
                    },
                    {
                        "name":"浑源县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阳泉",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城区"
                    },
                    {
                        "name":"矿区"
                    },
                    {
                        "name":"郊区"
                    },
                    {
                        "name":"平定县"
                    },
                    {
                        "name":"盂县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"长治",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城区"
                    },
                    {
                        "name":"郊区"
                    },
                    {
                        "name":"潞城市"
                    },
                    {
                        "name":"长治县"
                    },
                    {
                        "name":"长子县"
                    },
                    {
                        "name":"平顺县"
                    },
                    {
                        "name":"襄垣县"
                    },
                    {
                        "name":"沁源县"
                    },
                    {
                        "name":"屯留县"
                    },
                    {
                        "name":"黎城县"
                    },
                    {
                        "name":"武乡县"
                    },
                    {
                        "name":"沁县"
                    },
                    {
                        "name":"壶关县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"晋城",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城区"
                    },
                    {
                        "name":"高平市"
                    },
                    {
                        "name":"泽州县"
                    },
                    {
                        "name":"陵川县"
                    },
                    {
                        "name":"阳城县"
                    },
                    {
                        "name":"沁水县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"朔州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"朔城区"
                    },
                    {
                        "name":"平鲁区"
                    },
                    {
                        "name":"山阴县"
                    },
                    {
                        "name":"右玉县"
                    },
                    {
                        "name":"应县"
                    },
                    {
                        "name":"怀仁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"晋中",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"榆次区"
                    },
                    {
                        "name":"介休市"
                    },
                    {
                        "name":"昔阳县"
                    },
                    {
                        "name":"灵石县"
                    },
                    {
                        "name":"祁县"
                    },
                    {
                        "name":"左权县"
                    },
                    {
                        "name":"寿阳县"
                    },
                    {
                        "name":"太谷县"
                    },
                    {
                        "name":"和顺县"
                    },
                    {
                        "name":"平遥县"
                    },
                    {
                        "name":"榆社县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"运城",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"盐湖区"
                    },
                    {
                        "name":"河津市"
                    },
                    {
                        "name":"永济市"
                    },
                    {
                        "name":"闻喜县"
                    },
                    {
                        "name":"新绛县"
                    },
                    {
                        "name":"平陆县"
                    },
                    {
                        "name":"垣曲县"
                    },
                    {
                        "name":"绛县"
                    },
                    {
                        "name":"稷山县"
                    },
                    {
                        "name":"芮城县"
                    },
                    {
                        "name":"夏县"
                    },
                    {
                        "name":"万荣县"
                    },
                    {
                        "name":"临猗县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"忻州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"忻府区"
                    },
                    {
                        "name":"原平市"
                    },
                    {
                        "name":"代县"
                    },
                    {
                        "name":"神池县"
                    },
                    {
                        "name":"五寨县"
                    },
                    {
                        "name":"五台县"
                    },
                    {
                        "name":"偏关县"
                    },
                    {
                        "name":"宁武县"
                    },
                    {
                        "name":"静乐县"
                    },
                    {
                        "name":"繁峙县"
                    },
                    {
                        "name":"河曲县"
                    },
                    {
                        "name":"保德县"
                    },
                    {
                        "name":"定襄县"
                    },
                    {
                        "name":"岢岚县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"临汾",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"尧都区"
                    },
                    {
                        "name":"侯马市"
                    },
                    {
                        "name":"霍州市"
                    },
                    {
                        "name":"汾西县"
                    },
                    {
                        "name":"吉县"
                    },
                    {
                        "name":"安泽县"
                    },
                    {
                        "name":"大宁县"
                    },
                    {
                        "name":"浮山县"
                    },
                    {
                        "name":"古县"
                    },
                    {
                        "name":"隰县"
                    },
                    {
                        "name":"襄汾县"
                    },
                    {
                        "name":"翼城县"
                    },
                    {
                        "name":"永和县"
                    },
                    {
                        "name":"乡宁县"
                    },
                    {
                        "name":"曲沃县"
                    },
                    {
                        "name":"洪洞县"
                    },
                    {
                        "name":"蒲县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"吕梁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"离石区"
                    },
                    {
                        "name":"孝义市"
                    },
                    {
                        "name":"汾阳市"
                    },
                    {
                        "name":"文水县"
                    },
                    {
                        "name":"中阳县"
                    },
                    {
                        "name":"兴县"
                    },
                    {
                        "name":"临县"
                    },
                    {
                        "name":"方山县"
                    },
                    {
                        "name":"柳林县"
                    },
                    {
                        "name":"岚县"
                    },
                    {
                        "name":"交口县"
                    },
                    {
                        "name":"交城县"
                    },
                    {
                        "name":"石楼县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"河南",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"郑州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"中原区"
                    },
                    {
                        "name":"金水区"
                    },
                    {
                        "name":"二七区"
                    },
                    {
                        "name":"管城回族区"
                    },
                    {
                        "name":"上街区"
                    },
                    {
                        "name":"惠济区"
                    },
                    {
                        "name":"巩义市"
                    },
                    {
                        "name":"新郑市"
                    },
                    {
                        "name":"新密市"
                    },
                    {
                        "name":"登封市"
                    },
                    {
                        "name":"荥阳市"
                    },
                    {
                        "name":"中牟县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"开封",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鼓楼区"
                    },
                    {
                        "name":"龙亭区"
                    },
                    {
                        "name":"顺河回族区"
                    },
                    {
                        "name":"禹王台区"
                    },
                    {
                        "name":"金明区"
                    },
                    {
                        "name":"开封县"
                    },
                    {
                        "name":"尉氏县"
                    },
                    {
                        "name":"兰考县"
                    },
                    {
                        "name":"杞县"
                    },
                    {
                        "name":"通许县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"洛阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西工区"
                    },
                    {
                        "name":"老城区"
                    },
                    {
                        "name":"涧西区"
                    },
                    {
                        "name":"瀍河回族区"
                    },
                    {
                        "name":"洛龙区"
                    },
                    {
                        "name":"吉利区"
                    },
                    {
                        "name":"偃师市"
                    },
                    {
                        "name":"孟津县"
                    },
                    {
                        "name":"汝阳县"
                    },
                    {
                        "name":"伊川县"
                    },
                    {
                        "name":"洛宁县"
                    },
                    {
                        "name":"嵩县"
                    },
                    {
                        "name":"宜阳县"
                    },
                    {
                        "name":"新安县"
                    },
                    {
                        "name":"栾川县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"平顶山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"新华区"
                    },
                    {
                        "name":"卫东区"
                    },
                    {
                        "name":"湛河区"
                    },
                    {
                        "name":"石龙区"
                    },
                    {
                        "name":"汝州市"
                    },
                    {
                        "name":"舞钢市"
                    },
                    {
                        "name":"宝丰县"
                    },
                    {
                        "name":"叶县"
                    },
                    {
                        "name":"郏县"
                    },
                    {
                        "name":"鲁山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"安阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"北关区"
                    },
                    {
                        "name":"文峰区"
                    },
                    {
                        "name":"殷都区"
                    },
                    {
                        "name":"龙安区"
                    },
                    {
                        "name":"林州市"
                    },
                    {
                        "name":"安阳县"
                    },
                    {
                        "name":"滑县"
                    },
                    {
                        "name":"内黄县"
                    },
                    {
                        "name":"汤阴县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鹤壁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"淇滨区"
                    },
                    {
                        "name":"山城区"
                    },
                    {
                        "name":"鹤山区"
                    },
                    {
                        "name":"浚县"
                    },
                    {
                        "name":"淇县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"新乡",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"卫滨区"
                    },
                    {
                        "name":"红旗区"
                    },
                    {
                        "name":"凤泉区"
                    },
                    {
                        "name":"牧野区"
                    },
                    {
                        "name":"卫辉市"
                    },
                    {
                        "name":"辉县市"
                    },
                    {
                        "name":"新乡县"
                    },
                    {
                        "name":"获嘉县"
                    },
                    {
                        "name":"原阳县"
                    },
                    {
                        "name":"长垣县"
                    },
                    {
                        "name":"封丘县"
                    },
                    {
                        "name":"延津县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"焦作",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"解放区"
                    },
                    {
                        "name":"中站区"
                    },
                    {
                        "name":"马村区"
                    },
                    {
                        "name":"山阳区"
                    },
                    {
                        "name":"沁阳市"
                    },
                    {
                        "name":"孟州市"
                    },
                    {
                        "name":"修武县"
                    },
                    {
                        "name":"温县"
                    },
                    {
                        "name":"武陟县"
                    },
                    {
                        "name":"博爱县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"濮阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"华龙区"
                    },
                    {
                        "name":"濮阳县"
                    },
                    {
                        "name":"南乐县"
                    },
                    {
                        "name":"台前县"
                    },
                    {
                        "name":"清丰县"
                    },
                    {
                        "name":"范县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"许昌",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"魏都区"
                    },
                    {
                        "name":"禹州市"
                    },
                    {
                        "name":"长葛市"
                    },
                    {
                        "name":"许昌县"
                    },
                    {
                        "name":"鄢陵县"
                    },
                    {
                        "name":"襄城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"漯河",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"源汇区"
                    },
                    {
                        "name":"郾城区"
                    },
                    {
                        "name":"召陵区"
                    },
                    {
                        "name":"临颍县"
                    },
                    {
                        "name":"舞阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"三门峡",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"湖滨区"
                    },
                    {
                        "name":"义马市"
                    },
                    {
                        "name":"灵宝市"
                    },
                    {
                        "name":"渑池县"
                    },
                    {
                        "name":"卢氏县"
                    },
                    {
                        "name":"陕县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"南阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"卧龙区"
                    },
                    {
                        "name":"宛城区"
                    },
                    {
                        "name":"邓州市"
                    },
                    {
                        "name":"桐柏县"
                    },
                    {
                        "name":"方城县"
                    },
                    {
                        "name":"淅川县"
                    },
                    {
                        "name":"镇平县"
                    },
                    {
                        "name":"唐河县"
                    },
                    {
                        "name":"南召县"
                    },
                    {
                        "name":"内乡县"
                    },
                    {
                        "name":"新野县"
                    },
                    {
                        "name":"社旗县"
                    },
                    {
                        "name":"西峡县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"商丘",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"梁园区"
                    },
                    {
                        "name":"睢阳区"
                    },
                    {
                        "name":"永城市"
                    },
                    {
                        "name":"宁陵县"
                    },
                    {
                        "name":"虞城县"
                    },
                    {
                        "name":"民权县"
                    },
                    {
                        "name":"夏邑县"
                    },
                    {
                        "name":"柘城县"
                    },
                    {
                        "name":"睢县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"信阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"浉河区"
                    },
                    {
                        "name":"平桥区"
                    },
                    {
                        "name":"潢川县"
                    },
                    {
                        "name":"淮滨县"
                    },
                    {
                        "name":"息县"
                    },
                    {
                        "name":"新县"
                    },
                    {
                        "name":"商城县"
                    },
                    {
                        "name":"固始县"
                    },
                    {
                        "name":"罗山县"
                    },
                    {
                        "name":"光山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"周口",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"川汇区"
                    },
                    {
                        "name":"项城市"
                    },
                    {
                        "name":"商水县"
                    },
                    {
                        "name":"淮阳县"
                    },
                    {
                        "name":"太康县"
                    },
                    {
                        "name":"鹿邑县"
                    },
                    {
                        "name":"西华县"
                    },
                    {
                        "name":"扶沟县"
                    },
                    {
                        "name":"沈丘县"
                    },
                    {
                        "name":"郸城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"驻马店",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"驿城区"
                    },
                    {
                        "name":"确山县"
                    },
                    {
                        "name":"新蔡县"
                    },
                    {
                        "name":"上蔡县"
                    },
                    {
                        "name":"西平县"
                    },
                    {
                        "name":"泌阳县"
                    },
                    {
                        "name":"平舆县"
                    },
                    {
                        "name":"汝南县"
                    },
                    {
                        "name":"遂平县"
                    },
                    {
                        "name":"正阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"焦作",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"济源市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"吉林",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"长春",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"朝阳区"
                    },
                    {
                        "name":"宽城区"
                    },
                    {
                        "name":"二道区"
                    },
                    {
                        "name":"南关区"
                    },
                    {
                        "name":"绿园区"
                    },
                    {
                        "name":"双阳区"
                    },
                    {
                        "name":"九台市"
                    },
                    {
                        "name":"榆树市"
                    },
                    {
                        "name":"德惠市"
                    },
                    {
                        "name":"农安县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"吉林",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"船营区"
                    },
                    {
                        "name":"昌邑区"
                    },
                    {
                        "name":"龙潭区"
                    },
                    {
                        "name":"丰满区"
                    },
                    {
                        "name":"舒兰市"
                    },
                    {
                        "name":"桦甸市"
                    },
                    {
                        "name":"蛟河市"
                    },
                    {
                        "name":"磐石市"
                    },
                    {
                        "name":"永吉县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"四平",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"铁西区"
                    },
                    {
                        "name":"铁东区"
                    },
                    {
                        "name":"公主岭市"
                    },
                    {
                        "name":"双辽市"
                    },
                    {
                        "name":"梨树县"
                    },
                    {
                        "name":"伊通满族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"辽源",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"龙山区"
                    },
                    {
                        "name":"西安区"
                    },
                    {
                        "name":"东辽县"
                    },
                    {
                        "name":"东丰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"通化",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东昌区"
                    },
                    {
                        "name":"二道江区"
                    },
                    {
                        "name":"梅河口市"
                    },
                    {
                        "name":"集安市"
                    },
                    {
                        "name":"通化县"
                    },
                    {
                        "name":"辉南县"
                    },
                    {
                        "name":"柳河县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"白山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"八道江区"
                    },
                    {
                        "name":"江源区"
                    },
                    {
                        "name":"临江市"
                    },
                    {
                        "name":"靖宇县"
                    },
                    {
                        "name":"抚松县"
                    },
                    {
                        "name":"长白朝鲜族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"松原",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"宁江区"
                    },
                    {
                        "name":"乾安县"
                    },
                    {
                        "name":"长岭县"
                    },
                    {
                        "name":"扶余县"
                    },
                    {
                        "name":"前郭尔罗斯蒙古族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"白城",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"洮北区"
                    },
                    {
                        "name":"大安市"
                    },
                    {
                        "name":"洮南市"
                    },
                    {
                        "name":"镇赉县"
                    },
                    {
                        "name":"通榆县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"延边朝鲜族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"延吉市"
                    },
                    {
                        "name":"图们市"
                    },
                    {
                        "name":"敦化市"
                    },
                    {
                        "name":"龙井市"
                    },
                    {
                        "name":"珲春市"
                    },
                    {
                        "name":"和龙市"
                    },
                    {
                        "name":"安图县"
                    },
                    {
                        "name":"汪清县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"黑龙江",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"哈尔滨",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"松北区"
                    },
                    {
                        "name":"道里区"
                    },
                    {
                        "name":"南岗区"
                    },
                    {
                        "name":"平房区"
                    },
                    {
                        "name":"香坊区"
                    },
                    {
                        "name":"道外区"
                    },
                    {
                        "name":"呼兰区"
                    },
                    {
                        "name":"阿城区"
                    },
                    {
                        "name":"双城市"
                    },
                    {
                        "name":"尚志市"
                    },
                    {
                        "name":"五常市"
                    },
                    {
                        "name":"宾县"
                    },
                    {
                        "name":"方正县"
                    },
                    {
                        "name":"通河县"
                    },
                    {
                        "name":"巴彦县"
                    },
                    {
                        "name":"延寿县"
                    },
                    {
                        "name":"木兰县"
                    },
                    {
                        "name":"依兰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"齐齐哈尔",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"龙沙区"
                    },
                    {
                        "name":"昂昂溪区"
                    },
                    {
                        "name":"铁锋区"
                    },
                    {
                        "name":"建华区"
                    },
                    {
                        "name":"富拉尔基区"
                    },
                    {
                        "name":"碾子山区"
                    },
                    {
                        "name":"梅里斯达斡尔族区"
                    },
                    {
                        "name":"讷河市"
                    },
                    {
                        "name":"富裕县"
                    },
                    {
                        "name":"拜泉县"
                    },
                    {
                        "name":"甘南县"
                    },
                    {
                        "name":"依安县"
                    },
                    {
                        "name":"克山县"
                    },
                    {
                        "name":"泰来县"
                    },
                    {
                        "name":"克东县"
                    },
                    {
                        "name":"龙江县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鹤岗",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"兴山区"
                    },
                    {
                        "name":"工农区"
                    },
                    {
                        "name":"南山区"
                    },
                    {
                        "name":"兴安区"
                    },
                    {
                        "name":"向阳区"
                    },
                    {
                        "name":"东山区"
                    },
                    {
                        "name":"萝北县"
                    },
                    {
                        "name":"绥滨县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"双鸭山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"尖山区"
                    },
                    {
                        "name":"岭东区"
                    },
                    {
                        "name":"四方台区"
                    },
                    {
                        "name":"宝山区"
                    },
                    {
                        "name":"集贤县"
                    },
                    {
                        "name":"宝清县"
                    },
                    {
                        "name":"友谊县"
                    },
                    {
                        "name":"饶河县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鸡西",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鸡冠区"
                    },
                    {
                        "name":"恒山区"
                    },
                    {
                        "name":"城子河区"
                    },
                    {
                        "name":"滴道区"
                    },
                    {
                        "name":"梨树区"
                    },
                    {
                        "name":"麻山区"
                    },
                    {
                        "name":"密山市"
                    },
                    {
                        "name":"虎林市"
                    },
                    {
                        "name":"鸡东县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"大庆",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"萨尔图区"
                    },
                    {
                        "name":"红岗区"
                    },
                    {
                        "name":"龙凤区"
                    },
                    {
                        "name":"让胡路区"
                    },
                    {
                        "name":"大同区"
                    },
                    {
                        "name":"林甸县"
                    },
                    {
                        "name":"肇州县"
                    },
                    {
                        "name":"肇源县"
                    },
                    {
                        "name":"杜尔伯特蒙古族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"伊春",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"伊春区"
                    },
                    {
                        "name":"带岭区"
                    },
                    {
                        "name":"南岔区"
                    },
                    {
                        "name":"金山屯区"
                    },
                    {
                        "name":"西林区"
                    },
                    {
                        "name":"美溪区"
                    },
                    {
                        "name":"乌马河区"
                    },
                    {
                        "name":"翠峦区"
                    },
                    {
                        "name":"友好区"
                    },
                    {
                        "name":"上甘岭区"
                    },
                    {
                        "name":"五营区"
                    },
                    {
                        "name":"红星区"
                    },
                    {
                        "name":"新青区"
                    },
                    {
                        "name":"汤旺河区"
                    },
                    {
                        "name":"乌伊岭区"
                    },
                    {
                        "name":"铁力市"
                    },
                    {
                        "name":"嘉荫县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"牡丹江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"爱民区"
                    },
                    {
                        "name":"东安区"
                    },
                    {
                        "name":"阳明区"
                    },
                    {
                        "name":"西安区"
                    },
                    {
                        "name":"绥芬河市"
                    },
                    {
                        "name":"宁安市"
                    },
                    {
                        "name":"海林市"
                    },
                    {
                        "name":"穆棱市"
                    },
                    {
                        "name":"林口县"
                    },
                    {
                        "name":"东宁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"佳木斯",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"向阳区"
                    },
                    {
                        "name":"前进区"
                    },
                    {
                        "name":"东风区"
                    },
                    {
                        "name":"郊区"
                    },
                    {
                        "name":"同江市"
                    },
                    {
                        "name":"富锦市"
                    },
                    {
                        "name":"桦川县"
                    },
                    {
                        "name":"抚远县"
                    },
                    {
                        "name":"桦南县"
                    },
                    {
                        "name":"汤原县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"七台河",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"桃山区"
                    },
                    {
                        "name":"新兴区"
                    },
                    {
                        "name":"茄子河区"
                    },
                    {
                        "name":"勃利县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黑河",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"爱辉区"
                    },
                    {
                        "name":"北安市"
                    },
                    {
                        "name":"五大连池市"
                    },
                    {
                        "name":"逊克县"
                    },
                    {
                        "name":"嫩江县"
                    },
                    {
                        "name":"孙吴县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"绥化",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"北林区"
                    },
                    {
                        "name":"安达市"
                    },
                    {
                        "name":"肇东市"
                    },
                    {
                        "name":"海伦市"
                    },
                    {
                        "name":"绥棱县"
                    },
                    {
                        "name":"兰西县"
                    },
                    {
                        "name":"明水县"
                    },
                    {
                        "name":"青冈县"
                    },
                    {
                        "name":"庆安县"
                    },
                    {
                        "name":"望奎县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"大兴安岭地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"呼玛县"
                    },
                    {
                        "name":"塔河县"
                    },
                    {
                        "name":"漠河县"
                    },
                    {
                        "name":"大兴安岭辖区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"内蒙古",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"呼和浩特",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"回民区"
                    },
                    {
                        "name":"玉泉区"
                    },
                    {
                        "name":"新城区"
                    },
                    {
                        "name":"赛罕区"
                    },
                    {
                        "name":"托克托县"
                    },
                    {
                        "name":"清水河县"
                    },
                    {
                        "name":"武川县"
                    },
                    {
                        "name":"和林格尔县"
                    },
                    {
                        "name":"土默特左旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"包头",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"昆都仑区"
                    },
                    {
                        "name":"青山区"
                    },
                    {
                        "name":"东河区"
                    },
                    {
                        "name":"九原区"
                    },
                    {
                        "name":"石拐区"
                    },
                    {
                        "name":"白云矿区"
                    },
                    {
                        "name":"固阳县"
                    },
                    {
                        "name":"土默特右旗"
                    },
                    {
                        "name":"达尔罕茂明安联合旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"乌海",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海勃湾区"
                    },
                    {
                        "name":"乌达区"
                    },
                    {
                        "name":"海南区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"赤峰",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"红山区"
                    },
                    {
                        "name":"元宝山区"
                    },
                    {
                        "name":"松山区"
                    },
                    {
                        "name":"宁城县"
                    },
                    {
                        "name":"林西县"
                    },
                    {
                        "name":"喀喇沁旗"
                    },
                    {
                        "name":"巴林左旗"
                    },
                    {
                        "name":"敖汉旗"
                    },
                    {
                        "name":"阿鲁科尔沁旗"
                    },
                    {
                        "name":"翁牛特旗"
                    },
                    {
                        "name":"克什克腾旗"
                    },
                    {
                        "name":"巴林右旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"通辽",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"科尔沁区"
                    },
                    {
                        "name":"霍林郭勒市"
                    },
                    {
                        "name":"开鲁县"
                    },
                    {
                        "name":"科尔沁左翼中旗"
                    },
                    {
                        "name":"科尔沁左翼后旗"
                    },
                    {
                        "name":"库伦旗"
                    },
                    {
                        "name":"奈曼旗"
                    },
                    {
                        "name":"扎鲁特旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鄂尔多斯",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东胜区"
                    },
                    {
                        "name":"准格尔旗"
                    },
                    {
                        "name":"乌审旗"
                    },
                    {
                        "name":"伊金霍洛旗"
                    },
                    {
                        "name":"鄂托克旗"
                    },
                    {
                        "name":"鄂托克前旗"
                    },
                    {
                        "name":"杭锦旗"
                    },
                    {
                        "name":"达拉特旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"呼伦贝尔",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海拉尔区"
                    },
                    {
                        "name":"满洲里市"
                    },
                    {
                        "name":"牙克石市"
                    },
                    {
                        "name":"扎兰屯市"
                    },
                    {
                        "name":"根河市"
                    },
                    {
                        "name":"额尔古纳市"
                    },
                    {
                        "name":"陈巴尔虎旗"
                    },
                    {
                        "name":"阿荣旗"
                    },
                    {
                        "name":"新巴尔虎左旗"
                    },
                    {
                        "name":"新巴尔虎右旗"
                    },
                    {
                        "name":"鄂伦春自治旗"
                    },
                    {
                        "name":"莫力达瓦达斡尔族自治旗"
                    },
                    {
                        "name":"鄂温克族自治旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"巴彦淖尔",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"临河区"
                    },
                    {
                        "name":"五原县"
                    },
                    {
                        "name":"磴口县"
                    },
                    {
                        "name":"杭锦后旗"
                    },
                    {
                        "name":"乌拉特中旗"
                    },
                    {
                        "name":"乌拉特前旗"
                    },
                    {
                        "name":"乌拉特后旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"乌兰察布",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"集宁区"
                    },
                    {
                        "name":"丰镇市"
                    },
                    {
                        "name":"兴和县"
                    },
                    {
                        "name":"卓资县"
                    },
                    {
                        "name":"商都县"
                    },
                    {
                        "name":"凉城县"
                    },
                    {
                        "name":"化德县"
                    },
                    {
                        "name":"四子王旗"
                    },
                    {
                        "name":"察哈尔右翼前旗"
                    },
                    {
                        "name":"察哈尔右翼中旗"
                    },
                    {
                        "name":"察哈尔右翼后旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"锡林郭勒盟",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"锡林浩特市"
                    },
                    {
                        "name":"二连浩特市"
                    },
                    {
                        "name":"多伦县"
                    },
                    {
                        "name":"阿巴嘎旗"
                    },
                    {
                        "name":"西乌珠穆沁旗"
                    },
                    {
                        "name":"东乌珠穆沁旗"
                    },
                    {
                        "name":"苏尼特左旗"
                    },
                    {
                        "name":"苏尼特右旗"
                    },
                    {
                        "name":"太仆寺旗"
                    },
                    {
                        "name":"正镶白旗"
                    },
                    {
                        "name":"正蓝旗"
                    },
                    {
                        "name":"镶黄旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"兴安盟",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"乌兰浩特市"
                    },
                    {
                        "name":"阿尔山市"
                    },
                    {
                        "name":"突泉县"
                    },
                    {
                        "name":"扎赉特旗"
                    },
                    {
                        "name":"科尔沁右翼前旗"
                    },
                    {
                        "name":"科尔沁右翼中旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阿拉善盟",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"阿拉善左旗"
                    },
                    {
                        "name":"阿拉善右旗"
                    },
                    {
                        "name":"额济纳旗"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"山东",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"济南",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"市中区"
                    },
                    {
                        "name":"历下区"
                    },
                    {
                        "name":"天桥区"
                    },
                    {
                        "name":"槐荫区"
                    },
                    {
                        "name":"历城区"
                    },
                    {
                        "name":"长清区"
                    },
                    {
                        "name":"章丘市"
                    },
                    {
                        "name":"平阴县"
                    },
                    {
                        "name":"济阳县"
                    },
                    {
                        "name":"商河县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"青岛",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"市南区"
                    },
                    {
                        "name":"市北区"
                    },
                    {
                        "name":"城阳区"
                    },
                    {
                        "name":"四方区"
                    },
                    {
                        "name":"李沧区"
                    },
                    {
                        "name":"黄岛区"
                    },
                    {
                        "name":"崂山区"
                    },
                    {
                        "name":"胶南市"
                    },
                    {
                        "name":"胶州市"
                    },
                    {
                        "name":"平度市"
                    },
                    {
                        "name":"莱西市"
                    },
                    {
                        "name":"即墨市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"淄博",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"张店区"
                    },
                    {
                        "name":"临淄区"
                    },
                    {
                        "name":"淄川区"
                    },
                    {
                        "name":"博山区"
                    },
                    {
                        "name":"周村区"
                    },
                    {
                        "name":"桓台县"
                    },
                    {
                        "name":"高青县"
                    },
                    {
                        "name":"沂源县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"枣庄",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"市中区"
                    },
                    {
                        "name":"山亭区"
                    },
                    {
                        "name":"峄城区"
                    },
                    {
                        "name":"台儿庄区"
                    },
                    {
                        "name":"薛城区"
                    },
                    {
                        "name":"滕州市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"东营",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东营区"
                    },
                    {
                        "name":"河口区"
                    },
                    {
                        "name":"垦利县"
                    },
                    {
                        "name":"广饶县"
                    },
                    {
                        "name":"利津县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"烟台",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"芝罘区"
                    },
                    {
                        "name":"福山区"
                    },
                    {
                        "name":"牟平区"
                    },
                    {
                        "name":"莱山区"
                    },
                    {
                        "name":"龙口市"
                    },
                    {
                        "name":"莱阳市"
                    },
                    {
                        "name":"莱州市"
                    },
                    {
                        "name":"招远市"
                    },
                    {
                        "name":"蓬莱市"
                    },
                    {
                        "name":"栖霞市"
                    },
                    {
                        "name":"海阳市"
                    },
                    {
                        "name":"长岛县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"潍坊",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"潍城区"
                    },
                    {
                        "name":"寒亭区"
                    },
                    {
                        "name":"坊子区"
                    },
                    {
                        "name":"奎文区"
                    },
                    {
                        "name":"青州市"
                    },
                    {
                        "name":"诸城市"
                    },
                    {
                        "name":"寿光市"
                    },
                    {
                        "name":"安丘市"
                    },
                    {
                        "name":"高密市"
                    },
                    {
                        "name":"昌邑市"
                    },
                    {
                        "name":"昌乐县"
                    },
                    {
                        "name":"临朐县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"济宁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"市中区"
                    },
                    {
                        "name":"任城区"
                    },
                    {
                        "name":"曲阜市"
                    },
                    {
                        "name":"兖州市"
                    },
                    {
                        "name":"邹城市"
                    },
                    {
                        "name":"鱼台县"
                    },
                    {
                        "name":"金乡县"
                    },
                    {
                        "name":"嘉祥县"
                    },
                    {
                        "name":"微山县"
                    },
                    {
                        "name":"汶上县"
                    },
                    {
                        "name":"泗水县"
                    },
                    {
                        "name":"梁山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"泰安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"泰山区"
                    },
                    {
                        "name":"岱岳区"
                    },
                    {
                        "name":"新泰市"
                    },
                    {
                        "name":"肥城市"
                    },
                    {
                        "name":"宁阳县"
                    },
                    {
                        "name":"东平县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"威海",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"环翠区"
                    },
                    {
                        "name":"乳山市"
                    },
                    {
                        "name":"文登市"
                    },
                    {
                        "name":"荣成市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"日照",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东港区"
                    },
                    {
                        "name":"岚山区"
                    },
                    {
                        "name":"五莲县"
                    },
                    {
                        "name":"莒县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"莱芜",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"莱城区"
                    },
                    {
                        "name":"钢城区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"临沂",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"兰山区"
                    },
                    {
                        "name":"罗庄区"
                    },
                    {
                        "name":"河东区"
                    },
                    {
                        "name":"沂南县"
                    },
                    {
                        "name":"郯城县"
                    },
                    {
                        "name":"沂水县"
                    },
                    {
                        "name":"苍山县"
                    },
                    {
                        "name":"费县"
                    },
                    {
                        "name":"平邑县"
                    },
                    {
                        "name":"莒南县"
                    },
                    {
                        "name":"蒙阴县"
                    },
                    {
                        "name":"临沭县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"德州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"德城区"
                    },
                    {
                        "name":"乐陵市"
                    },
                    {
                        "name":"禹城市"
                    },
                    {
                        "name":"陵县"
                    },
                    {
                        "name":"宁津县"
                    },
                    {
                        "name":"齐河县"
                    },
                    {
                        "name":"武城县"
                    },
                    {
                        "name":"庆云县"
                    },
                    {
                        "name":"平原县"
                    },
                    {
                        "name":"夏津县"
                    },
                    {
                        "name":"临邑县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"聊城",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东昌府区"
                    },
                    {
                        "name":"临清市"
                    },
                    {
                        "name":"高唐县"
                    },
                    {
                        "name":"阳谷县"
                    },
                    {
                        "name":"茌平县"
                    },
                    {
                        "name":"莘县"
                    },
                    {
                        "name":"东阿县"
                    },
                    {
                        "name":"冠县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"滨州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"滨城区"
                    },
                    {
                        "name":"邹平县"
                    },
                    {
                        "name":"沾化县"
                    },
                    {
                        "name":"惠民县"
                    },
                    {
                        "name":"博兴县"
                    },
                    {
                        "name":"阳信县"
                    },
                    {
                        "name":"无棣县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"菏泽",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"牡丹区"
                    },
                    {
                        "name":"鄄城县"
                    },
                    {
                        "name":"单县"
                    },
                    {
                        "name":"郓城县"
                    },
                    {
                        "name":"曹县"
                    },
                    {
                        "name":"定陶县"
                    },
                    {
                        "name":"巨野县"
                    },
                    {
                        "name":"东明县"
                    },
                    {
                        "name":"成武县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"安徽",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"合肥",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"庐阳区"
                    },
                    {
                        "name":"瑶海区"
                    },
                    {
                        "name":"蜀山区"
                    },
                    {
                        "name":"包河区"
                    },
                    {
                        "name":"长丰县"
                    },
                    {
                        "name":"肥东县"
                    },
                    {
                        "name":"肥西县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"芜湖",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"镜湖区"
                    },
                    {
                        "name":"弋江区"
                    },
                    {
                        "name":"鸠江区"
                    },
                    {
                        "name":"三山区"
                    },
                    {
                        "name":"芜湖县"
                    },
                    {
                        "name":"南陵县"
                    },
                    {
                        "name":"繁昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"蚌埠",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"蚌山区"
                    },
                    {
                        "name":"龙子湖区"
                    },
                    {
                        "name":"禹会区"
                    },
                    {
                        "name":"淮上区"
                    },
                    {
                        "name":"怀远县"
                    },
                    {
                        "name":"固镇县"
                    },
                    {
                        "name":"五河县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"淮南",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"田家庵区"
                    },
                    {
                        "name":"大通区"
                    },
                    {
                        "name":"谢家集区"
                    },
                    {
                        "name":"八公山区"
                    },
                    {
                        "name":"潘集区"
                    },
                    {
                        "name":"凤台县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"马鞍山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"雨山区"
                    },
                    {
                        "name":"花山区"
                    },
                    {
                        "name":"金家庄区"
                    },
                    {
                        "name":"当涂县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"淮北",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"相山区"
                    },
                    {
                        "name":"杜集区"
                    },
                    {
                        "name":"烈山区"
                    },
                    {
                        "name":"濉溪县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"铜陵",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"铜官山区"
                    },
                    {
                        "name":"狮子山区"
                    },
                    {
                        "name":"郊区"
                    },
                    {
                        "name":"铜陵县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"安庆",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"迎江区"
                    },
                    {
                        "name":"大观区"
                    },
                    {
                        "name":"宜秀区"
                    },
                    {
                        "name":"桐城市"
                    },
                    {
                        "name":"宿松县"
                    },
                    {
                        "name":"枞阳县"
                    },
                    {
                        "name":"太湖县"
                    },
                    {
                        "name":"怀宁县"
                    },
                    {
                        "name":"岳西县"
                    },
                    {
                        "name":"望江县"
                    },
                    {
                        "name":"潜山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黄山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"屯溪区"
                    },
                    {
                        "name":"黄山区"
                    },
                    {
                        "name":"徽州区"
                    },
                    {
                        "name":"休宁县"
                    },
                    {
                        "name":"歙县"
                    },
                    {
                        "name":"祁门县"
                    },
                    {
                        "name":"黟县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"滁州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"琅琊区"
                    },
                    {
                        "name":"南谯区"
                    },
                    {
                        "name":"天长市"
                    },
                    {
                        "name":"明光市"
                    },
                    {
                        "name":"全椒县"
                    },
                    {
                        "name":"来安县"
                    },
                    {
                        "name":"定远县"
                    },
                    {
                        "name":"凤阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阜阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"颍州区"
                    },
                    {
                        "name":"颍东区"
                    },
                    {
                        "name":"颍泉区"
                    },
                    {
                        "name":"界首市"
                    },
                    {
                        "name":"临泉县"
                    },
                    {
                        "name":"颍上县"
                    },
                    {
                        "name":"阜南县"
                    },
                    {
                        "name":"太和县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宿州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"埇桥区"
                    },
                    {
                        "name":"萧县"
                    },
                    {
                        "name":"泗县"
                    },
                    {
                        "name":"砀山县"
                    },
                    {
                        "name":"灵璧县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"巢湖",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"居巢区"
                    },
                    {
                        "name":"含山县"
                    },
                    {
                        "name":"无为县"
                    },
                    {
                        "name":"庐江县"
                    },
                    {
                        "name":"和县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"六安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"金安区"
                    },
                    {
                        "name":"裕安区"
                    },
                    {
                        "name":"寿县"
                    },
                    {
                        "name":"霍山县"
                    },
                    {
                        "name":"霍邱县"
                    },
                    {
                        "name":"舒城县"
                    },
                    {
                        "name":"金寨县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"亳州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"谯城区"
                    },
                    {
                        "name":"利辛县"
                    },
                    {
                        "name":"涡阳县"
                    },
                    {
                        "name":"蒙城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"池州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"贵池区"
                    },
                    {
                        "name":"东至县"
                    },
                    {
                        "name":"石台县"
                    },
                    {
                        "name":"青阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宣城",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"宣州区"
                    },
                    {
                        "name":"宁国市"
                    },
                    {
                        "name":"广德县"
                    },
                    {
                        "name":"郎溪县"
                    },
                    {
                        "name":"泾县"
                    },
                    {
                        "name":"旌德县"
                    },
                    {
                        "name":"绩溪县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"浙江",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"杭州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"拱墅区"
                    },
                    {
                        "name":"西湖区"
                    },
                    {
                        "name":"上城区"
                    },
                    {
                        "name":"下城区"
                    },
                    {
                        "name":"江干区"
                    },
                    {
                        "name":"滨江区"
                    },
                    {
                        "name":"余杭区"
                    },
                    {
                        "name":"萧山区"
                    },
                    {
                        "name":"建德市"
                    },
                    {
                        "name":"富阳市"
                    },
                    {
                        "name":"临安市"
                    },
                    {
                        "name":"桐庐县"
                    },
                    {
                        "name":"淳安县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宁波",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海曙区"
                    },
                    {
                        "name":"江东区"
                    },
                    {
                        "name":"江北区"
                    },
                    {
                        "name":"镇海区"
                    },
                    {
                        "name":"北仑区"
                    },
                    {
                        "name":"鄞州区"
                    },
                    {
                        "name":"余姚市"
                    },
                    {
                        "name":"慈溪市"
                    },
                    {
                        "name":"奉化市"
                    },
                    {
                        "name":"宁海县"
                    },
                    {
                        "name":"象山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"温州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鹿城区"
                    },
                    {
                        "name":"龙湾区"
                    },
                    {
                        "name":"瓯海区"
                    },
                    {
                        "name":"瑞安市"
                    },
                    {
                        "name":"乐清市"
                    },
                    {
                        "name":"永嘉县"
                    },
                    {
                        "name":"洞头县"
                    },
                    {
                        "name":"平阳县"
                    },
                    {
                        "name":"苍南县"
                    },
                    {
                        "name":"文成县"
                    },
                    {
                        "name":"泰顺县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"嘉兴",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"秀城区"
                    },
                    {
                        "name":"秀洲区"
                    },
                    {
                        "name":"海宁市"
                    },
                    {
                        "name":"平湖市"
                    },
                    {
                        "name":"桐乡市"
                    },
                    {
                        "name":"嘉善县"
                    },
                    {
                        "name":"海盐县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"湖州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"吴兴区"
                    },
                    {
                        "name":"南浔区"
                    },
                    {
                        "name":"长兴县"
                    },
                    {
                        "name":"德清县"
                    },
                    {
                        "name":"安吉县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"绍兴",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"越城区"
                    },
                    {
                        "name":"诸暨市"
                    },
                    {
                        "name":"上虞市"
                    },
                    {
                        "name":"嵊州市"
                    },
                    {
                        "name":"绍兴县"
                    },
                    {
                        "name":"新昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"金华",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"婺城区"
                    },
                    {
                        "name":"金东区"
                    },
                    {
                        "name":"兰溪市"
                    },
                    {
                        "name":"义乌市"
                    },
                    {
                        "name":"东阳市"
                    },
                    {
                        "name":"永康市"
                    },
                    {
                        "name":"武义县"
                    },
                    {
                        "name":"浦江县"
                    },
                    {
                        "name":"磐安县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"衢州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"柯城区"
                    },
                    {
                        "name":"衢江区"
                    },
                    {
                        "name":"江山市"
                    },
                    {
                        "name":"龙游县"
                    },
                    {
                        "name":"常山县"
                    },
                    {
                        "name":"开化县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"舟山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"定海区"
                    },
                    {
                        "name":"普陀区"
                    },
                    {
                        "name":"岱山县"
                    },
                    {
                        "name":"嵊泗县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"台州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"椒江区"
                    },
                    {
                        "name":"黄岩区"
                    },
                    {
                        "name":"路桥区"
                    },
                    {
                        "name":"临海市"
                    },
                    {
                        "name":"温岭市"
                    },
                    {
                        "name":"玉环县"
                    },
                    {
                        "name":"天台县"
                    },
                    {
                        "name":"仙居县"
                    },
                    {
                        "name":"三门县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"丽水",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"莲都区"
                    },
                    {
                        "name":"龙泉市"
                    },
                    {
                        "name":"缙云县"
                    },
                    {
                        "name":"青田县"
                    },
                    {
                        "name":"云和县"
                    },
                    {
                        "name":"遂昌县"
                    },
                    {
                        "name":"松阳县"
                    },
                    {
                        "name":"庆元县"
                    },
                    {
                        "name":"景宁畲族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"福建",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"福州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鼓楼区"
                    },
                    {
                        "name":"台江区"
                    },
                    {
                        "name":"仓山区"
                    },
                    {
                        "name":"马尾区"
                    },
                    {
                        "name":"晋安区"
                    },
                    {
                        "name":"福清市"
                    },
                    {
                        "name":"长乐市"
                    },
                    {
                        "name":"闽侯县"
                    },
                    {
                        "name":"闽清县"
                    },
                    {
                        "name":"永泰县"
                    },
                    {
                        "name":"连江县"
                    },
                    {
                        "name":"罗源县"
                    },
                    {
                        "name":"平潭县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"厦门",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"思明区"
                    },
                    {
                        "name":"海沧区"
                    },
                    {
                        "name":"湖里区"
                    },
                    {
                        "name":"集美区"
                    },
                    {
                        "name":"同安区"
                    },
                    {
                        "name":"翔安区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"莆田",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城厢区"
                    },
                    {
                        "name":"涵江区"
                    },
                    {
                        "name":"荔城区"
                    },
                    {
                        "name":"秀屿区"
                    },
                    {
                        "name":"仙游县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"三明",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"梅列区"
                    },
                    {
                        "name":"三元区"
                    },
                    {
                        "name":"永安市"
                    },
                    {
                        "name":"明溪县"
                    },
                    {
                        "name":"将乐县"
                    },
                    {
                        "name":"大田县"
                    },
                    {
                        "name":"宁化县"
                    },
                    {
                        "name":"建宁县"
                    },
                    {
                        "name":"沙县"
                    },
                    {
                        "name":"尤溪县"
                    },
                    {
                        "name":"清流县"
                    },
                    {
                        "name":"泰宁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"泉州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鲤城区"
                    },
                    {
                        "name":"丰泽区"
                    },
                    {
                        "name":"洛江区"
                    },
                    {
                        "name":"泉港区"
                    },
                    {
                        "name":"石狮市"
                    },
                    {
                        "name":"晋江市"
                    },
                    {
                        "name":"南安市"
                    },
                    {
                        "name":"惠安县"
                    },
                    {
                        "name":"永春县"
                    },
                    {
                        "name":"安溪县"
                    },
                    {
                        "name":"德化县"
                    },
                    {
                        "name":"金门县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"漳州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"芗城区"
                    },
                    {
                        "name":"龙文区"
                    },
                    {
                        "name":"龙海市"
                    },
                    {
                        "name":"平和县"
                    },
                    {
                        "name":"南靖县"
                    },
                    {
                        "name":"诏安县"
                    },
                    {
                        "name":"漳浦县"
                    },
                    {
                        "name":"华安县"
                    },
                    {
                        "name":"东山县"
                    },
                    {
                        "name":"长泰县"
                    },
                    {
                        "name":"云霄县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"南平",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"延平区"
                    },
                    {
                        "name":"建瓯市"
                    },
                    {
                        "name":"邵武市"
                    },
                    {
                        "name":"武夷山市"
                    },
                    {
                        "name":"建阳市"
                    },
                    {
                        "name":"松溪县"
                    },
                    {
                        "name":"光泽县"
                    },
                    {
                        "name":"顺昌县"
                    },
                    {
                        "name":"浦城县"
                    },
                    {
                        "name":"政和县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"龙岩",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"新罗区"
                    },
                    {
                        "name":"漳平市"
                    },
                    {
                        "name":"长汀县"
                    },
                    {
                        "name":"武平县"
                    },
                    {
                        "name":"上杭县"
                    },
                    {
                        "name":"永定县"
                    },
                    {
                        "name":"连城县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宁德",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"蕉城区"
                    },
                    {
                        "name":"福安市"
                    },
                    {
                        "name":"福鼎市"
                    },
                    {
                        "name":"寿宁县"
                    },
                    {
                        "name":"霞浦县"
                    },
                    {
                        "name":"柘荣县"
                    },
                    {
                        "name":"屏南县"
                    },
                    {
                        "name":"古田县"
                    },
                    {
                        "name":"周宁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"湖南",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"长沙",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"岳麓区"
                    },
                    {
                        "name":"芙蓉区"
                    },
                    {
                        "name":"天心区"
                    },
                    {
                        "name":"开福区"
                    },
                    {
                        "name":"雨花区"
                    },
                    {
                        "name":"浏阳市"
                    },
                    {
                        "name":"长沙县"
                    },
                    {
                        "name":"望城县"
                    },
                    {
                        "name":"宁乡县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"株洲",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"天元区"
                    },
                    {
                        "name":"荷塘区"
                    },
                    {
                        "name":"芦淞区"
                    },
                    {
                        "name":"石峰区"
                    },
                    {
                        "name":"醴陵市"
                    },
                    {
                        "name":"株洲县"
                    },
                    {
                        "name":"炎陵县"
                    },
                    {
                        "name":"茶陵县"
                    },
                    {
                        "name":"攸县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"湘潭",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"岳塘区"
                    },
                    {
                        "name":"雨湖区"
                    },
                    {
                        "name":"湘乡市"
                    },
                    {
                        "name":"韶山市"
                    },
                    {
                        "name":"湘潭县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"衡阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"雁峰区"
                    },
                    {
                        "name":"珠晖区"
                    },
                    {
                        "name":"石鼓区"
                    },
                    {
                        "name":"蒸湘区"
                    },
                    {
                        "name":"南岳区"
                    },
                    {
                        "name":"耒阳市"
                    },
                    {
                        "name":"常宁市"
                    },
                    {
                        "name":"衡阳县"
                    },
                    {
                        "name":"衡东县"
                    },
                    {
                        "name":"衡山县"
                    },
                    {
                        "name":"衡南县"
                    },
                    {
                        "name":"祁东县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"邵阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"双清区"
                    },
                    {
                        "name":"大祥区"
                    },
                    {
                        "name":"北塔区"
                    },
                    {
                        "name":"武冈市"
                    },
                    {
                        "name":"邵东县"
                    },
                    {
                        "name":"洞口县"
                    },
                    {
                        "name":"新邵县"
                    },
                    {
                        "name":"绥宁县"
                    },
                    {
                        "name":"新宁县"
                    },
                    {
                        "name":"邵阳县"
                    },
                    {
                        "name":"隆回县"
                    },
                    {
                        "name":"城步苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"岳阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"岳阳楼区"
                    },
                    {
                        "name":"云溪区"
                    },
                    {
                        "name":"君山区"
                    },
                    {
                        "name":"临湘市"
                    },
                    {
                        "name":"汨罗市"
                    },
                    {
                        "name":"岳阳县"
                    },
                    {
                        "name":"湘阴县"
                    },
                    {
                        "name":"平江县"
                    },
                    {
                        "name":"华容县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"常德",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"武陵区"
                    },
                    {
                        "name":"鼎城区"
                    },
                    {
                        "name":"津市市"
                    },
                    {
                        "name":"澧县"
                    },
                    {
                        "name":"临澧县"
                    },
                    {
                        "name":"桃源县"
                    },
                    {
                        "name":"汉寿县"
                    },
                    {
                        "name":"安乡县"
                    },
                    {
                        "name":"石门县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"张家界",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"永定区"
                    },
                    {
                        "name":"武陵源区"
                    },
                    {
                        "name":"慈利县"
                    },
                    {
                        "name":"桑植县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"益阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"赫山区"
                    },
                    {
                        "name":"资阳区"
                    },
                    {
                        "name":"沅江市"
                    },
                    {
                        "name":"桃江县"
                    },
                    {
                        "name":"南县"
                    },
                    {
                        "name":"安化县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"郴州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"北湖区"
                    },
                    {
                        "name":"苏仙区"
                    },
                    {
                        "name":"资兴市"
                    },
                    {
                        "name":"宜章县"
                    },
                    {
                        "name":"汝城县"
                    },
                    {
                        "name":"安仁县"
                    },
                    {
                        "name":"嘉禾县"
                    },
                    {
                        "name":"临武县"
                    },
                    {
                        "name":"桂东县"
                    },
                    {
                        "name":"永兴县"
                    },
                    {
                        "name":"桂阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"永州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"冷水滩区"
                    },
                    {
                        "name":"零陵区"
                    },
                    {
                        "name":"祁阳县"
                    },
                    {
                        "name":"蓝山县"
                    },
                    {
                        "name":"宁远县"
                    },
                    {
                        "name":"新田县"
                    },
                    {
                        "name":"东安县"
                    },
                    {
                        "name":"江永县"
                    },
                    {
                        "name":"道县"
                    },
                    {
                        "name":"双牌县"
                    },
                    {
                        "name":"江华瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"怀化",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"鹤城区"
                    },
                    {
                        "name":"洪江市"
                    },
                    {
                        "name":"会同县"
                    },
                    {
                        "name":"沅陵县"
                    },
                    {
                        "name":"辰溪县"
                    },
                    {
                        "name":"溆浦县"
                    },
                    {
                        "name":"中方县"
                    },
                    {
                        "name":"新晃侗族自治县"
                    },
                    {
                        "name":"芷江侗族自治县"
                    },
                    {
                        "name":"通道侗族自治县"
                    },
                    {
                        "name":"靖州苗族侗族自治县"
                    },
                    {
                        "name":"麻阳苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"娄底",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"娄星区"
                    },
                    {
                        "name":"冷水江市"
                    },
                    {
                        "name":"涟源市"
                    },
                    {
                        "name":"新化县"
                    },
                    {
                        "name":"双峰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"湘西土家族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"吉首市"
                    },
                    {
                        "name":"古丈县"
                    },
                    {
                        "name":"龙山县"
                    },
                    {
                        "name":"永顺县"
                    },
                    {
                        "name":"凤凰县"
                    },
                    {
                        "name":"泸溪县"
                    },
                    {
                        "name":"保靖县"
                    },
                    {
                        "name":"花垣县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"广西",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"南宁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"青秀区"
                    },
                    {
                        "name":"兴宁区"
                    },
                    {
                        "name":"西乡塘区"
                    },
                    {
                        "name":"良庆区"
                    },
                    {
                        "name":"江南区"
                    },
                    {
                        "name":"邕宁区"
                    },
                    {
                        "name":"武鸣县"
                    },
                    {
                        "name":"隆安县"
                    },
                    {
                        "name":"马山县"
                    },
                    {
                        "name":"上林县"
                    },
                    {
                        "name":"宾阳县"
                    },
                    {
                        "name":"横县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"柳州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城中区"
                    },
                    {
                        "name":"鱼峰区"
                    },
                    {
                        "name":"柳北区"
                    },
                    {
                        "name":"柳南区"
                    },
                    {
                        "name":"柳江县"
                    },
                    {
                        "name":"柳城县"
                    },
                    {
                        "name":"鹿寨县"
                    },
                    {
                        "name":"融安县"
                    },
                    {
                        "name":"融水苗族自治县"
                    },
                    {
                        "name":"三江侗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"桂林",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"象山区"
                    },
                    {
                        "name":"秀峰区"
                    },
                    {
                        "name":"叠彩区"
                    },
                    {
                        "name":"七星区"
                    },
                    {
                        "name":"雁山区"
                    },
                    {
                        "name":"阳朔县"
                    },
                    {
                        "name":"临桂县"
                    },
                    {
                        "name":"灵川县"
                    },
                    {
                        "name":"全州县"
                    },
                    {
                        "name":"平乐县"
                    },
                    {
                        "name":"兴安县"
                    },
                    {
                        "name":"灌阳县"
                    },
                    {
                        "name":"荔浦县"
                    },
                    {
                        "name":"资源县"
                    },
                    {
                        "name":"永福县"
                    },
                    {
                        "name":"龙胜各族自治县"
                    },
                    {
                        "name":"恭城瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"梧州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"万秀区"
                    },
                    {
                        "name":"蝶山区"
                    },
                    {
                        "name":"长洲区"
                    },
                    {
                        "name":"岑溪市"
                    },
                    {
                        "name":"苍梧县"
                    },
                    {
                        "name":"藤县"
                    },
                    {
                        "name":"蒙山县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"北海",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海城区"
                    },
                    {
                        "name":"银海区"
                    },
                    {
                        "name":"铁山港区"
                    },
                    {
                        "name":"合浦县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"防城港",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"港口区"
                    },
                    {
                        "name":"防城区"
                    },
                    {
                        "name":"东兴市"
                    },
                    {
                        "name":"上思县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"钦州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"钦南区"
                    },
                    {
                        "name":"钦北区"
                    },
                    {
                        "name":"灵山县"
                    },
                    {
                        "name":"浦北县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"贵港",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"港北区"
                    },
                    {
                        "name":"港南区"
                    },
                    {
                        "name":"覃塘区"
                    },
                    {
                        "name":"桂平市"
                    },
                    {
                        "name":"平南县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"玉林",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"玉州区"
                    },
                    {
                        "name":"北流市"
                    },
                    {
                        "name":"容县"
                    },
                    {
                        "name":"陆川县"
                    },
                    {
                        "name":"博白县"
                    },
                    {
                        "name":"兴业县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"百色",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"右江区"
                    },
                    {
                        "name":"凌云县"
                    },
                    {
                        "name":"平果县"
                    },
                    {
                        "name":"西林县"
                    },
                    {
                        "name":"乐业县"
                    },
                    {
                        "name":"德保县"
                    },
                    {
                        "name":"田林县"
                    },
                    {
                        "name":"田阳县"
                    },
                    {
                        "name":"靖西县"
                    },
                    {
                        "name":"田东县"
                    },
                    {
                        "name":"那坡县"
                    },
                    {
                        "name":"隆林各族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"贺州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"八步区"
                    },
                    {
                        "name":"钟山县"
                    },
                    {
                        "name":"昭平县"
                    },
                    {
                        "name":"富川瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"河池",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"金城江区"
                    },
                    {
                        "name":"宜州市"
                    },
                    {
                        "name":"天峨县"
                    },
                    {
                        "name":"凤山县"
                    },
                    {
                        "name":"南丹县"
                    },
                    {
                        "name":"东兰县"
                    },
                    {
                        "name":"都安瑶族自治县"
                    },
                    {
                        "name":"罗城仫佬族自治县"
                    },
                    {
                        "name":"巴马瑶族自治县"
                    },
                    {
                        "name":"环江毛南族自治县"
                    },
                    {
                        "name":"大化瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"来宾",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"兴宾区"
                    },
                    {
                        "name":"合山市"
                    },
                    {
                        "name":"象州县"
                    },
                    {
                        "name":"武宣县"
                    },
                    {
                        "name":"忻城县"
                    },
                    {
                        "name":"金秀瑶族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"崇左",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"江州区"
                    },
                    {
                        "name":"凭祥市"
                    },
                    {
                        "name":"宁明县"
                    },
                    {
                        "name":"扶绥县"
                    },
                    {
                        "name":"龙州县"
                    },
                    {
                        "name":"大新县"
                    },
                    {
                        "name":"天等县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"江西",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"南昌",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"东湖区"
                    },
                    {
                        "name":"西湖区"
                    },
                    {
                        "name":"青云谱区"
                    },
                    {
                        "name":"湾里区"
                    },
                    {
                        "name":"青山湖区"
                    },
                    {
                        "name":"新建县"
                    },
                    {
                        "name":"南昌县"
                    },
                    {
                        "name":"进贤县"
                    },
                    {
                        "name":"安义县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"景德镇",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"珠山区"
                    },
                    {
                        "name":"昌江区"
                    },
                    {
                        "name":"乐平市"
                    },
                    {
                        "name":"浮梁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"萍乡",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"安源区"
                    },
                    {
                        "name":"湘东区"
                    },
                    {
                        "name":"莲花县"
                    },
                    {
                        "name":"上栗县"
                    },
                    {
                        "name":"芦溪县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"九江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"浔阳区"
                    },
                    {
                        "name":"庐山区"
                    },
                    {
                        "name":"瑞昌市"
                    },
                    {
                        "name":"九江县"
                    },
                    {
                        "name":"星子县"
                    },
                    {
                        "name":"武宁县"
                    },
                    {
                        "name":"彭泽县"
                    },
                    {
                        "name":"永修县"
                    },
                    {
                        "name":"修水县"
                    },
                    {
                        "name":"湖口县"
                    },
                    {
                        "name":"德安县"
                    },
                    {
                        "name":"都昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"新余",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"渝水区"
                    },
                    {
                        "name":"分宜县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"鹰潭",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"月湖区"
                    },
                    {
                        "name":"贵溪市"
                    },
                    {
                        "name":"余江县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"赣州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"章贡区"
                    },
                    {
                        "name":"瑞金市"
                    },
                    {
                        "name":"南康市"
                    },
                    {
                        "name":"石城县"
                    },
                    {
                        "name":"安远县"
                    },
                    {
                        "name":"赣县"
                    },
                    {
                        "name":"宁都县"
                    },
                    {
                        "name":"寻乌县"
                    },
                    {
                        "name":"兴国县"
                    },
                    {
                        "name":"定南县"
                    },
                    {
                        "name":"上犹县"
                    },
                    {
                        "name":"于都县"
                    },
                    {
                        "name":"龙南县"
                    },
                    {
                        "name":"崇义县"
                    },
                    {
                        "name":"信丰县"
                    },
                    {
                        "name":"全南县"
                    },
                    {
                        "name":"大余县"
                    },
                    {
                        "name":"会昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"吉安",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"吉州区"
                    },
                    {
                        "name":"青原区"
                    },
                    {
                        "name":"井冈山市"
                    },
                    {
                        "name":"吉安县"
                    },
                    {
                        "name":"永丰县"
                    },
                    {
                        "name":"永新县"
                    },
                    {
                        "name":"新干县"
                    },
                    {
                        "name":"泰和县"
                    },
                    {
                        "name":"峡江县"
                    },
                    {
                        "name":"遂川县"
                    },
                    {
                        "name":"安福县"
                    },
                    {
                        "name":"吉水县"
                    },
                    {
                        "name":"万安县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"宜春",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"袁州区"
                    },
                    {
                        "name":"丰城市"
                    },
                    {
                        "name":"樟树市"
                    },
                    {
                        "name":"高安市"
                    },
                    {
                        "name":"铜鼓县"
                    },
                    {
                        "name":"靖安县"
                    },
                    {
                        "name":"宜丰县"
                    },
                    {
                        "name":"奉新县"
                    },
                    {
                        "name":"万载县"
                    },
                    {
                        "name":"上高县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"抚州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"临川区"
                    },
                    {
                        "name":"南丰县"
                    },
                    {
                        "name":"乐安县"
                    },
                    {
                        "name":"金溪县"
                    },
                    {
                        "name":"南城县"
                    },
                    {
                        "name":"东乡县"
                    },
                    {
                        "name":"资溪县"
                    },
                    {
                        "name":"宜黄县"
                    },
                    {
                        "name":"广昌县"
                    },
                    {
                        "name":"黎川县"
                    },
                    {
                        "name":"崇仁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"上饶",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"信州区"
                    },
                    {
                        "name":"德兴市"
                    },
                    {
                        "name":"上饶县"
                    },
                    {
                        "name":"广丰县"
                    },
                    {
                        "name":"鄱阳县"
                    },
                    {
                        "name":"婺源县"
                    },
                    {
                        "name":"铅山县"
                    },
                    {
                        "name":"余干县"
                    },
                    {
                        "name":"横峰县"
                    },
                    {
                        "name":"弋阳县"
                    },
                    {
                        "name":"玉山县"
                    },
                    {
                        "name":"万年县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"贵州",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"贵阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"南明区"
                    },
                    {
                        "name":"云岩区"
                    },
                    {
                        "name":"花溪区"
                    },
                    {
                        "name":"乌当区"
                    },
                    {
                        "name":"白云区"
                    },
                    {
                        "name":"小河区"
                    },
                    {
                        "name":"清镇市"
                    },
                    {
                        "name":"开阳县"
                    },
                    {
                        "name":"修文县"
                    },
                    {
                        "name":"息烽县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"六盘水",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"钟山区"
                    },
                    {
                        "name":"水城县"
                    },
                    {
                        "name":"盘县"
                    },
                    {
                        "name":"六枝特区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"遵义",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"红花岗区"
                    },
                    {
                        "name":"汇川区"
                    },
                    {
                        "name":"赤水市"
                    },
                    {
                        "name":"仁怀市"
                    },
                    {
                        "name":"遵义县"
                    },
                    {
                        "name":"绥阳县"
                    },
                    {
                        "name":"桐梓县"
                    },
                    {
                        "name":"习水县"
                    },
                    {
                        "name":"凤冈县"
                    },
                    {
                        "name":"正安县"
                    },
                    {
                        "name":"余庆县"
                    },
                    {
                        "name":"湄潭县"
                    },
                    {
                        "name":"道真仡佬族苗族自治县"
                    },
                    {
                        "name":"务川仡佬族苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"安顺",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西秀区"
                    },
                    {
                        "name":"普定县"
                    },
                    {
                        "name":"平坝县"
                    },
                    {
                        "name":"镇宁布依族苗族自治县"
                    },
                    {
                        "name":"紫云苗族布依族自治县"
                    },
                    {
                        "name":"关岭布依族苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"铜仁地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"铜仁市"
                    },
                    {
                        "name":"德江县"
                    },
                    {
                        "name":"江口县"
                    },
                    {
                        "name":"思南县"
                    },
                    {
                        "name":"石阡县"
                    },
                    {
                        "name":"玉屏侗族自治县"
                    },
                    {
                        "name":"松桃苗族自治县"
                    },
                    {
                        "name":"印江土家族苗族自治县"
                    },
                    {
                        "name":"沿河土家族自治县"
                    },
                    {
                        "name":"万山特区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"毕节地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"毕节市"
                    },
                    {
                        "name":"黔西县"
                    },
                    {
                        "name":"大方县"
                    },
                    {
                        "name":"织金县"
                    },
                    {
                        "name":"金沙县"
                    },
                    {
                        "name":"赫章县"
                    },
                    {
                        "name":"纳雍县"
                    },
                    {
                        "name":"威宁彝族回族苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黔西南布依族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"兴义市"
                    },
                    {
                        "name":"望谟县"
                    },
                    {
                        "name":"兴仁县"
                    },
                    {
                        "name":"普安县"
                    },
                    {
                        "name":"册亨县"
                    },
                    {
                        "name":"晴隆县"
                    },
                    {
                        "name":"贞丰县"
                    },
                    {
                        "name":"安龙县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黔东南苗族侗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"凯里市"
                    },
                    {
                        "name":"施秉县"
                    },
                    {
                        "name":"从江县"
                    },
                    {
                        "name":"锦屏县"
                    },
                    {
                        "name":"镇远县"
                    },
                    {
                        "name":"麻江县"
                    },
                    {
                        "name":"台江县"
                    },
                    {
                        "name":"天柱县"
                    },
                    {
                        "name":"黄平县"
                    },
                    {
                        "name":"榕江县"
                    },
                    {
                        "name":"剑河县"
                    },
                    {
                        "name":"三穗县"
                    },
                    {
                        "name":"雷山县"
                    },
                    {
                        "name":"黎平县"
                    },
                    {
                        "name":"岑巩县"
                    },
                    {
                        "name":"丹寨县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黔南布依族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"都匀市"
                    },
                    {
                        "name":"福泉市"
                    },
                    {
                        "name":"贵定县"
                    },
                    {
                        "name":"惠水县"
                    },
                    {
                        "name":"罗甸县"
                    },
                    {
                        "name":"瓮安县"
                    },
                    {
                        "name":"荔波县"
                    },
                    {
                        "name":"龙里县"
                    },
                    {
                        "name":"平塘县"
                    },
                    {
                        "name":"长顺县"
                    },
                    {
                        "name":"独山县"
                    },
                    {
                        "name":"三都水族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"云南",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"昆明",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"盘龙区"
                    },
                    {
                        "name":"五华区"
                    },
                    {
                        "name":"官渡区"
                    },
                    {
                        "name":"西山区"
                    },
                    {
                        "name":"东川区"
                    },
                    {
                        "name":"安宁市"
                    },
                    {
                        "name":"呈贡县"
                    },
                    {
                        "name":"晋宁县"
                    },
                    {
                        "name":"富民县"
                    },
                    {
                        "name":"宜良县"
                    },
                    {
                        "name":"嵩明县"
                    },
                    {
                        "name":"石林彝族自治县"
                    },
                    {
                        "name":"禄劝彝族苗族自治县"
                    },
                    {
                        "name":"寻甸回族彝族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"曲靖",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"麒麟区"
                    },
                    {
                        "name":"宣威市"
                    },
                    {
                        "name":"马龙县"
                    },
                    {
                        "name":"沾益县"
                    },
                    {
                        "name":"富源县"
                    },
                    {
                        "name":"罗平县"
                    },
                    {
                        "name":"师宗县"
                    },
                    {
                        "name":"陆良县"
                    },
                    {
                        "name":"会泽县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"玉溪",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"红塔区"
                    },
                    {
                        "name":"江川县"
                    },
                    {
                        "name":"澄江县"
                    },
                    {
                        "name":"通海县"
                    },
                    {
                        "name":"华宁县"
                    },
                    {
                        "name":"易门县"
                    },
                    {
                        "name":"峨山彝族自治县"
                    },
                    {
                        "name":"新平彝族傣族自治县"
                    },
                    {
                        "name":"元江哈尼族彝族傣族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"保山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"隆阳区"
                    },
                    {
                        "name":"施甸县"
                    },
                    {
                        "name":"腾冲县"
                    },
                    {
                        "name":"龙陵县"
                    },
                    {
                        "name":"昌宁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"昭通",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"昭阳区"
                    },
                    {
                        "name":"鲁甸县"
                    },
                    {
                        "name":"巧家县"
                    },
                    {
                        "name":"盐津县"
                    },
                    {
                        "name":"大关县"
                    },
                    {
                        "name":"永善县"
                    },
                    {
                        "name":"绥江县"
                    },
                    {
                        "name":"镇雄县"
                    },
                    {
                        "name":"彝良县"
                    },
                    {
                        "name":"威信县"
                    },
                    {
                        "name":"水富县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"丽江",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"古城区"
                    },
                    {
                        "name":"永胜县"
                    },
                    {
                        "name":"华坪县"
                    },
                    {
                        "name":"玉龙纳西族自治县"
                    },
                    {
                        "name":"宁蒗彝族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"普洱",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"思茅区"
                    },
                    {
                        "name":"普洱哈尼族彝族自治县"
                    },
                    {
                        "name":"墨江哈尼族自治县"
                    },
                    {
                        "name":"景东彝族自治县"
                    },
                    {
                        "name":"景谷傣族彝族自治县"
                    },
                    {
                        "name":"镇沅彝族哈尼族拉祜族自治县"
                    },
                    {
                        "name":"江城哈尼族彝族自治县"
                    },
                    {
                        "name":"孟连傣族拉祜族佤族自治县"
                    },
                    {
                        "name":"澜沧拉祜族自治县"
                    },
                    {
                        "name":"西盟佤族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"临沧",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"临翔区"
                    },
                    {
                        "name":"凤庆县"
                    },
                    {
                        "name":"云县"
                    },
                    {
                        "name":"永德县"
                    },
                    {
                        "name":"镇康县"
                    },
                    {
                        "name":"双江拉祜族佤族布朗族傣族自治县"
                    },
                    {
                        "name":"耿马傣族佤族自治县"
                    },
                    {
                        "name":"沧源佤族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"德宏傣族景颇族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"潞西市"
                    },
                    {
                        "name":"瑞丽市"
                    },
                    {
                        "name":"梁河县"
                    },
                    {
                        "name":"盈江县"
                    },
                    {
                        "name":"陇川县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"怒江傈僳族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"泸水县"
                    },
                    {
                        "name":"福贡县"
                    },
                    {
                        "name":"贡山独龙族怒族自治县"
                    },
                    {
                        "name":"兰坪白族普米族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"迪庆藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"香格里拉县"
                    },
                    {
                        "name":"德钦县"
                    },
                    {
                        "name":"维西傈僳族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"大理白族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"大理市"
                    },
                    {
                        "name":"祥云县"
                    },
                    {
                        "name":"宾川县"
                    },
                    {
                        "name":"弥渡县"
                    },
                    {
                        "name":"永平县"
                    },
                    {
                        "name":"云龙县"
                    },
                    {
                        "name":"洱源县"
                    },
                    {
                        "name":"剑川县"
                    },
                    {
                        "name":"鹤庆县"
                    },
                    {
                        "name":"漾濞彝族自治县"
                    },
                    {
                        "name":"南涧彝族自治县"
                    },
                    {
                        "name":"巍山彝族回族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"楚雄彝族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"楚雄市"
                    },
                    {
                        "name":"双柏县"
                    },
                    {
                        "name":"牟定县"
                    },
                    {
                        "name":"南华县"
                    },
                    {
                        "name":"姚安县"
                    },
                    {
                        "name":"大姚县"
                    },
                    {
                        "name":"永仁县"
                    },
                    {
                        "name":"元谋县"
                    },
                    {
                        "name":"武定县"
                    },
                    {
                        "name":"禄丰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"红河哈尼族彝族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"蒙自县"
                    },
                    {
                        "name":"个旧市"
                    },
                    {
                        "name":"开远市"
                    },
                    {
                        "name":"绿春县"
                    },
                    {
                        "name":"建水县"
                    },
                    {
                        "name":"石屏县"
                    },
                    {
                        "name":"弥勒县"
                    },
                    {
                        "name":"泸西县"
                    },
                    {
                        "name":"元阳县"
                    },
                    {
                        "name":"红河县"
                    },
                    {
                        "name":"金平苗族瑶族傣族自治县"
                    },
                    {
                        "name":"河口瑶族自治县"
                    },
                    {
                        "name":"屏边苗族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"文山壮族苗族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"文山县"
                    },
                    {
                        "name":"砚山县"
                    },
                    {
                        "name":"西畴县"
                    },
                    {
                        "name":"麻栗坡县"
                    },
                    {
                        "name":"马关县"
                    },
                    {
                        "name":"丘北县"
                    },
                    {
                        "name":"广南县"
                    },
                    {
                        "name":"富宁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"西双版纳傣族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"景洪市"
                    },
                    {
                        "name":"勐海县"
                    },
                    {
                        "name":"勐腊县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"西藏",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"拉萨",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城关区"
                    },
                    {
                        "name":"林周县"
                    },
                    {
                        "name":"当雄县"
                    },
                    {
                        "name":"尼木县"
                    },
                    {
                        "name":"曲水县"
                    },
                    {
                        "name":"堆龙德庆县"
                    },
                    {
                        "name":"达孜县"
                    },
                    {
                        "name":"墨竹工卡县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"那曲地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"那曲县"
                    },
                    {
                        "name":"嘉黎县"
                    },
                    {
                        "name":"比如县"
                    },
                    {
                        "name":"聂荣县"
                    },
                    {
                        "name":"安多县"
                    },
                    {
                        "name":"申扎县"
                    },
                    {
                        "name":"索县"
                    },
                    {
                        "name":"班戈县"
                    },
                    {
                        "name":"巴青县"
                    },
                    {
                        "name":"尼玛县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"昌都地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"昌都县"
                    },
                    {
                        "name":"江达县"
                    },
                    {
                        "name":"贡觉县"
                    },
                    {
                        "name":"类乌齐县"
                    },
                    {
                        "name":"丁青县"
                    },
                    {
                        "name":"察雅县"
                    },
                    {
                        "name":"八宿县"
                    },
                    {
                        "name":"左贡县"
                    },
                    {
                        "name":"芒康县"
                    },
                    {
                        "name":"洛隆县"
                    },
                    {
                        "name":"边坝县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"林芝地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"林芝县"
                    },
                    {
                        "name":"工布江达县"
                    },
                    {
                        "name":"米林县"
                    },
                    {
                        "name":"墨脱县"
                    },
                    {
                        "name":"波密县"
                    },
                    {
                        "name":"察隅县"
                    },
                    {
                        "name":"朗县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"山南地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"乃东县"
                    },
                    {
                        "name":"扎囊县"
                    },
                    {
                        "name":"贡嘎县"
                    },
                    {
                        "name":"桑日县"
                    },
                    {
                        "name":"琼结县"
                    },
                    {
                        "name":"曲松县"
                    },
                    {
                        "name":"措美县"
                    },
                    {
                        "name":"洛扎县"
                    },
                    {
                        "name":"加查县"
                    },
                    {
                        "name":"隆子县"
                    },
                    {
                        "name":"错那县"
                    },
                    {
                        "name":"浪卡子县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"日喀则地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"日喀则市"
                    },
                    {
                        "name":"南木林县"
                    },
                    {
                        "name":"江孜县"
                    },
                    {
                        "name":"定日县"
                    },
                    {
                        "name":"萨迦县"
                    },
                    {
                        "name":"拉孜县"
                    },
                    {
                        "name":"昂仁县"
                    },
                    {
                        "name":"谢通门县"
                    },
                    {
                        "name":"白朗县"
                    },
                    {
                        "name":"仁布县"
                    },
                    {
                        "name":"康马县"
                    },
                    {
                        "name":"定结县"
                    },
                    {
                        "name":"仲巴县"
                    },
                    {
                        "name":"亚东县"
                    },
                    {
                        "name":"吉隆县"
                    },
                    {
                        "name":"聂拉木县"
                    },
                    {
                        "name":"萨嘎县"
                    },
                    {
                        "name":"岗巴县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阿里地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"噶尔县"
                    },
                    {
                        "name":"普兰县"
                    },
                    {
                        "name":"札达县"
                    },
                    {
                        "name":"日土县"
                    },
                    {
                        "name":"革吉县"
                    },
                    {
                        "name":"改则县"
                    },
                    {
                        "name":"措勤县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"海南",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"海口",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"龙华区"
                    },
                    {
                        "name":"秀英区"
                    },
                    {
                        "name":"琼山区"
                    },
                    {
                        "name":"美兰区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"三亚",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"三亚市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"五指山",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"琼海",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"儋州",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"文昌",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"万宁",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"东方",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"澄迈县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"定安县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"屯昌县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"临高县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"白沙黎族自治县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"昌江黎族自治县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"乐东黎族自治县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"陵水黎族自治县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"保亭黎族苗族自治县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"琼中黎族苗族自治县",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"甘肃",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"兰州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城关区"
                    },
                    {
                        "name":"七里河区"
                    },
                    {
                        "name":"西固区"
                    },
                    {
                        "name":"安宁区"
                    },
                    {
                        "name":"红古区"
                    },
                    {
                        "name":"永登县"
                    },
                    {
                        "name":"皋兰县"
                    },
                    {
                        "name":"榆中县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"嘉峪关",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"嘉峪关市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"金昌",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"金川区"
                    },
                    {
                        "name":"永昌县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"白银",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"白银区"
                    },
                    {
                        "name":"平川区"
                    },
                    {
                        "name":"靖远县"
                    },
                    {
                        "name":"会宁县"
                    },
                    {
                        "name":"景泰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"天水",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"清水县"
                    },
                    {
                        "name":"秦安县"
                    },
                    {
                        "name":"甘谷县"
                    },
                    {
                        "name":"武山县"
                    },
                    {
                        "name":"张家川回族自治县"
                    },
                    {
                        "name":"北道区"
                    },
                    {
                        "name":"秦城区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"武威",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"凉州区"
                    },
                    {
                        "name":"民勤县"
                    },
                    {
                        "name":"古浪县"
                    },
                    {
                        "name":"天祝藏族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"酒泉",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"肃州区"
                    },
                    {
                        "name":"玉门市"
                    },
                    {
                        "name":"敦煌市"
                    },
                    {
                        "name":"金塔县"
                    },
                    {
                        "name":"肃北蒙古族自治县"
                    },
                    {
                        "name":"阿克塞哈萨克族自治县"
                    },
                    {
                        "name":"安西县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"张掖",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"甘州区"
                    },
                    {
                        "name":"民乐县"
                    },
                    {
                        "name":"临泽县"
                    },
                    {
                        "name":"高台县"
                    },
                    {
                        "name":"山丹县"
                    },
                    {
                        "name":"肃南裕固族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"庆阳",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"西峰区"
                    },
                    {
                        "name":"庆城县"
                    },
                    {
                        "name":"环县"
                    },
                    {
                        "name":"华池县"
                    },
                    {
                        "name":"合水县"
                    },
                    {
                        "name":"正宁县"
                    },
                    {
                        "name":"宁县"
                    },
                    {
                        "name":"镇原县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"平凉",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"崆峒区"
                    },
                    {
                        "name":"泾川县"
                    },
                    {
                        "name":"灵台县"
                    },
                    {
                        "name":"崇信县"
                    },
                    {
                        "name":"华亭县"
                    },
                    {
                        "name":"庄浪县"
                    },
                    {
                        "name":"静宁县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"定西",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"安定区"
                    },
                    {
                        "name":"通渭县"
                    },
                    {
                        "name":"临洮县"
                    },
                    {
                        "name":"漳县"
                    },
                    {
                        "name":"岷县"
                    },
                    {
                        "name":"渭源县"
                    },
                    {
                        "name":"陇西县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"陇南",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"武都区"
                    },
                    {
                        "name":"成县"
                    },
                    {
                        "name":"宕昌县"
                    },
                    {
                        "name":"康县"
                    },
                    {
                        "name":"文县"
                    },
                    {
                        "name":"西和县"
                    },
                    {
                        "name":"礼县"
                    },
                    {
                        "name":"两当县"
                    },
                    {
                        "name":"徽县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"临夏回族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"临夏市"
                    },
                    {
                        "name":"临夏县"
                    },
                    {
                        "name":"康乐县"
                    },
                    {
                        "name":"永靖县"
                    },
                    {
                        "name":"广河县"
                    },
                    {
                        "name":"和政县"
                    },
                    {
                        "name":"东乡族自治县"
                    },
                    {
                        "name":"积石山保安族东乡族撒拉族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"甘南藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"合作市"
                    },
                    {
                        "name":"临潭县"
                    },
                    {
                        "name":"卓尼县"
                    },
                    {
                        "name":"舟曲县"
                    },
                    {
                        "name":"迭部县"
                    },
                    {
                        "name":"玛曲县"
                    },
                    {
                        "name":"碌曲县"
                    },
                    {
                        "name":"夏河县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"宁夏",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"银川",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"兴庆区"
                    },
                    {
                        "name":"西夏区"
                    },
                    {
                        "name":"金凤区"
                    },
                    {
                        "name":"灵武市"
                    },
                    {
                        "name":"永宁县"
                    },
                    {
                        "name":"贺兰县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"石嘴山",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"大武口区"
                    },
                    {
                        "name":"惠农区"
                    },
                    {
                        "name":"平罗县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"吴忠",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"利通区"
                    },
                    {
                        "name":"青铜峡市"
                    },
                    {
                        "name":"盐池县"
                    },
                    {
                        "name":"同心县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"固原",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"原州区"
                    },
                    {
                        "name":"西吉县"
                    },
                    {
                        "name":"隆德县"
                    },
                    {
                        "name":"泾源县"
                    },
                    {
                        "name":"彭阳县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"中卫",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"沙坡头区"
                    },
                    {
                        "name":"中宁县"
                    },
                    {
                        "name":"海原县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"青海",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"西宁",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"城中区"
                    },
                    {
                        "name":"城东区"
                    },
                    {
                        "name":"城西区"
                    },
                    {
                        "name":"城北区"
                    },
                    {
                        "name":"湟源县"
                    },
                    {
                        "name":"湟中县"
                    },
                    {
                        "name":"大通回族土族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"海东地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"平安县"
                    },
                    {
                        "name":"乐都县"
                    },
                    {
                        "name":"民和回族土族自治县"
                    },
                    {
                        "name":"互助土族自治县"
                    },
                    {
                        "name":"化隆回族自治县"
                    },
                    {
                        "name":"循化撒拉族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"海北藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"海晏县"
                    },
                    {
                        "name":"祁连县"
                    },
                    {
                        "name":"刚察县"
                    },
                    {
                        "name":"门源回族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"海南藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"共和县"
                    },
                    {
                        "name":"同德县"
                    },
                    {
                        "name":"贵德县"
                    },
                    {
                        "name":"兴海县"
                    },
                    {
                        "name":"贵南县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"黄南藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"同仁县"
                    },
                    {
                        "name":"尖扎县"
                    },
                    {
                        "name":"泽库县"
                    },
                    {
                        "name":"河南蒙古族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"果洛藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"玛沁县"
                    },
                    {
                        "name":"班玛县"
                    },
                    {
                        "name":"甘德县"
                    },
                    {
                        "name":"达日县"
                    },
                    {
                        "name":"久治县"
                    },
                    {
                        "name":"玛多县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"玉树藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"玉树县"
                    },
                    {
                        "name":"杂多县"
                    },
                    {
                        "name":"称多县"
                    },
                    {
                        "name":"治多县"
                    },
                    {
                        "name":"囊谦县"
                    },
                    {
                        "name":"曲麻莱县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"海西蒙古族藏族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"德令哈市"
                    },
                    {
                        "name":"格尔木市"
                    },
                    {
                        "name":"乌兰县"
                    },
                    {
                        "name":"都兰县"
                    },
                    {
                        "name":"天峻县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"新疆",
        "sub":[
            {
                "name":"请选择",
                "sub":[

                ]
            },
            {
                "name":"乌鲁木齐",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"天山区"
                    },
                    {
                        "name":"沙依巴克区"
                    },
                    {
                        "name":"新市区"
                    },
                    {
                        "name":"水磨沟区"
                    },
                    {
                        "name":"头屯河区"
                    },
                    {
                        "name":"达坂城区"
                    },
                    {
                        "name":"东山区"
                    },
                    {
                        "name":"乌鲁木齐县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"克拉玛依",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"克拉玛依区"
                    },
                    {
                        "name":"独山子区"
                    },
                    {
                        "name":"白碱滩区"
                    },
                    {
                        "name":"乌尔禾区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"吐鲁番地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"吐鲁番市"
                    },
                    {
                        "name":"托克逊县"
                    },
                    {
                        "name":"鄯善县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"哈密地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"哈密市"
                    },
                    {
                        "name":"伊吾县"
                    },
                    {
                        "name":"巴里坤哈萨克自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"和田地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"和田市"
                    },
                    {
                        "name":"和田县"
                    },
                    {
                        "name":"洛浦县"
                    },
                    {
                        "name":"民丰县"
                    },
                    {
                        "name":"皮山县"
                    },
                    {
                        "name":"策勒县"
                    },
                    {
                        "name":"于田县"
                    },
                    {
                        "name":"墨玉县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"阿克苏地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"阿克苏市"
                    },
                    {
                        "name":"温宿县"
                    },
                    {
                        "name":"沙雅县"
                    },
                    {
                        "name":"拜城县"
                    },
                    {
                        "name":"阿瓦提县"
                    },
                    {
                        "name":"库车县"
                    },
                    {
                        "name":"柯坪县"
                    },
                    {
                        "name":"新和县"
                    },
                    {
                        "name":"乌什县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"喀什地区",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"喀什市"
                    },
                    {
                        "name":"巴楚县"
                    },
                    {
                        "name":"泽普县"
                    },
                    {
                        "name":"伽师县"
                    },
                    {
                        "name":"叶城县"
                    },
                    {
                        "name":"岳普湖县"
                    },
                    {
                        "name":"疏勒县"
                    },
                    {
                        "name":"麦盖提县"
                    },
                    {
                        "name":"英吉沙县"
                    },
                    {
                        "name":"莎车县"
                    },
                    {
                        "name":"疏附县"
                    },
                    {
                        "name":"塔什库尔干塔吉克自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"克孜勒苏柯尔克孜自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"阿图什市"
                    },
                    {
                        "name":"阿合奇县"
                    },
                    {
                        "name":"乌恰县"
                    },
                    {
                        "name":"阿克陶县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"巴音郭楞蒙古自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"库尔勒市"
                    },
                    {
                        "name":"和静县"
                    },
                    {
                        "name":"尉犁县"
                    },
                    {
                        "name":"和硕县"
                    },
                    {
                        "name":"且末县"
                    },
                    {
                        "name":"博湖县"
                    },
                    {
                        "name":"轮台县"
                    },
                    {
                        "name":"若羌县"
                    },
                    {
                        "name":"焉耆回族自治县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"昌吉回族自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"昌吉市"
                    },
                    {
                        "name":"阜康市"
                    },
                    {
                        "name":"奇台县"
                    },
                    {
                        "name":"玛纳斯县"
                    },
                    {
                        "name":"吉木萨尔县"
                    },
                    {
                        "name":"呼图壁县"
                    },
                    {
                        "name":"木垒哈萨克自治县"
                    },
                    {
                        "name":"米泉市"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"博尔塔拉蒙古自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"博乐市"
                    },
                    {
                        "name":"精河县"
                    },
                    {
                        "name":"温泉县"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"石河子",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"阿拉尔",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"图木舒克",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"五家渠",
                "sub":[

                ],
                "type":0
            },
            {
                "name":"伊犁哈萨克自治州",
                "sub":[
                    {
                        "name":"请选择"
                    },
                    {
                        "name":"伊宁市"
                    },
                    {
                        "name":"奎屯市"
                    },
                    {
                        "name":"伊宁县"
                    },
                    {
                        "name":"特克斯县"
                    },
                    {
                        "name":"尼勒克县"
                    },
                    {
                        "name":"昭苏县"
                    },
                    {
                        "name":"新源县"
                    },
                    {
                        "name":"霍城县"
                    },
                    {
                        "name":"巩留县"
                    },
                    {
                        "name":"察布查尔锡伯自治县"
                    },
                    {
                        "name":"塔城地区"
                    },
                    {
                        "name":"阿勒泰地区"
                    },
                    {
                        "name":"其他"
                    }
                ],
                "type":0
            },
            {
                "name":"其他"
            }
        ],
        "type":1
    },
    {
        "name":"香港",
        "sub":[
            {
                "name":"请选择"
            },
            {
                "name":"中西区"
            },
            {
                "name":"湾仔区"
            },
            {
                "name":"东区"
            },
            {
                "name":"南区"
            },
            {
                "name":"深水埗区"
            },
            {
                "name":"油尖旺区"
            },
            {
                "name":"九龙城区"
            },
            {
                "name":"黄大仙区"
            },
            {
                "name":"观塘区"
            },
            {
                "name":"北区"
            },
            {
                "name":"大埔区"
            },
            {
                "name":"沙田区"
            },
            {
                "name":"西贡区"
            },
            {
                "name":"元朗区"
            },
            {
                "name":"屯门区"
            },
            {
                "name":"荃湾区"
            },
            {
                "name":"葵青区"
            },
            {
                "name":"离岛区"
            },
            {
                "name":"其他"
            }
        ],
        "type":0
    },
    {
        "name":"澳门",
        "sub":[
            {
                "name":"请选择"
            },
            {
                "name":"花地玛堂区"
            },
            {
                "name":"圣安多尼堂区"
            },
            {
                "name":"大堂区"
            },
            {
                "name":"望德堂区"
            },
            {
                "name":"风顺堂区"
            },
            {
                "name":"嘉模堂区"
            },
            {
                "name":"圣方济各堂区"
            },
            {
                "name":"路凼"
            },
            {
                "name":"其他"
            }
        ],
        "type":0
    },
    {
        "name":"台湾",
        "sub":[
            {
                "name":"请选择"
            },
            {
                "name":"台北市"
            },
            {
                "name":"高雄市"
            },
            {
                "name":"台北县"
            },
            {
                "name":"桃园县"
            },
            {
                "name":"新竹县"
            },
            {
                "name":"苗栗县"
            },
            {
                "name":"台中县"
            },
            {
                "name":"彰化县"
            },
            {
                "name":"南投县"
            },
            {
                "name":"云林县"
            },
            {
                "name":"嘉义县"
            },
            {
                "name":"台南县"
            },
            {
                "name":"高雄县"
            },
            {
                "name":"屏东县"
            },
            {
                "name":"宜兰县"
            },
            {
                "name":"花莲县"
            },
            {
                "name":"台东县"
            },
            {
                "name":"澎湖县"
            },
            {
                "name":"基隆市"
            },
            {
                "name":"新竹市"
            },
            {
                "name":"台中市"
            },
            {
                "name":"嘉义市"
            },
            {
                "name":"台南市"
            },
            {
                "name":"其他"
            }
        ],
        "type":0
    },
    {
        "name":"海外",
        "sub":[
            {
                "name":"请选择"
            },
            {
                "name":"其他"
            }
        ],
        "type":0
    }
];

}($);
// jshint ignore: end

/* global $:true */
/* jshint unused:false*/

+ function($) {
  "use strict";


  var defaults;
  
  $.fn.cityPicker = function(params) {
    params = $.extend({}, defaults, params);
    return this.each(function() {

      var format = function(data) {
        var result = [];
        for(var i=0;i<data.length;i++) {
          var d = data[i];
          if(d.name === "请选择") continue;
          result.push(d.name);
        }
        if(result.length) return result;
        return [""];
      };

      var sub = function(data) {
        if(!data.sub) return [""];
        return format(data.sub);
      };

      var getCities = function(d) {
        for(var i=0;i< raw.length;i++) {
          if(raw[i].name === d) return sub(raw[i]);
        }
        return [""];
      };

      var getDistricts = function(p, c) {
        for(var i=0;i< raw.length;i++) {
          if(raw[i].name === p) {
            for(var j=0;j< raw[i].sub.length;j++) {
              if(raw[i].sub[j].name === c) {
                return sub(raw[i].sub[j]);
              }
            }
          }
        }
        return [""];
      };

      var raw = $.rawCitiesData;
      var provinces = raw.map(function(d) {
        return d.name;
      });
      var initCities = sub(raw[0]);
      var initDistricts = sub(raw[0].sub[0]);

      var currentProvince = provinces[0];
      var currentCity = initCities[0];
      var currentDistrict = initDistricts[0];

      var cols = [
          {
            values: provinces,
            cssClass: "col-province"
          },
          {
            values: initCities,
            cssClass: "col-city"
          }
        ];

        if(params.showDistrict) cols.push({
          values: initDistricts,
          cssClass: "col-district"
        });

      var config = {

        cssClass: "city-picker",
        rotateEffect: false,  //为了性能

        onChange: function (picker, values, displayValues) {
          var newProvince = picker.cols[0].value;
          var newCity;
          if(newProvince !== currentProvince) {
            var newCities = getCities(newProvince);
            newCity = newCities[0];
            var newDistricts = getDistricts(newProvince, newCity);
            picker.cols[1].replaceValues(newCities);
            if(params.showDistrict) picker.cols[2].replaceValues(newDistricts);
            currentProvince = newProvince;
            currentCity = newCity;
            picker.updateValue();
            return;
          }
          if(params.showDistrict) {
            newCity = picker.cols[1].value;
            if(newCity !== currentCity) {
              picker.cols[2].replaceValues(getDistricts(newProvince, newCity));
              currentCity = newCity;
              picker.updateValue();
            }
          }
        },

        cols: cols
      };

      if(!this) return;
      var p = $.extend(config, params);
      //计算value
      var val = $(this).val();
      if(val) {
        p.value = val.split(" ");
        if(p.value[0]) {
          currentProvince = p.value[0];
          p.cols[1].values = getCities(p.value[0]);
        }

        if(p.value[1]) {
          currentCity = p.value[1];
          params.showDistrict && (p.cols[2].values = getDistricts(p.value[0], p.value[1]));
        } else {
          currentDistrict = p.value[2];
          params.showDistrict && (p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]));
        }
      }
      $(this).picker(p);
    });
  };

  defaults = $.fn.cityPicker.prototype.defaults = {
    showDistrict: true //是否显示地区选择
  };

}($);

/**
 * Created by root on 16-8-18.
 */
//$(document).ready(function(){
//    $("#friendPage").click(function(){
//        $(this).siblings("ul").toggle();
//    });
//});
$(document).on("click", "#equipPage", function() {
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
            }
        ]
    });
});

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
                    var tg = "/equip/delete";
                    var url = "http://"+dm+tg;
                    window.location.href=url;
                }
            }
        ]
    });
});

/**
 * Created by root on 16-8-18.
 */
$(document).ready(function(){
    $("li div#friendHandle").change(function(){
        //alert(1);
        var value = $(this).find('option:selected').val();
        if(value == -1) {
            $(this).siblings("div.handleAgree").css('display','none');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','none');
            $(this).siblings("div.handleIgnore").css('display','none');
        }
        if(value == 1) {
            $(this).siblings("div.handleAgree").css('display','block');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','none');
            $(this).siblings("div.handleIgnore").css('display','none');
        }
        if(value == 0) {
            $(this).siblings("div.handleAgree").css('display','none');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','block');
            $(this).siblings("div.handleIgnore").css('display','none');
        }
        if(value == 3) {
            $(this).siblings("div.handleAgree").css('display','none');//jquery样式改变
            $(this).siblings("div.handleDeny").css('display','none');
            $(this).siblings("div.handleIgnore").css('display','block');
        }
    });
});

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
            }
        ]
    });
});

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
                    var id = $("#groupDetailPage").attr('alt');
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
                    var id = $("#groupDetailPage").attr('alt');
                    var tg = "/equipGroup/group/"+id+"/deleteEquip";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            }
        ]
    });
});

/**
 * Created by root on 16-8-18.
 */
//$(document).ready(function(){
//    $("#friendPage").click(function(){
//        $(this).siblings("ul").toggle();
//    });
//});
$(document).on("click", "#quickPage", function() {
    $.actions({
        title: "选择操作",
        onClose: function() {
            console.log("close");
        },
        actions: [
            {
                text: "添加设备分组",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var tg = "/equipGroup/add";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            },
            {
                text: "删除分组",
                className: "color-primary",
                onClick: function() {
                    //$.alert("你选择了“编辑”");
                    var dm = window.location.host;
                    var tg = "/equipGroup/delete";
                    var url = "http://"+dm+tg;
                    window.location.href=url;

                }
            }
        ]
    });
});

/**
 * Created by root on 16-8-4.
 */
$(function(){
    $("a#singleSwitch").click(function(){
        //alert($(this).find("input[name=status]").val());
        //$.post(
        //    $(this).find('input[name=url]').val(),
        //    {
        //        _token:$(this).find("input[name=_token]").val(),
        //        equip_id:$(this).find("input[name=equip_id]").val(),
        //        status:$(this).find("input[name=status]").val()
        //        //group_id:$(this).find("input[name=group_id]").val()
        //    },
        //    function(data){
        //        window.location.reload();
        //    }
        //);

        $.ajax({
            type:'post',
            url:$(this).find('input[name=url]').val(),
            data:{ _token:$(this).find("input[name=_token]").val(),
                equip_id:$(this).find("input[name=equip_id]").val(),
                status:$(this).find("input[name=status]").val()},
            dataType:'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success:function(data){
                window.location.reload();

            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        });
    });
});
/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
(function () {
    'use strict';
    var $;
    /*===========================
    Swiper
    ===========================*/
    var Swiper = function (container, params) {
        if (!(this instanceof Swiper)) return new Swiper(container, params);

        var defaults = {
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            // autoplay
            autoplay: false,
            autoplayDisableOnInteraction: true,
            autoplayStopOnLast: false,
            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
            iOSEdgeSwipeDetection: false,
            iOSEdgeSwipeThreshold: 20,
            // Free mode
            freeMode: false,
            freeModeMomentum: true,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: true,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: false,
            freeModeMinimumVelocity: 0.02,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            flip: {
                slideShadows : true,
                limitRotation: true
            },
            cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            fade: {
                crossFade: false
            },
            // Parallax
            parallax: false,
            // Scrollbar
            scrollbar: null,
            scrollbarHide: true,
            scrollbarDraggable: false,
            scrollbarSnapOnRelease: false,
            // Keyboard Mousewheel
            keyboardControl: false,
            mousewheelControl: false,
            mousewheelReleaseOnEdges: false,
            mousewheelInvert: false,
            mousewheelForceToAxis: false,
            mousewheelSensitivity: 1,
            // Hash Navigation
            hashnav: false,
            // Breakpoints
            breakpoints: undefined,
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0, // in px
            slidesOffsetAfter: 0, // in px
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            onlyExternal: false,
            threshold: 0,
            touchMoveStopPropagation: true,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Pagination
            pagination: null,
            paginationElement: 'span',
            paginationClickable: false,
            paginationHide: false,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Next/prev buttons
            nextButton: null,
            prevButton: null,
            // Progress
            watchSlidesProgress: false,
            watchSlidesVisibility: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Lazy Loading
            lazyLoading: false,
            lazyLoadingInPrevNext: false,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            // Control
            control: undefined,
            controlInverse: false,
            controlBy: 'slide', //or 'container'
            // Swiping/no swiping
            allowSwipeToPrev: true,
            allowSwipeToNext: true,
            swipeHandler: null, //'.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            // NS
            slideClass: 'swiper-slide',
            slideActiveClass: 'swiper-slide-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slidePrevClass: 'swiper-slide-prev',
            wrapperClass: 'swiper-wrapper',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            buttonDisabledClass: 'swiper-button-disabled',
            paginationCurrentClass: 'swiper-pagination-current',
            paginationTotalClass: 'swiper-pagination-total',
            paginationHiddenClass: 'swiper-pagination-hidden',
            paginationProgressbarClass: 'swiper-pagination-progressbar',
            // Observer
            observer: false,
            observeParents: false,
            // Accessibility
            a11y: false,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            // Callbacks
            runCallbacksOnInit: true
            /*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            */
        
        };
        var initialVirtualTranslate = params && params.virtualTranslate;
        
        params = params || {};
        var originalParams = {};
        for (var param in params) {
            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
                originalParams[param] = {};
                for (var deepParam in params[param]) {
                    originalParams[param][deepParam] = params[param][deepParam];
                }
            }
            else {
                originalParams[param] = params[param];
            }
        }
        for (var def in defaults) {
            if (typeof params[def] === 'undefined') {
                params[def] = defaults[def];
            }
            else if (typeof params[def] === 'object') {
                for (var deepDef in defaults[def]) {
                    if (typeof params[def][deepDef] === 'undefined') {
                        params[def][deepDef] = defaults[def][deepDef];
                    }
                }
            }
        }
        
        // Swiper
        var s = this;
        
        // Params
        s.params = params;
        s.originalParams = originalParams;
        
        // Classname
        s.classNames = [];
        /*=========================
          Dom Library and plugins
          ===========================*/
        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
            $ = Dom7;
        }
        if (typeof $ === 'undefined') {
            if (typeof Dom7 === 'undefined') {
                $ = window.Dom7 || window.Zepto || window.jQuery;
            }
            else {
                $ = Dom7;
            }
            if (!$) return;
        }
        // Export it to Swiper instance
        s.$ = $;
        
        /*=========================
          Breakpoints
          ===========================*/
        s.currentBreakpoint = undefined;
        s.getActiveBreakpoint = function () {
            //Get breakpoint for window width
            if (!s.params.breakpoints) return false;
            var breakpoint = false;
            var points = [], point;
            for ( point in s.params.breakpoints ) {
                if (s.params.breakpoints.hasOwnProperty(point)) {
                    points.push(point);
                }
            }
            points.sort(function (a, b) {
                return parseInt(a, 10) > parseInt(b, 10);
            });
            for (var i = 0; i < points.length; i++) {
                point = points[i];
                if (point >= window.innerWidth && !breakpoint) {
                    breakpoint = point;
                }
            }
            return breakpoint || 'max';
        };
        s.setBreakpoint = function () {
            //Set breakpoint for window width and update parameters
            var breakpoint = s.getActiveBreakpoint();
            if (breakpoint && s.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
                for ( var param in breakPointsParams ) {
                    s.params[param] = breakPointsParams[param];
                }
                s.currentBreakpoint = breakpoint;
                if(needsReLoop && s.destroyLoop) {
                    s.reLoop(true);
                }
            }
        };
        // Set breakpoint on load
        if (s.params.breakpoints) {
            s.setBreakpoint();
        }
        
        /*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/
        s.container = $(container);
        if (s.container.length === 0) return;
        if (s.container.length > 1) {
            var swipers = [];
            s.container.each(function () {
                var container = this;
                swipers.push(new Swiper(this, params));
            });
            return swipers;
        }
        
        // Save instance in container HTML Element and in data
        s.container[0].swiper = s;
        s.container.data('swiper', s);
        
        s.classNames.push('swiper-container-' + s.params.direction);
        
        if (s.params.freeMode) {
            s.classNames.push('swiper-container-free-mode');
        }
        if (!s.support.flexbox) {
            s.classNames.push('swiper-container-no-flexbox');
            s.params.slidesPerColumn = 1;
        }
        if (s.params.autoHeight) {
            s.classNames.push('swiper-container-autoheight');
        }
        // Enable slides progress when required
        if (s.params.parallax || s.params.watchSlidesVisibility) {
            s.params.watchSlidesProgress = true;
        }
        // Coverflow / 3D
        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
            if (s.support.transforms3d) {
                s.params.watchSlidesProgress = true;
                s.classNames.push('swiper-container-3d');
            }
            else {
                s.params.effect = 'slide';
            }
        }
        if (s.params.effect !== 'slide') {
            s.classNames.push('swiper-container-' + s.params.effect);
        }
        if (s.params.effect === 'cube') {
            s.params.resistanceRatio = 0;
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.centeredSlides = false;
            s.params.spaceBetween = 0;
            s.params.virtualTranslate = true;
            s.params.setWrapperSize = false;
        }
        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
            s.params.slidesPerView = 1;
            s.params.slidesPerColumn = 1;
            s.params.slidesPerGroup = 1;
            s.params.watchSlidesProgress = true;
            s.params.spaceBetween = 0;
            s.params.setWrapperSize = false;
            if (typeof initialVirtualTranslate === 'undefined') {
                s.params.virtualTranslate = true;
            }
        }
        
        // Grab Cursor
        if (s.params.grabCursor && s.support.touch) {
            s.params.grabCursor = false;
        }
        
        // Wrapper
        s.wrapper = s.container.children('.' + s.params.wrapperClass);
        
        // Pagination
        if (s.params.pagination) {
            s.paginationContainer = $(s.params.pagination);
            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
                s.paginationContainer = s.container.find(s.params.pagination);
            }
        
            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
                s.paginationContainer.addClass('swiper-pagination-clickable');
            }
            else {
                s.params.paginationClickable = false;
            }
            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
        }
        // Next/Prev Buttons
        if (s.params.nextButton || s.params.prevButton) {
            if (s.params.nextButton) {
                s.nextButton = $(s.params.nextButton);
                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
                    s.nextButton = s.container.find(s.params.nextButton);
                }
            }
            if (s.params.prevButton) {
                s.prevButton = $(s.params.prevButton);
                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
                    s.prevButton = s.container.find(s.params.prevButton);
                }
            }
        }
        
        // Is Horizontal
        s.isHorizontal = function () {
            return s.params.direction === 'horizontal';
        };
        // s.isH = isH;
        
        // RTL
        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
        if (s.rtl) {
            s.classNames.push('swiper-container-rtl');
        }
        
        // Wrong RTL support
        if (s.rtl) {
            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
        }
        
        // Columns
        if (s.params.slidesPerColumn > 1) {
            s.classNames.push('swiper-container-multirow');
        }
        
        // Check for Android
        if (s.device.android) {
            s.classNames.push('swiper-container-android');
        }
        
        // Add classes
        s.container.addClass(s.classNames.join(' '));
        
        // Translate
        s.translate = 0;
        
        // Progress
        s.progress = 0;
        
        // Velocity
        s.velocity = 0;
        
        /*=========================
          Locks, unlocks
          ===========================*/
        s.lockSwipeToNext = function () {
            s.params.allowSwipeToNext = false;
        };
        s.lockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = false;
        };
        s.lockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
        };
        s.unlockSwipeToNext = function () {
            s.params.allowSwipeToNext = true;
        };
        s.unlockSwipeToPrev = function () {
            s.params.allowSwipeToPrev = true;
        };
        s.unlockSwipes = function () {
            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
        };
        
        /*=========================
          Round helper
          ===========================*/
        function round(a) {
            return Math.floor(a);
        }
        /*=========================
          Set grab cursor
          ===========================*/
        if (s.params.grabCursor) {
            s.container[0].style.cursor = 'move';
            s.container[0].style.cursor = '-webkit-grab';
            s.container[0].style.cursor = '-moz-grab';
            s.container[0].style.cursor = 'grab';
        }
        /*=========================
          Update on Images Ready
          ===========================*/
        s.imagesToLoad = [];
        s.imagesLoaded = 0;
        
        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
            var image;
            function onReady () {
                if (callback) callback();
            }
            if (!imgElement.complete || !checkForComplete) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (srcset) {
                        image.srcset = srcset;
                    }
                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
        
            } else {//image already loaded...
                onReady();
            }
        };
        s.preloadImages = function () {
            s.imagesToLoad = s.container.find('img');
            function _onReady() {
                if (typeof s === 'undefined' || s === null) return;
                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
                if (s.imagesLoaded === s.imagesToLoad.length) {
                    if (s.params.updateOnImagesReady) s.update();
                    s.emit('onImagesReady', s);
                }
            }
            for (var i = 0; i < s.imagesToLoad.length; i++) {
                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
            }
        };
        
        /*=========================
          Autoplay
          ===========================*/
        s.autoplayTimeoutId = undefined;
        s.autoplaying = false;
        s.autoplayPaused = false;
        function autoplay() {
            s.autoplayTimeoutId = setTimeout(function () {
                if (s.params.loop) {
                    s.fixLoop();
                    s._slideNext();
                    s.emit('onAutoplay', s);
                }
                else {
                    if (!s.isEnd) {
                        s._slideNext();
                        s.emit('onAutoplay', s);
                    }
                    else {
                        if (!params.autoplayStopOnLast) {
                            s._slideTo(0);
                            s.emit('onAutoplay', s);
                        }
                        else {
                            s.stopAutoplay();
                        }
                    }
                }
            }, s.params.autoplay);
        }
        s.startAutoplay = function () {
            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
            if (!s.params.autoplay) return false;
            if (s.autoplaying) return false;
            s.autoplaying = true;
            s.emit('onAutoplayStart', s);
            autoplay();
        };
        s.stopAutoplay = function (internal) {
            if (!s.autoplayTimeoutId) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplaying = false;
            s.autoplayTimeoutId = undefined;
            s.emit('onAutoplayStop', s);
        };
        s.pauseAutoplay = function (speed) {
            if (s.autoplayPaused) return;
            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
            s.autoplayPaused = true;
            if (speed === 0) {
                s.autoplayPaused = false;
                autoplay();
            }
            else {
                s.wrapper.transitionEnd(function () {
                    if (!s) return;
                    s.autoplayPaused = false;
                    if (!s.autoplaying) {
                        s.stopAutoplay();
                    }
                    else {
                        autoplay();
                    }
                });
            }
        };
        /*=========================
          Min/Max Translate
          ===========================*/
        s.minTranslate = function () {
            return (-s.snapGrid[0]);
        };
        s.maxTranslate = function () {
            return (-s.snapGrid[s.snapGrid.length - 1]);
        };
        /*=========================
          Slider/slides sizes
          ===========================*/
        s.updateAutoHeight = function () {
            // Update Height
            var slide = s.slides.eq(s.activeIndex)[0];
            if (typeof slide !== 'undefined') {
                var newHeight = slide.offsetHeight;
                if (newHeight) s.wrapper.css('height', newHeight + 'px');
            }
        };
        s.updateContainerSize = function () {
            var width, height;
            if (typeof s.params.width !== 'undefined') {
                width = s.params.width;
            }
            else {
                width = s.container[0].clientWidth;
            }
            if (typeof s.params.height !== 'undefined') {
                height = s.params.height;
            }
            else {
                height = s.container[0].clientHeight;
            }
            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
                return;
            }
        
            //Subtract paddings
            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
        
            // Store values
            s.width = width;
            s.height = height;
            s.size = s.isHorizontal() ? s.width : s.height;
        };
        
        s.updateSlidesSize = function () {
            s.slides = s.wrapper.children('.' + s.params.slideClass);
            s.snapGrid = [];
            s.slidesGrid = [];
            s.slidesSizesGrid = [];
        
            var spaceBetween = s.params.spaceBetween,
                slidePosition = -s.params.slidesOffsetBefore,
                i,
                prevSlideSize = 0,
                index = 0;
            if (typeof s.size === 'undefined') return;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
            }
        
            s.virtualSize = -spaceBetween;
            // reset margins
            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
            else s.slides.css({marginRight: '', marginBottom: ''});
        
            var slidesNumberEvenToRows;
            if (s.params.slidesPerColumn > 1) {
                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
                    slidesNumberEvenToRows = s.slides.length;
                }
                else {
                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
                }
                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
                }
            }
        
            // Calc slides
            var slideSize;
            var slidesPerColumn = s.params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
            for (i = 0; i < s.slides.length; i++) {
                slideSize = 0;
                var slide = s.slides.eq(i);
                if (s.params.slidesPerColumn > 1) {
                    // Set slides order
                    var newSlideOrderIndex;
                    var column, row;
                    if (s.params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - column * slidesPerColumn;
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
                            if (++row >= slidesPerColumn) {
                                row = 0;
                                column++;
                            }
                        }
                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                        slide
                            .css({
                                '-webkit-box-ordinal-group': newSlideOrderIndex,
                                '-moz-box-ordinal-group': newSlideOrderIndex,
                                '-ms-flex-order': newSlideOrderIndex,
                                '-webkit-order': newSlideOrderIndex,
                                'order': newSlideOrderIndex
                            });
                    }
                    else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - row * slidesPerRow;
                    }
                    slide
                        .css({
                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
                        })
                        .attr('data-swiper-column', column)
                        .attr('data-swiper-row', row);
        
                }
                if (slide.css('display') === 'none') continue;
                if (s.params.slidesPerView === 'auto') {
                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    if (s.params.roundLengths) slideSize = round(slideSize);
                }
                else {
                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
                    if (s.params.roundLengths) slideSize = round(slideSize);
        
                    if (s.isHorizontal()) {
                        s.slides[i].style.width = slideSize + 'px';
                    }
                    else {
                        s.slides[i].style.height = slideSize + 'px';
                    }
                }
                s.slides[i].swiperSlideSize = slideSize;
                s.slidesSizesGrid.push(slideSize);
        
        
                if (s.params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                }
                else {
                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
                    s.slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
        
                s.virtualSize += slideSize + spaceBetween;
        
                prevSlideSize = slideSize;
        
                index ++;
            }
            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
            var newSlidesGrid;
        
            if (
                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
            }
            if (!s.support.flexbox || s.params.setWrapperSize) {
                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
            }
        
            if (s.params.slidesPerColumn > 1) {
                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
                if (s.params.centeredSlides) {
                    newSlidesGrid = [];
                    for (i = 0; i < s.snapGrid.length; i++) {
                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
                    }
                    s.snapGrid = newSlidesGrid;
                }
            }
        
            // Remove last grid elements depending on width
            if (!s.params.centeredSlides) {
                newSlidesGrid = [];
                for (i = 0; i < s.snapGrid.length; i++) {
                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
                        newSlidesGrid.push(s.snapGrid[i]);
                    }
                }
                s.snapGrid = newSlidesGrid;
                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
                    s.snapGrid.push(s.virtualSize - s.size);
                }
            }
            if (s.snapGrid.length === 0) s.snapGrid = [0];
        
            if (s.params.spaceBetween !== 0) {
                if (s.isHorizontal()) {
                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
                    else s.slides.css({marginRight: spaceBetween + 'px'});
                }
                else s.slides.css({marginBottom: spaceBetween + 'px'});
            }
            if (s.params.watchSlidesProgress) {
                s.updateSlidesOffset();
            }
        };
        s.updateSlidesOffset = function () {
            for (var i = 0; i < s.slides.length; i++) {
                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
            }
        };
        
        /*=========================
          Slider/slides progress
          ===========================*/
        s.updateSlidesProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            if (s.slides.length === 0) return;
            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
        
            var offsetCenter = -translate;
            if (s.rtl) offsetCenter = translate;
        
            // Visible Slides
            s.slides.removeClass(s.params.slideVisibleClass);
            for (var i = 0; i < s.slides.length; i++) {
                var slide = s.slides[i];
                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
                if (s.params.watchSlidesVisibility) {
                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
                    var isVisible =
                        (slideBefore >= 0 && slideBefore < s.size) ||
                        (slideAfter > 0 && slideAfter <= s.size) ||
                        (slideBefore <= 0 && slideAfter >= s.size);
                    if (isVisible) {
                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
                    }
                }
                slide.progress = s.rtl ? -slideProgress : slideProgress;
            }
        };
        s.updateProgress = function (translate) {
            if (typeof translate === 'undefined') {
                translate = s.translate || 0;
            }
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            var wasBeginning = s.isBeginning;
            var wasEnd = s.isEnd;
            if (translatesDiff === 0) {
                s.progress = 0;
                s.isBeginning = s.isEnd = true;
            }
            else {
                s.progress = (translate - s.minTranslate()) / (translatesDiff);
                s.isBeginning = s.progress <= 0;
                s.isEnd = s.progress >= 1;
            }
            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
        
            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
            s.emit('onProgress', s, s.progress);
        };
        s.updateActiveIndex = function () {
            var translate = s.rtl ? s.translate : -s.translate;
            var newActiveIndex, i, snapIndex;
            for (i = 0; i < s.slidesGrid.length; i ++) {
                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
                        newActiveIndex = i;
                    }
                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
                        newActiveIndex = i + 1;
                    }
                }
                else {
                    if (translate >= s.slidesGrid[i]) {
                        newActiveIndex = i;
                    }
                }
            }
            // Normalize slideIndex
            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
            // for (i = 0; i < s.slidesGrid.length; i++) {
                // if (- translate >= s.slidesGrid[i]) {
                    // newActiveIndex = i;
                // }
            // }
            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
        
            if (newActiveIndex === s.activeIndex) {
                return;
            }
            s.snapIndex = snapIndex;
            s.previousIndex = s.activeIndex;
            s.activeIndex = newActiveIndex;
            s.updateClasses();
        };
        
        /*=========================
          Classes
          ===========================*/
        s.updateClasses = function () {
            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
            var activeSlide = s.slides.eq(s.activeIndex);
            // Active classes
            activeSlide.addClass(s.params.slideActiveClass);
            // Next Slide
            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
            if (s.params.loop && nextSlide.length === 0) {
                s.slides.eq(0).addClass(s.params.slideNextClass);
            }
            // Prev Slide
            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
            if (s.params.loop && prevSlide.length === 0) {
                s.slides.eq(-1).addClass(s.params.slidePrevClass);
            }
        
            // Pagination
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                // Current/Total
                var current,
                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                if (s.params.loop) {
                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
                        current = current - (s.slides.length - s.loopedSlides * 2);
                    }
                    if (current > total - 1) current = current - total;
                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
                }
                else {
                    if (typeof s.snapIndex !== 'undefined') {
                        current = s.snapIndex;
                    }
                    else {
                        current = s.activeIndex || 0;
                    }
                }
                // Types
                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
                    s.bullets.removeClass(s.params.bulletActiveClass);
                    if (s.paginationContainer.length > 1) {
                        s.bullets.each(function () {
                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
                        });
                    }
                    else {
                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
                }
                if (s.params.paginationType === 'progress') {
                    var scale = (current + 1) / total,
                        scaleX = scale,
                        scaleY = 1;
                    if (!s.isHorizontal()) {
                        scaleY = scale;
                        scaleX = 1;
                    }
                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
                }
                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        
            // Next/active buttons
            if (!s.params.loop) {
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    if (s.isBeginning) {
                        s.prevButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
                    }
                    else {
                        s.prevButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
                    }
                }
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    if (s.isEnd) {
                        s.nextButton.addClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
                    }
                    else {
                        s.nextButton.removeClass(s.params.buttonDisabledClass);
                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
                    }
                }
            }
        };
        
        /*=========================
          Pagination
          ===========================*/
        s.updatePagination = function () {
            if (!s.params.pagination) return;
            if (s.paginationContainer && s.paginationContainer.length > 0) {
                var paginationHTML = '';
                if (s.params.paginationType === 'bullets') {
                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i++) {
                        if (s.params.paginationBulletRender) {
                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
                        }
                        else {
                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
                        }
                    }
                    s.paginationContainer.html(paginationHTML);
                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
                        s.a11y.initPagination();
                    }
                }
                if (s.params.paginationType === 'fraction') {
                    if (s.params.paginationFractionRender) {
                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
                    }
                    else {
                        paginationHTML =
                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
                            ' / ' +
                            '<span class="' + s.params.paginationTotalClass+'"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType === 'progress') {
                    if (s.params.paginationProgressRender) {
                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
                    }
                    else {
                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
                    }
                    s.paginationContainer.html(paginationHTML);
                }
                if (s.params.paginationType !== 'custom') {
                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
                }
            }
        };
        /*=========================
          Common update method
          ===========================*/
        s.update = function (updateTranslate) {
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updateProgress();
            s.updatePagination();
            s.updateClasses();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            function forceSetTranslate() {
                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
            }
            if (updateTranslate) {
                var translated, newTranslate;
                if (s.controller && s.controller.spline) {
                    s.controller.spline = undefined;
                }
                if (s.params.freeMode) {
                    forceSetTranslate();
                    if (s.params.autoHeight) {
                        s.updateAutoHeight();
                    }
                }
                else {
                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
                    }
                    else {
                        translated = s.slideTo(s.activeIndex, 0, false, true);
                    }
                    if (!translated) {
                        forceSetTranslate();
                    }
                }
            }
            else if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
        };
        
        /*=========================
          Resize Handler
          ===========================*/
        s.onResize = function (forceUpdatePagination) {
            //Breakpoints
            if (s.params.breakpoints) {
                s.setBreakpoint();
            }
        
            // Disable locks on resize
            var allowSwipeToPrev = s.params.allowSwipeToPrev;
            var allowSwipeToNext = s.params.allowSwipeToNext;
            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
        
            s.updateContainerSize();
            s.updateSlidesSize();
            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
            }
            if (s.controller && s.controller.spline) {
                s.controller.spline = undefined;
            }
            var slideChangedBySlideTo = false;
            if (s.params.freeMode) {
                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
                s.setWrapperTranslate(newTranslate);
                s.updateActiveIndex();
                s.updateClasses();
        
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
            }
            else {
                s.updateClasses();
                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
                }
                else {
                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
                }
            }
            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
                s.lazy.load();
            }
            // Return locks after resize
            s.params.allowSwipeToPrev = allowSwipeToPrev;
            s.params.allowSwipeToNext = allowSwipeToNext;
        };
        
        /*=========================
          Events
          ===========================*/
        
        //Define Touch Events
        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        s.touchEvents = {
            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
        };
        
        
        // WP8 Touch Events Fix
        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
        }
        
        // Attach/detach events
        s.initEvents = function (detach) {
            var actionDom = detach ? 'off' : 'on';
            var action = detach ? 'removeEventListener' : 'addEventListener';
            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
            var target = s.support.touch ? touchEventsTarget : document;
        
            var moveCapture = s.params.nested ? true : false;
        
            //Touch Events
            if (s.browser.ie) {
                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                target[action](s.touchEvents.end, s.onTouchEnd, false);
            }
            else {
                if (s.support.touch) {
                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
                }
                if (params.simulateTouch && !s.device.ios && !s.device.android) {
                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
                    document[action]('mousemove', s.onTouchMove, moveCapture);
                    document[action]('mouseup', s.onTouchEnd, false);
                }
            }
            window[action]('resize', s.onResize);
        
            // Next, Prev, Index
            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                s.nextButton[actionDom]('click', s.onClickNext);
                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                s.prevButton[actionDom]('click', s.onClickPrev);
                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
            }
            if (s.params.pagination && s.params.paginationClickable) {
                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
            }
        
            // Prevent Links Clicks
            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
        };
        s.attachEvents = function () {
            s.initEvents();
        };
        s.detachEvents = function () {
            s.initEvents(true);
        };
        
        /*=========================
          Handle Clicks
          ===========================*/
        // Prevent Clicks
        s.allowClick = true;
        s.preventClicks = function (e) {
            if (!s.allowClick) {
                if (s.params.preventClicks) e.preventDefault();
                if (s.params.preventClicksPropagation && s.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        };
        // Clicks
        s.onClickNext = function (e) {
            e.preventDefault();
            if (s.isEnd && !s.params.loop) return;
            s.slideNext();
        };
        s.onClickPrev = function (e) {
            e.preventDefault();
            if (s.isBeginning && !s.params.loop) return;
            s.slidePrev();
        };
        s.onClickIndex = function (e) {
            e.preventDefault();
            var index = $(this).index() * s.params.slidesPerGroup;
            if (s.params.loop) index = index + s.loopedSlides;
            s.slideTo(index);
        };
        
        /*=========================
          Handle Touches
          ===========================*/
        function findElementInEvent(e, selector) {
            var el = $(e.target);
            if (!el.is(selector)) {
                if (typeof selector === 'string') {
                    el = el.parents(selector);
                }
                else if (selector.nodeType) {
                    var found;
                    el.parents().each(function (index, _el) {
                        if (_el === selector) found = selector;
                    });
                    if (!found) return undefined;
                    else return selector;
                }
            }
            if (el.length === 0) {
                return undefined;
            }
            return el[0];
        }
        s.updateClickedSlide = function (e) {
            var slide = findElementInEvent(e, '.' + s.params.slideClass);
            var slideFound = false;
            if (slide) {
                for (var i = 0; i < s.slides.length; i++) {
                    if (s.slides[i] === slide) slideFound = true;
                }
            }
        
            if (slide && slideFound) {
                s.clickedSlide = slide;
                s.clickedIndex = $(slide).index();
            }
            else {
                s.clickedSlide = undefined;
                s.clickedIndex = undefined;
                return;
            }
            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
                var slideToIndex = s.clickedIndex,
                    realIndex,
                    duplicatedSlides;
                if (s.params.loop) {
                    if (s.animating) return;
                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
                    if (s.params.centeredSlides) {
                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                    else {
                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
                            s.fixLoop();
                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
                            setTimeout(function () {
                                s.slideTo(slideToIndex);
                            }, 0);
                        }
                        else {
                            s.slideTo(slideToIndex);
                        }
                    }
                }
                else {
                    s.slideTo(slideToIndex);
                }
            }
        };
        
        var isTouched,
            isMoved,
            allowTouchCallbacks,
            touchStartTime,
            isScrolling,
            currentTranslate,
            startTranslate,
            allowThresholdMove,
            // Form elements to match
            formElements = 'input, select, textarea, button',
            // Last click time
            lastClickTime = Date.now(), clickTimeout,
            //Velocities
            velocities = [],
            allowMomentumBounce;
        
        // Animating Flag
        s.animating = false;
        
        // Touches information
        s.touches = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
        };
        
        // Touch handlers
        var isTouchEvent, startMoving;
        s.onTouchStart = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            isTouchEvent = e.type === 'touchstart';
            if (!isTouchEvent && 'which' in e && e.which === 3) return;
            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
                s.allowClick = true;
                return;
            }
            if (s.params.swipeHandler) {
                if (!findElementInEvent(e, s.params.swipeHandler)) return;
            }
        
            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        
            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
                return;
            }
        
            isTouched = true;
            isMoved = false;
            allowTouchCallbacks = true;
            isScrolling = undefined;
            startMoving = undefined;
            s.touches.startX = startX;
            s.touches.startY = startY;
            touchStartTime = Date.now();
            s.allowClick = true;
            s.updateContainerSize();
            s.swipeDirection = undefined;
            if (s.params.threshold > 0) allowThresholdMove = false;
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(formElements)) preventDefault = false;
                if (document.activeElement && $(document.activeElement).is(formElements)) {
                    document.activeElement.blur();
                }
                if (preventDefault) {
                    e.preventDefault();
                }
            }
            s.emit('onTouchStart', s, e);
        };
        
        s.onTouchMove = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (isTouchEvent && e.type === 'mousemove') return;
            if (e.preventedByNestedSwiper) {
                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                return;
            }
            if (s.params.onlyExternal) {
                // isMoved = true;
                s.allowClick = false;
                if (isTouched) {
                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                    touchStartTime = Date.now();
                }
                return;
            }
            if (isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && $(e.target).is(formElements)) {
                    isMoved = true;
                    s.allowClick = false;
                    return;
                }
            }
            if (allowTouchCallbacks) {
                s.emit('onTouchMove', s, e);
            }
            if (e.targetTouches && e.targetTouches.length > 1) return;
        
            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        
            if (typeof isScrolling === 'undefined') {
                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
            }
            if (isScrolling) {
                s.emit('onTouchMoveOpposite', s, e);
            }
            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
                    startMoving = true;
                }
            }
            if (!isTouched) return;
            if (isScrolling)  {
                isTouched = false;
                return;
            }
            if (!startMoving && s.browser.ieTouch) {
                return;
            }
            s.allowClick = false;
            s.emit('onSliderMove', s, e);
            e.preventDefault();
            if (s.params.touchMoveStopPropagation && !s.params.nested) {
                e.stopPropagation();
            }
        
            if (!isMoved) {
                if (params.loop) {
                    s.fixLoop();
                }
                startTranslate = s.getWrapperTranslate();
                s.setWrapperTransition(0);
                if (s.animating) {
                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
                }
                if (s.params.autoplay && s.autoplaying) {
                    if (s.params.autoplayDisableOnInteraction) {
                        s.stopAutoplay();
                    }
                    else {
                        s.pauseAutoplay();
                    }
                }
                allowMomentumBounce = false;
                //Grab Cursor
                if (s.params.grabCursor) {
                    s.container[0].style.cursor = 'move';
                    s.container[0].style.cursor = '-webkit-grabbing';
                    s.container[0].style.cursor = '-moz-grabbin';
                    s.container[0].style.cursor = 'grabbing';
                }
            }
            isMoved = true;
        
            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
        
            diff = diff * s.params.touchRatio;
            if (s.rtl) diff = -diff;
        
            s.swipeDirection = diff > 0 ? 'prev' : 'next';
            currentTranslate = diff + startTranslate;
        
            var disableParentSwiper = true;
            if ((diff > 0 && currentTranslate > s.minTranslate())) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
            }
            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
                disableParentSwiper = false;
                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
            }
        
            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
                currentTranslate = startTranslate;
            }
            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
                currentTranslate = startTranslate;
            }
        
            if (!s.params.followFinger) return;
        
            // Threshold
            if (s.params.threshold > 0) {
                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        s.touches.startX = s.touches.currentX;
                        s.touches.startY = s.touches.currentY;
                        currentTranslate = startTranslate;
                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
                        return;
                    }
                }
                else {
                    currentTranslate = startTranslate;
                    return;
                }
            }
            // Update active index in free mode
            if (s.params.freeMode || s.params.watchSlidesProgress) {
                s.updateActiveIndex();
            }
            if (s.params.freeMode) {
                //Velocity
                if (velocities.length === 0) {
                    velocities.push({
                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
                        time: touchStartTime
                    });
                }
                velocities.push({
                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
                    time: (new window.Date()).getTime()
                });
            }
            // Update progress
            s.updateProgress(currentTranslate);
            // Update translate
            s.setWrapperTranslate(currentTranslate);
        };
        s.onTouchEnd = function (e) {
            if (e.originalEvent) e = e.originalEvent;
            if (allowTouchCallbacks) {
                s.emit('onTouchEnd', s, e);
            }
            allowTouchCallbacks = false;
            if (!isTouched) return;
            //Return Grab Cursor
            if (s.params.grabCursor && isMoved && isTouched) {
                s.container[0].style.cursor = 'move';
                s.container[0].style.cursor = '-webkit-grab';
                s.container[0].style.cursor = '-moz-grab';
                s.container[0].style.cursor = 'grab';
            }
        
            // Time diff
            var touchEndTime = Date.now();
            var timeDiff = touchEndTime - touchStartTime;
        
            // Tap, doubleTap, Click
            if (s.allowClick) {
                s.updateClickedSlide(e);
                s.emit('onTap', s, e);
                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    clickTimeout = setTimeout(function () {
                        if (!s) return;
                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
                        }
                        s.emit('onClick', s, e);
                    }, 300);
        
                }
                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
                    if (clickTimeout) clearTimeout(clickTimeout);
                    s.emit('onDoubleTap', s, e);
                }
            }
        
            lastClickTime = Date.now();
            setTimeout(function () {
                if (s) s.allowClick = true;
            }, 0);
        
            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
                isTouched = isMoved = false;
                return;
            }
            isTouched = isMoved = false;
        
            var currentPos;
            if (s.params.followFinger) {
                currentPos = s.rtl ? s.translate : -s.translate;
            }
            else {
                currentPos = -currentTranslate;
            }
            if (s.params.freeMode) {
                if (currentPos < -s.minTranslate()) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                else if (currentPos > -s.maxTranslate()) {
                    if (s.slides.length < s.snapGrid.length) {
                        s.slideTo(s.snapGrid.length - 1);
                    }
                    else {
                        s.slideTo(s.slides.length - 1);
                    }
                    return;
                }
        
                if (s.params.freeModeMomentum) {
                    if (velocities.length > 1) {
                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
        
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        s.velocity = distance / time;
                        s.velocity = s.velocity / 2;
                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
                            s.velocity = 0;
                        }
                        // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.
                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
                            s.velocity = 0;
                        }
                    } else {
                        s.velocity = 0;
                    }
        
                    velocities.length = 0;
                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
                    var momentumDistance = s.velocity * momentumDuration;
        
                    var newPosition = s.translate + momentumDistance;
                    if (s.rtl) newPosition = - newPosition;
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
                    if (newPosition < s.maxTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition + s.maxTranslate() < -bounceAmount) {
                                newPosition = s.maxTranslate() - bounceAmount;
                            }
                            afterBouncePosition = s.maxTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.maxTranslate();
                        }
                    }
                    else if (newPosition > s.minTranslate()) {
                        if (s.params.freeModeMomentumBounce) {
                            if (newPosition - s.minTranslate() > bounceAmount) {
                                newPosition = s.minTranslate() + bounceAmount;
                            }
                            afterBouncePosition = s.minTranslate();
                            doBounce = true;
                            allowMomentumBounce = true;
                        }
                        else {
                            newPosition = s.minTranslate();
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        var j = 0,
                            nextSlide;
                        for (j = 0; j < s.snapGrid.length; j += 1) {
                            if (s.snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
        
                        }
                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
                            newPosition = s.snapGrid[nextSlide];
                        } else {
                            newPosition = s.snapGrid[nextSlide - 1];
                        }
                        if (!s.rtl) newPosition = - newPosition;
                    }
                    //Fix duration
                    if (s.velocity !== 0) {
                        if (s.rtl) {
                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
                        }
                        else {
                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
                        }
                    }
                    else if (s.params.freeModeSticky) {
                        s.slideReset();
                        return;
                    }
        
                    if (s.params.freeModeMomentumBounce && doBounce) {
                        s.updateProgress(afterBouncePosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        s.animating = true;
                        s.wrapper.transitionEnd(function () {
                            if (!s || !allowMomentumBounce) return;
                            s.emit('onMomentumBounce', s);
        
                            s.setWrapperTransition(s.params.speed);
                            s.setWrapperTranslate(afterBouncePosition);
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        });
                    } else if (s.velocity) {
                        s.updateProgress(newPosition);
                        s.setWrapperTransition(momentumDuration);
                        s.setWrapperTranslate(newPosition);
                        s.onTransitionStart();
                        if (!s.animating) {
                            s.animating = true;
                            s.wrapper.transitionEnd(function () {
                                if (!s) return;
                                s.onTransitionEnd();
                            });
                        }
        
                    } else {
                        s.updateProgress(newPosition);
                    }
        
                    s.updateActiveIndex();
                }
                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
                    s.updateProgress();
                    s.updateActiveIndex();
                }
                return;
            }
        
            // Find current slide
            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
                    }
                }
                else {
                    if (currentPos >= s.slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
                    }
                }
            }
        
            // Find current slide size
            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
        
            if (timeDiff > s.params.longSwipesMs) {
                // Long touches
                if (!s.params.longSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
        
                }
                if (s.swipeDirection === 'prev') {
                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
                    else s.slideTo(stopIndex);
                }
            }
            else {
                // Short swipes
                if (!s.params.shortSwipes) {
                    s.slideTo(s.activeIndex);
                    return;
                }
                if (s.swipeDirection === 'next') {
                    s.slideTo(stopIndex + s.params.slidesPerGroup);
        
                }
                if (s.swipeDirection === 'prev') {
                    s.slideTo(stopIndex);
                }
            }
        };
        /*=========================
          Transitions
          ===========================*/
        s._slideTo = function (slideIndex, speed) {
            return s.slideTo(slideIndex, speed, true, true);
        };
        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (typeof slideIndex === 'undefined') slideIndex = 0;
            if (slideIndex < 0) slideIndex = 0;
            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
        
            var translate = - s.snapGrid[s.snapIndex];
            // Stop autoplay
            if (s.params.autoplay && s.autoplaying) {
                if (internal || !s.params.autoplayDisableOnInteraction) {
                    s.pauseAutoplay(speed);
                }
                else {
                    s.stopAutoplay();
                }
            }
            // Update progress
            s.updateProgress(translate);
        
            // Normalize slideIndex
            for (var i = 0; i < s.slidesGrid.length; i++) {
                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        
            // Directions locks
            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
                if ((s.activeIndex || 0) !== slideIndex ) return false;
            }
        
            // Update Index
            if (typeof speed === 'undefined') speed = s.params.speed;
            s.previousIndex = s.activeIndex || 0;
            s.activeIndex = slideIndex;
        
            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
                // Update Height
                if (s.params.autoHeight) {
                    s.updateAutoHeight();
                }
                s.updateClasses();
                if (s.params.effect !== 'slide') {
                    s.setWrapperTranslate(translate);
                }
                return false;
            }
            s.updateClasses();
            s.onTransitionStart(runCallbacks);
        
            if (speed === 0) {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(0);
                s.onTransitionEnd(runCallbacks);
            }
            else {
                s.setWrapperTranslate(translate);
                s.setWrapperTransition(speed);
                if (!s.animating) {
                    s.animating = true;
                    s.wrapper.transitionEnd(function () {
                        if (!s) return;
                        s.onTransitionEnd(runCallbacks);
                    });
                }
        
            }
        
            return true;
        };
        
        s.onTransitionStart = function (runCallbacks) {
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.params.autoHeight) {
                s.updateAutoHeight();
            }
            if (s.lazy) s.lazy.onTransitionStart();
            if (runCallbacks) {
                s.emit('onTransitionStart', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeStart', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextStart', s);
                    }
                    else {
                        s.emit('onSlidePrevStart', s);
                    }
                }
        
            }
        };
        s.onTransitionEnd = function (runCallbacks) {
            s.animating = false;
            s.setWrapperTransition(0);
            if (typeof runCallbacks === 'undefined') runCallbacks = true;
            if (s.lazy) s.lazy.onTransitionEnd();
            if (runCallbacks) {
                s.emit('onTransitionEnd', s);
                if (s.activeIndex !== s.previousIndex) {
                    s.emit('onSlideChangeEnd', s);
                    if (s.activeIndex > s.previousIndex) {
                        s.emit('onSlideNextEnd', s);
                    }
                    else {
                        s.emit('onSlidePrevEnd', s);
                    }
                }
            }
            if (s.params.hashnav && s.hashnav) {
                s.hashnav.setHash();
            }
        
        };
        s.slideNext = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
        };
        s._slideNext = function (speed) {
            return s.slideNext(true, speed, true);
        };
        s.slidePrev = function (runCallbacks, speed, internal) {
            if (s.params.loop) {
                if (s.animating) return false;
                s.fixLoop();
                var clientLeft = s.container[0].clientLeft;
                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
            }
            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
        };
        s._slidePrev = function (speed) {
            return s.slidePrev(true, speed, true);
        };
        s.slideReset = function (runCallbacks, speed, internal) {
            return s.slideTo(s.activeIndex, speed, runCallbacks);
        };
        
        /*=========================
          Translate/transition helpers
          ===========================*/
        s.setWrapperTransition = function (duration, byController) {
            s.wrapper.transition(duration);
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTransition(duration);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTransition(duration);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTransition(duration);
            }
            if (s.params.control && s.controller) {
                s.controller.setTransition(duration, byController);
            }
            s.emit('onSetTransition', s, duration);
        };
        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
            var x = 0, y = 0, z = 0;
            if (s.isHorizontal()) {
                x = s.rtl ? -translate : translate;
            }
            else {
                y = translate;
            }
        
            if (s.params.roundLengths) {
                x = round(x);
                y = round(y);
            }
        
            if (!s.params.virtualTranslate) {
                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
            }
        
            s.translate = s.isHorizontal() ? x : y;
        
            // Check if we need to update progress
            var progress;
            var translatesDiff = s.maxTranslate() - s.minTranslate();
            if (translatesDiff === 0) {
                progress = 0;
            }
            else {
                progress = (translate - s.minTranslate()) / (translatesDiff);
            }
            if (progress !== s.progress) {
                s.updateProgress(translate);
            }
        
            if (updateActiveIndex) s.updateActiveIndex();
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                s.effects[s.params.effect].setTranslate(s.translate);
            }
            if (s.params.parallax && s.parallax) {
                s.parallax.setTranslate(s.translate);
            }
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.setTranslate(s.translate);
            }
            if (s.params.control && s.controller) {
                s.controller.setTranslate(s.translate, byController);
            }
            s.emit('onSetTranslate', s, s.translate);
        };
        
        s.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;
        
            // automatic axis detection
            if (typeof axis === 'undefined') {
                axis = 'x';
            }
        
            if (s.params.virtualTranslate) {
                return s.rtl ? -s.translate : s.translate;
            }
        
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a){
                        return a.replace(',','.');
                    }).join(', ');
                }
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
        
            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
            if (s.rtl && curTransform) curTransform = -curTransform;
            return curTransform || 0;
        };
        s.getWrapperTranslate = function (axis) {
            if (typeof axis === 'undefined') {
                axis = s.isHorizontal() ? 'x' : 'y';
            }
            return s.getTranslate(s.wrapper[0], axis);
        };
        
        /*=========================
          Observer
          ===========================*/
        s.observers = [];
        function initObserver(target, options) {
            options = options || {};
            // create an observer instance
            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            var observer = new ObserverFunc(function (mutations) {
                mutations.forEach(function (mutation) {
                    s.onResize(true);
                    s.emit('onObserverUpdate', s, mutation);
                });
            });
        
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
        
            s.observers.push(observer);
        }
        s.initObservers = function () {
            if (s.params.observeParents) {
                var containerParents = s.container.parents();
                for (var i = 0; i < containerParents.length; i++) {
                    initObserver(containerParents[i]);
                }
            }
        
            // Observe container
            initObserver(s.container[0], {childList: false});
        
            // Observe wrapper
            initObserver(s.wrapper[0], {attributes: false});
        };
        s.disconnectObservers = function () {
            for (var i = 0; i < s.observers.length; i++) {
                s.observers[i].disconnect();
            }
            s.observers = [];
        };
        /*=========================
          Loop
          ===========================*/
        // Create looped slides
        s.createLoop = function () {
            // Remove duplicated slides
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
        
            var slides = s.wrapper.children('.' + s.params.slideClass);
        
            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
        
            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
            if (s.loopedSlides > slides.length) {
                s.loopedSlides = slides.length;
            }
        
            var prependSlides = [], appendSlides = [], i;
            slides.each(function (index, el) {
                var slide = $(this);
                if (index < s.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
                slide.attr('data-swiper-slide-index', index);
            });
            for (i = 0; i < appendSlides.length; i++) {
                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
            for (i = prependSlides.length - 1; i >= 0; i--) {
                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
            }
        };
        s.destroyLoop = function () {
            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
            s.slides.removeAttr('data-swiper-slide-index');
        };
        s.reLoop = function (updatePosition) {
            var oldIndex = s.activeIndex - s.loopedSlides;
            s.destroyLoop();
            s.createLoop();
            s.updateSlidesSize();
            if (updatePosition) {
                s.slideTo(oldIndex + s.loopedSlides, 0, false);
            }
        
        };
        s.fixLoop = function () {
            var newIndex;
            //Fix For Negative Oversliding
            if (s.activeIndex < s.loopedSlides) {
                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
            //Fix For Positive Oversliding
            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
                newIndex = newIndex + s.loopedSlides;
                s.slideTo(newIndex, 0, false, true);
            }
        };
        /*=========================
          Append/Prepend/Remove Slides
          ===========================*/
        s.appendSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.append(slides[i]);
                }
            }
            else {
                s.wrapper.append(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
        };
        s.prependSlide = function (slides) {
            if (s.params.loop) {
                s.destroyLoop();
            }
            var newActiveIndex = s.activeIndex + 1;
            if (typeof slides === 'object' && slides.length) {
                for (var i = 0; i < slides.length; i++) {
                    if (slides[i]) s.wrapper.prepend(slides[i]);
                }
                newActiveIndex = s.activeIndex + slides.length;
            }
            else {
                s.wrapper.prepend(slides);
            }
            if (s.params.loop) {
                s.createLoop();
            }
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            s.slideTo(newActiveIndex, 0, false);
        };
        s.removeSlide = function (slidesIndexes) {
            if (s.params.loop) {
                s.destroyLoop();
                s.slides = s.wrapper.children('.' + s.params.slideClass);
            }
            var newActiveIndex = s.activeIndex,
                indexToRemove;
            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
                for (var i = 0; i < slidesIndexes.length; i++) {
                    indexToRemove = slidesIndexes[i];
                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex--;
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            else {
                indexToRemove = slidesIndexes;
                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex--;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
        
            if (s.params.loop) {
                s.createLoop();
            }
        
            if (!(s.params.observer && s.support.observer)) {
                s.update(true);
            }
            if (s.params.loop) {
                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
            }
            else {
                s.slideTo(newActiveIndex, 0, false);
            }
        
        };
        s.removeAllSlides = function () {
            var slidesIndexes = [];
            for (var i = 0; i < s.slides.length; i++) {
                slidesIndexes.push(i);
            }
            s.removeSlide(slidesIndexes);
        };
        

        /*=========================
          Effects
          ===========================*/
        s.effects = {
            fade: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var offset = slide[0].swiperSlideOffset;
                        var tx = -offset;
                        if (!s.params.virtualTranslate) tx = tx - s.translate;
                        var ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = s.params.fade.crossFade ?
                                Math.max(1 - Math.abs(slide[0].progress), 0) :
                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
                        slide
                            .css({
                                opacity: slideOpacity
                            })
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
        
                    }
        
                },
                setTransition: function (duration) {
                    s.slides.transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            flip: {
                setTranslate: function () {
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var progress = slide[0].progress;
                        if (s.params.flip.limitRotation) {
                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        }
                        var offset = slide[0].swiperSlideOffset;
                        var rotate = -180 * progress,
                            rotateY = rotate,
                            rotateX = 0,
                            tx = -offset,
                            ty = 0;
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                            rotateX = -rotateY;
                            rotateY = 0;
                        }
                        else if (s.rtl) {
                            rotateY = -rotateY;
                        }
        
                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
        
                        if (s.params.flip.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
        
                        slide
                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.virtualTranslate && duration !== 0) {
                        var eventTriggered = false;
                        s.slides.eq(s.activeIndex).transitionEnd(function () {
                            if (eventTriggered) return;
                            if (!s) return;
                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
                            eventTriggered = true;
                            s.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
                            for (var i = 0; i < triggerEvents.length; i++) {
                                s.wrapper.trigger(triggerEvents[i]);
                            }
                        });
                    }
                }
            },
            cube: {
                setTranslate: function () {
                    var wrapperRotate = 0, cubeShadow;
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.wrapper.append(cubeShadow);
                            }
                            cubeShadow.css({height: s.width + 'px'});
                        }
                        else {
                            cubeShadow = s.container.find('.swiper-cube-shadow');
                            if (cubeShadow.length === 0) {
                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
                                s.container.append(cubeShadow);
                            }
                        }
                    }
                    for (var i = 0; i < s.slides.length; i++) {
                        var slide = s.slides.eq(i);
                        var slideAngle = i * 90;
                        var round = Math.floor(slideAngle / 360);
                        if (s.rtl) {
                            slideAngle = -slideAngle;
                            round = Math.floor(-slideAngle / 360);
                        }
                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
                        var tx = 0, ty = 0, tz = 0;
                        if (i % 4 === 0) {
                            tx = - round * 4 * s.size;
                            tz = 0;
                        }
                        else if ((i - 1) % 4 === 0) {
                            tx = 0;
                            tz = - round * 4 * s.size;
                        }
                        else if ((i - 2) % 4 === 0) {
                            tx = s.size + round * 4 * s.size;
                            tz = s.size;
                        }
                        else if ((i - 3) % 4 === 0) {
                            tx = - s.size;
                            tz = 3 * s.size + s.size * 4 * round;
                        }
                        if (s.rtl) {
                            tx = -tx;
                        }
        
                        if (!s.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
        
                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
                        if (progress <= 1 && progress > -1) {
                            wrapperRotate = i * 90 + progress * 90;
                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
                        }
                        slide.transform(transform);
                        if (s.params.cube.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                        }
                    }
                    s.wrapper.css({
                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
                    });
        
                    if (s.params.cube.shadow) {
                        if (s.isHorizontal()) {
                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
                        }
                        else {
                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                            var scale1 = s.params.cube.shadowScale,
                                scale2 = s.params.cube.shadowScale / multiplier,
                                offset = s.params.cube.shadowOffset;
                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
                        }
                    }
                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                    if (s.params.cube.shadow && !s.isHorizontal()) {
                        s.container.find('.swiper-cube-shadow').transition(duration);
                    }
                }
            },
            coverflow: {
                setTranslate: function () {
                    var transform = s.translate;
                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
                    var translate = s.params.coverflow.depth;
                    //Each slide offset from center
                    for (var i = 0, length = s.slides.length; i < length; i++) {
                        var slide = s.slides.eq(i);
                        var slideSize = s.slidesSizesGrid[i];
                        var slideOffset = slide[0].swiperSlideOffset;
                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
        
                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        var translateZ = -translate * Math.abs(offsetMultiplier);
        
                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
        
                        //Fix for ultra small values
                        if (Math.abs(translateX) < 0.001) translateX = 0;
                        if (Math.abs(translateY) < 0.001) translateY = 0;
                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        
                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        
                        slide.transform(slideTransform);
                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (s.params.coverflow.slideShadows) {
                            //Set shadows
                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
                            if (shadowBefore.length === 0) {
                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
                                slide.append(shadowBefore);
                            }
                            if (shadowAfter.length === 0) {
                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
                                slide.append(shadowAfter);
                            }
                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
        
                    //Set correct perspective for IE10
                    if (s.browser.ie) {
                        var ws = s.wrapper[0].style;
                        ws.perspectiveOrigin = center + 'px 50%';
                    }
                },
                setTransition: function (duration) {
                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                }
            }
        };

        /*=========================
          Images Lazy Loading
          ===========================*/
        s.lazy = {
            initialImageLoaded: false,
            loadImageInSlide: function (index, loadInDuplicate) {
                if (typeof index === 'undefined') return;
                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
                if (s.slides.length === 0) return;
        
                var slide = s.slides.eq(index);
                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
                    img = img.add(slide[0]);
                }
                if (img.length === 0) return;
        
                img.each(function () {
                    var _img = $(this);
                    _img.addClass('swiper-lazy-loading');
                    var background = _img.attr('data-background');
                    var src = _img.attr('data-src'),
                        srcset = _img.attr('data-srcset');
                    s.loadImage(_img[0], (src || background), srcset, false, function () {
                        if (background) {
                            _img.css('background-image', 'url("' + background + '")');
                            _img.removeAttr('data-background');
                        }
                        else {
                            if (srcset) {
                                _img.attr('srcset', srcset);
                                _img.removeAttr('data-srcset');
                            }
                            if (src) {
                                _img.attr('src', src);
                                _img.removeAttr('data-src');
                            }
        
                        }
        
                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
                        slide.find('.swiper-lazy-preloader, .preloader').remove();
                        if (s.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
                            if (slide.hasClass(s.params.slideDuplicateClass)) {
                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
                                s.lazy.loadImageInSlide(originalSlide.index(), false);
                            }
                            else {
                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
                    });
        
                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
                });
        
            },
            load: function () {
                var i;
                if (s.params.watchSlidesVisibility) {
                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
                        s.lazy.loadImageInSlide($(this).index());
                    });
                }
                else {
                    if (s.params.slidesPerView > 1) {
                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        s.lazy.loadImageInSlide(s.activeIndex);
                    }
                }
                if (s.params.lazyLoadingInPrevNext) {
                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
                        var amount = s.params.lazyLoadingInPrevNextAmount;
                        var spv = s.params.slidesPerView;
                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
                        // Next Slides
                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                        // Prev Slides
                        for (i = minIndex; i < s.activeIndex ; i++) {
                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
                        }
                    }
                    else {
                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
        
                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
                    }
                }
            },
            onTransitionStart: function () {
                if (s.params.lazyLoading) {
                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
                        s.lazy.load();
                    }
                }
            },
            onTransitionEnd: function () {
                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
                    s.lazy.load();
                }
            }
        };
        

        /*=========================
          Scrollbar
          ===========================*/
        s.scrollbar = {
            isTouched: false,
            setDragPosition: function (e) {
                var sb = s.scrollbar;
                var x = 0, y = 0;
                var translate;
                var pointerPosition = s.isHorizontal() ?
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
                var positionMin = -s.minTranslate() * sb.moveDivider;
                var positionMax = -s.maxTranslate() * sb.moveDivider;
                if (position < positionMin) {
                    position = positionMin;
                }
                else if (position > positionMax) {
                    position = positionMax;
                }
                position = -position / sb.moveDivider;
                s.updateProgress(position);
                s.setWrapperTranslate(position, true);
            },
            dragStart: function (e) {
                var sb = s.scrollbar;
                sb.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
        
                sb.setDragPosition(e);
                clearTimeout(sb.dragTimeout);
        
                sb.track.transition(0);
                if (s.params.scrollbarHide) {
                    sb.track.css('opacity', 1);
                }
                s.wrapper.transition(100);
                sb.drag.transition(100);
                s.emit('onScrollbarDragStart', s);
            },
            dragMove: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                sb.setDragPosition(e);
                s.wrapper.transition(0);
                sb.track.transition(0);
                sb.drag.transition(0);
                s.emit('onScrollbarDragMove', s);
            },
            dragEnd: function (e) {
                var sb = s.scrollbar;
                if (!sb.isTouched) return;
                sb.isTouched = false;
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.dragTimeout);
                    sb.dragTimeout = setTimeout(function () {
                        sb.track.css('opacity', 0);
                        sb.track.transition(400);
                    }, 1000);
        
                }
                s.emit('onScrollbarDragEnd', s);
                if (s.params.scrollbarSnapOnRelease) {
                    s.slideReset();
                }
            },
            enableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).on(s.touchEvents.start, sb.dragStart);
                $(target).on(s.touchEvents.move, sb.dragMove);
                $(target).on(s.touchEvents.end, sb.dragEnd);
            },
            disableDraggable: function () {
                var sb = s.scrollbar;
                var target = s.support.touch ? sb.track : document;
                $(sb.track).off(s.touchEvents.start, sb.dragStart);
                $(target).off(s.touchEvents.move, sb.dragMove);
                $(target).off(s.touchEvents.end, sb.dragEnd);
            },
            set: function () {
                if (!s.params.scrollbar) return;
                var sb = s.scrollbar;
                sb.track = $(s.params.scrollbar);
                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
                    sb.track = s.container.find(s.params.scrollbar);
                }
                sb.drag = sb.track.find('.swiper-scrollbar-drag');
                if (sb.drag.length === 0) {
                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
                    sb.track.append(sb.drag);
                }
                sb.drag[0].style.width = '';
                sb.drag[0].style.height = '';
                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
        
                sb.divider = s.size / s.virtualSize;
                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
                sb.dragSize = sb.trackSize * sb.divider;
        
                if (s.isHorizontal()) {
                    sb.drag[0].style.width = sb.dragSize + 'px';
                }
                else {
                    sb.drag[0].style.height = sb.dragSize + 'px';
                }
        
                if (sb.divider >= 1) {
                    sb.track[0].style.display = 'none';
                }
                else {
                    sb.track[0].style.display = '';
                }
                if (s.params.scrollbarHide) {
                    sb.track[0].style.opacity = 0;
                }
            },
            setTranslate: function () {
                if (!s.params.scrollbar) return;
                var diff;
                var sb = s.scrollbar;
                var translate = s.translate || 0;
                var newPos;
        
                var newSize = sb.dragSize;
                newPos = (sb.trackSize - sb.dragSize) * s.progress;
                if (s.rtl && s.isHorizontal()) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = sb.dragSize - newPos;
                        newPos = 0;
                    }
                    else if (-newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize + newPos;
                    }
                }
                else {
                    if (newPos < 0) {
                        newSize = sb.dragSize + newPos;
                        newPos = 0;
                    }
                    else if (newPos + sb.dragSize > sb.trackSize) {
                        newSize = sb.trackSize - newPos;
                    }
                }
                if (s.isHorizontal()) {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
                    }
                    else {
                        sb.drag.transform('translateX(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.width = newSize + 'px';
                }
                else {
                    if (s.support.transforms3d) {
                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
                    }
                    else {
                        sb.drag.transform('translateY(' + (newPos) + 'px)');
                    }
                    sb.drag[0].style.height = newSize + 'px';
                }
                if (s.params.scrollbarHide) {
                    clearTimeout(sb.timeout);
                    sb.track[0].style.opacity = 1;
                    sb.timeout = setTimeout(function () {
                        sb.track[0].style.opacity = 0;
                        sb.track.transition(400);
                    }, 1000);
                }
            },
            setTransition: function (duration) {
                if (!s.params.scrollbar) return;
                s.scrollbar.drag.transition(duration);
            }
        };

        /*=========================
          Controller
          ===========================*/
        s.controller = {
            LinearSpline: function (x, y) {
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.
                var i1, i3;
                var l = this.x.length;
        
                this.interpolate = function (x2) {
                    if (!x2) return 0;
        
                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
        
                    // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };
        
                var binarySearch = (function() {
                    var maxIndex, minIndex, guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1)
                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        return maxIndex;
                    };
                })();
            },
            //xxx: for now i will just save one spline function to to
            getInterpolateFunction: function(c){
                if(!s.controller.spline) s.controller.spline = s.params.loop ?
                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
            },
            setTranslate: function (translate, byController) {
               var controlled = s.params.control;
               var multiplier, controlledTranslate;
               function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
                    if (s.params.controlBy === 'slide') {
                        s.controller.getInterpolateFunction(c);
                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out
                        controlledTranslate = -s.controller.spline.interpolate(-translate);
                    }
        
                    if(!controlledTranslate || s.params.controlBy === 'container'){
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
                    }
        
                    if (s.params.controlInverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }
                    c.updateProgress(controlledTranslate);
                    c.setWrapperTranslate(controlledTranslate, false, s);
                    c.updateActiveIndex();
               }
               if (s.isArray(controlled)) {
                   for (var i = 0; i < controlled.length; i++) {
                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                           setControlledTranslate(controlled[i]);
                       }
                   }
               }
               else if (controlled instanceof Swiper && byController !== controlled) {
        
                   setControlledTranslate(controlled);
               }
            },
            setTransition: function (duration, byController) {
                var controlled = s.params.control;
                var i;
                function setControlledTransition(c) {
                    c.setWrapperTransition(duration, s);
                    if (duration !== 0) {
                        c.onTransitionStart();
                        c.wrapper.transitionEnd(function(){
                            if (!controlled) return;
                            if (c.params.loop && s.params.controlBy === 'slide') {
                                c.fixLoop();
                            }
                            c.onTransitionEnd();
        
                        });
                    }
                }
                if (s.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i++) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                }
                else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }
        };

        /*=========================
          Hash Navigation
          ===========================*/
        s.hashnav = {
            init: function () {
                if (!s.params.hashnav) return;
                s.hashnav.initialized = true;
                var hash = document.location.hash.replace('#', '');
                if (!hash) return;
                var speed = 0;
                for (var i = 0, length = s.slides.length; i < length; i++) {
                    var slide = s.slides.eq(i);
                    var slideHash = slide.attr('data-hash');
                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
                        var index = slide.index();
                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
                    }
                }
            },
            setHash: function () {
                if (!s.hashnav.initialized || !s.params.hashnav) return;
                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
            }
        };

        /*=========================
          Keyboard Control
          ===========================*/
        function handleKeyboard(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var kc = e.keyCode || e.charCode;
            // Directions locks
            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
                return false;
            }
            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return;
            }
            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return;
            }
            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
                var inView = false;
                //Check that swiper should be inside of visible area of window
                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
                    return;
                }
                var windowScroll = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
                var windowWidth = window.innerWidth;
                var windowHeight = window.innerHeight;
                var swiperOffset = s.container.offset();
                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + s.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + s.height],
                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
                ];
                for (var i = 0; i < swiperCoord.length; i++) {
                    var point = swiperCoord[i];
                    if (
                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
                    ) {
                        inView = true;
                    }
        
                }
                if (!inView) return;
            }
            if (s.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
            }
            else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (kc === 40) s.slideNext();
                if (kc === 38) s.slidePrev();
            }
        }
        s.disableKeyboardControl = function () {
            s.params.keyboardControl = false;
            $(document).off('keydown', handleKeyboard);
        };
        s.enableKeyboardControl = function () {
            s.params.keyboardControl = true;
            $(document).on('keydown', handleKeyboard);
        };
        

        /*=========================
          Mousewheel Control
          ===========================*/
        s.mousewheel = {
            event: false,
            lastScrollTime: (new window.Date()).getTime()
        };
        if (s.params.mousewheelControl) {
            try {
                new window.WheelEvent('wheel');
                s.mousewheel.event = 'wheel';
            } catch (e) {
                if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {
                    s.mousewheel.event = 'wheel';
                }
            }
            if (!s.mousewheel.event && window.WheelEvent) {
        
            }
            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
                s.mousewheel.event = 'mousewheel';
            }
            if (!s.mousewheel.event) {
                s.mousewheel.event = 'DOMMouseScroll';
            }
        }
        function handleMousewheel(e) {
            if (e.originalEvent) e = e.originalEvent; //jquery fix
            var we = s.mousewheel.event;
            var delta = 0;
            var rtlFactor = s.rtl ? -1 : 1;
        
            //WebKits
            if (we === 'mousewheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (s.isHorizontal()) {
                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
                        else return;
                    }
                    else {
                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
                }
            }
            //Old FireFox
            else if (we === 'DOMMouseScroll') delta = -e.detail;
            //New FireFox
            else if (we === 'wheel') {
                if (s.params.mousewheelForceToAxis) {
                    if (s.isHorizontal()) {
                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
                        else return;
                    }
                    else {
                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                        else return;
                    }
                }
                else {
                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;
                }
            }
            if (delta === 0) return;
        
            if (s.params.mousewheelInvert) delta = -delta;
        
            if (!s.params.freeMode) {
                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                    else {
                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
                        else if (s.params.mousewheelReleaseOnEdges) return true;
                    }
                }
                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
        
            }
            else {
                //Freemode or scrollContainer:
                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
                var wasBeginning = s.isBeginning,
                    wasEnd = s.isEnd;
        
                if (position >= s.minTranslate()) position = s.minTranslate();
                if (position <= s.maxTranslate()) position = s.maxTranslate();
        
                s.setWrapperTransition(0);
                s.setWrapperTranslate(position);
                s.updateProgress();
                s.updateActiveIndex();
        
                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
                    s.updateClasses();
                }
        
                if (s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout);
                    s.mousewheel.timeout = setTimeout(function () {
                        s.slideReset();
                    }, 300);
                }
                else {
                    if (s.params.lazyLoading && s.lazy) {
                        s.lazy.load();
                    }
                }
        
                // Return page scroll on edge positions
                if (position === 0 || position === s.maxTranslate()) return;
            }
            if (s.params.autoplay) s.stopAutoplay();
        
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }
        s.disableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.off(s.mousewheel.event, handleMousewheel);
            return true;
        };
        
        s.enableMousewheelControl = function () {
            if (!s.mousewheel.event) return false;
            s.container.on(s.mousewheel.event, handleMousewheel);
            return true;
        };
        

        /*=========================
          Parallax
          ===========================*/
        function setParallaxTransform(el, progress) {
            el = $(el);
            var p, pX, pY;
            var rtlFactor = s.rtl ? -1 : 1;
        
            p = el.attr('data-swiper-parallax') || '0';
            pX = el.attr('data-swiper-parallax-x');
            pY = el.attr('data-swiper-parallax-y');
            if (pX || pY) {
                pX = pX || '0';
                pY = pY || '0';
            }
            else {
                if (s.isHorizontal()) {
                    pX = p;
                    pY = '0';
                }
                else {
                    pY = p;
                    pX = '0';
                }
            }
        
            if ((pX).indexOf('%') >= 0) {
                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
            }
            else {
                pX = pX * progress * rtlFactor + 'px' ;
            }
            if ((pY).indexOf('%') >= 0) {
                pY = parseInt(pY, 10) * progress + '%';
            }
            else {
                pY = pY * progress + 'px' ;
            }
        
            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
        }
        s.parallax = {
            setTranslate: function () {
                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    setParallaxTransform(this, s.progress);
        
                });
                s.slides.each(function () {
                    var slide = $(this);
                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
                        setParallaxTransform(this, progress);
                    });
                });
            },
            setTransition: function (duration) {
                if (typeof duration === 'undefined') duration = s.params.speed;
                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
                    var el = $(this);
                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    el.transition(parallaxDuration);
                });
            }
        };
        

        /*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/
        s._plugins = [];
        for (var plugin in s.plugins) {
            var p = s.plugins[plugin](s, s.params[plugin]);
            if (p) s._plugins.push(p);
        }
        // Method to call all plugins event/method
        s.callPlugins = function (eventName) {
            for (var i = 0; i < s._plugins.length; i++) {
                if (eventName in s._plugins[i]) {
                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        };

        /*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/
        function normalizeEventName (eventName) {
            if (eventName.indexOf('on') !== 0) {
                if (eventName[0] !== eventName[0].toUpperCase()) {
                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
                }
                else {
                    eventName = 'on' + eventName;
                }
            }
            return eventName;
        }
        s.emitterEventListeners = {
        
        };
        s.emit = function (eventName) {
            // Trigger callbacks
            if (s.params[eventName]) {
                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
            }
            var i;
            // Trigger events
            if (s.emitterEventListeners[eventName]) {
                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
            // Trigger plugins
            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        };
        s.on = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
            s.emitterEventListeners[eventName].push(handler);
            return s;
        };
        s.off = function (eventName, handler) {
            var i;
            eventName = normalizeEventName(eventName);
            if (typeof handler === 'undefined') {
                // Remove all handlers for such event
                s.emitterEventListeners[eventName] = [];
                return s;
            }
            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
            }
            return s;
        };
        s.once = function (eventName, handler) {
            eventName = normalizeEventName(eventName);
            var _handler = function () {
                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                s.off(eventName, _handler);
            };
            s.on(eventName, _handler);
            return s;
        };

        // Accessibility tools
        s.a11y = {
            makeFocusable: function ($el) {
                $el.attr('tabIndex', '0');
                return $el;
            },
            addRole: function ($el, role) {
                $el.attr('role', role);
                return $el;
            },
        
            addLabel: function ($el, label) {
                $el.attr('aria-label', label);
                return $el;
            },
        
            disable: function ($el) {
                $el.attr('aria-disabled', true);
                return $el;
            },
        
            enable: function ($el) {
                $el.attr('aria-disabled', false);
                return $el;
            },
        
            onEnterKey: function (event) {
                if (event.keyCode !== 13) return;
                if ($(event.target).is(s.params.nextButton)) {
                    s.onClickNext(event);
                    if (s.isEnd) {
                        s.a11y.notify(s.params.lastSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.nextSlideMessage);
                    }
                }
                else if ($(event.target).is(s.params.prevButton)) {
                    s.onClickPrev(event);
                    if (s.isBeginning) {
                        s.a11y.notify(s.params.firstSlideMessage);
                    }
                    else {
                        s.a11y.notify(s.params.prevSlideMessage);
                    }
                }
                if ($(event.target).is('.' + s.params.bulletClass)) {
                    $(event.target)[0].click();
                }
            },
        
            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
        
            notify: function (message) {
                var notification = s.a11y.liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            },
            init: function () {
                // Setup accessibility
                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
                    s.a11y.makeFocusable(s.nextButton);
                    s.a11y.addRole(s.nextButton, 'button');
                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
                }
                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
                    s.a11y.makeFocusable(s.prevButton);
                    s.a11y.addRole(s.prevButton, 'button');
                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
                }
        
                $(s.container).append(s.a11y.liveRegion);
            },
            initPagination: function () {
                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
                    s.bullets.each(function () {
                        var bullet = $(this);
                        s.a11y.makeFocusable(bullet);
                        s.a11y.addRole(bullet, 'button');
                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
                    });
                }
            },
            destroy: function () {
                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
            }
        };
        

        /*=========================
          Init/Destroy
          ===========================*/
        s.init = function () {
            if (s.params.loop) s.createLoop();
            s.updateContainerSize();
            s.updateSlidesSize();
            s.updatePagination();
            if (s.params.scrollbar && s.scrollbar) {
                s.scrollbar.set();
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.enableDraggable();
                }
            }
            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
                if (!s.params.loop) s.updateProgress();
                s.effects[s.params.effect].setTranslate();
            }
            if (s.params.loop) {
                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
            }
            else {
                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
                if (s.params.initialSlide === 0) {
                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
                    if (s.lazy && s.params.lazyLoading) {
                        s.lazy.load();
                        s.lazy.initialImageLoaded = true;
                    }
                }
            }
            s.attachEvents();
            if (s.params.observer && s.support.observer) {
                s.initObservers();
            }
            if (s.params.preloadImages && !s.params.lazyLoading) {
                s.preloadImages();
            }
            if (s.params.autoplay) {
                s.startAutoplay();
            }
            if (s.params.keyboardControl) {
                if (s.enableKeyboardControl) s.enableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.enableMousewheelControl) s.enableMousewheelControl();
            }
            if (s.params.hashnav) {
                if (s.hashnav) s.hashnav.init();
            }
            if (s.params.a11y && s.a11y) s.a11y.init();
            s.emit('onInit', s);
        };
        
        // Cleanup dynamic styles
        s.cleanupStyles = function () {
            // Container
            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
        
            // Wrapper
            s.wrapper.removeAttr('style');
        
            // Slides
            if (s.slides && s.slides.length) {
                s.slides
                    .removeClass([
                      s.params.slideVisibleClass,
                      s.params.slideActiveClass,
                      s.params.slideNextClass,
                      s.params.slidePrevClass
                    ].join(' '))
                    .removeAttr('style')
                    .removeAttr('data-swiper-column')
                    .removeAttr('data-swiper-row');
            }
        
            // Pagination/Bullets
            if (s.paginationContainer && s.paginationContainer.length) {
                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
            }
            if (s.bullets && s.bullets.length) {
                s.bullets.removeClass(s.params.bulletActiveClass);
            }
        
            // Buttons
            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
        
            // Scrollbar
            if (s.params.scrollbar && s.scrollbar) {
                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
            }
        };
        
        // Destroy
        s.destroy = function (deleteInstance, cleanupStyles) {
            // Detach evebts
            s.detachEvents();
            // Stop autoplay
            s.stopAutoplay();
            // Disable draggable
            if (s.params.scrollbar && s.scrollbar) {
                if (s.params.scrollbarDraggable) {
                    s.scrollbar.disableDraggable();
                }
            }
            // Destroy loop
            if (s.params.loop) {
                s.destroyLoop();
            }
            // Cleanup styles
            if (cleanupStyles) {
                s.cleanupStyles();
            }
            // Disconnect observer
            s.disconnectObservers();
            // Disable keyboard/mousewheel
            if (s.params.keyboardControl) {
                if (s.disableKeyboardControl) s.disableKeyboardControl();
            }
            if (s.params.mousewheelControl) {
                if (s.disableMousewheelControl) s.disableMousewheelControl();
            }
            // Disable a11y
            if (s.params.a11y && s.a11y) s.a11y.destroy();
            // Destroy callback
            s.emit('onDestroy');
            // Delete instance
            if (deleteInstance !== false) s = null;
        };
        
        s.init();
        

    
        // Return swiper instance
        return s;
    };
    

    /*==================================================
        Prototype
    ====================================================*/
    Swiper.prototype = {
        isSafari: (function () {
            var ua = navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function (arr) {
            return Object.prototype.toString.apply(arr) === '[object Array]';
        },
        /*==================================================
        Browser
        ====================================================*/
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
        },
        /*==================================================
        Devices
        ====================================================*/
        device: (function () {
            var ua = navigator.userAgent;
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: ipad || iphone || ipod,
                android: android
            };
        })(),
        /*==================================================
        Feature Detection
        ====================================================*/
        support: {
            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
            })(),
    
            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
                var div = document.createElement('div').style;
                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
            })(),
    
            flexbox: (function () {
                var div = document.createElement('div').style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i++) {
                    if (styles[i] in div) return true;
                }
            })(),
    
            observer: (function () {
                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
            })()
        },
        /*==================================================
        Plugins
        ====================================================*/
        plugins: {}
    };
    

    /*===========================
     Get Dom libraries
     ===========================*/
    var swiperDomPlugins = ['jQuery', 'Zepto', 'Dom7'];
    for (var i = 0; i < swiperDomPlugins.length; i++) {
    	if (window[swiperDomPlugins[i]]) {
    		addLibraryPlugin(window[swiperDomPlugins[i]]);
    	}
    }
    // Required DOM Plugins
    var domLib;
    if (typeof Dom7 === 'undefined') {
    	domLib = window.Dom7 || window.Zepto || window.jQuery;
    }
    else {
    	domLib = Dom7;
    }

    /*===========================
    Add .swiper plugin from Dom libraries
    ===========================*/
    function addLibraryPlugin(lib) {
        lib.fn.swiper = function (params) {
            var firstInstance;
            lib(this).each(function () {
                var s = new Swiper(this, params);
                if (!firstInstance) firstInstance = s;
            });
            return firstInstance;
        };
    }
    
    if (domLib) {
        if (!('transitionEnd' in domLib.fn)) {
            domLib.fn.transitionEnd = function (callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i, j, dom = this;
                function fireCallBack(e) {
                    /*jshint validthis:true */
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            };
        }
        if (!('transform' in domLib.fn)) {
            domLib.fn.transform = function (transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
                }
                return this;
            };
        }
        if (!('transition' in domLib.fn)) {
            domLib.fn.transition = function (duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            };
        }
    }

    window.Swiper = Swiper;
})();
/*===========================
Swiper AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Swiper;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Swiper;
    });
}
//# sourceMappingURL=maps/swiper.jquery.js.map

/* ===============================================================================
************ Swiper ************
=============================================================================== */
/* global $:true */

+function ($) {
  "use strict";

  var defaults;

  $.fn.swiper = function(params) {
    return this.each(function() {
      if(!this) return;
      var $this = $(this);
      var swiper = $this.data("swiper");
      if(!swiper) $this.data("swiper", new Swiper(this, $.extend({}, defaults, params))); 
      return swiper;
    });
  }

  defaults = $.fn.swiper.prototype.defaults = {
    pagination: ".swiper-pagination"
  };

}($);

/* global $:true */
+ function($) {

  var defaults;

  var Photos = function(config) {
    this.initConfig(config);
    this.index = 0;
  }

  Photos.prototype = {
    initConfig: function (config) {
      this.config = $.extend({}, defaults, config);
      this.activeIndex = this.lastActiveIndex = this.config.initIndex;

      this.config.items = this.config.items.map(function(d, i) {
        if(typeof d === typeof 'a') {
          return {
            image: d,
            caption: ''
          }
        }
        return d;
      });

      this.tpl = $.t7.compile(this.config.tpl);
      if(this.config.autoOpen) this.open();
    },

    open: function (index) {
      if (this._open) return false;
      if (!this.modal) {
        this.modal = $(this.tpl(this.config)).appendTo(document.body);
        this.container = this.modal.find('.swiper-container');
        this.wrapper = this.modal.find('.swiper-wrapper');

        var hammer = new Hammer(this.container[0]);
        hammer.get('pinch').set({ enable: true });
        hammer.on('pinchstart', $.proxy(this.onGestureStart, this));
        hammer.on('pinchmove', $.proxy(this.onGestureChange, this));
        hammer.on('pinchend', $.proxy(this.onGestureEnd, this));
        this.modal.on($.touchEvents.start, $.proxy(this.onTouchStart, this));
        this.modal.on($.touchEvents.move, $.proxy(this.onTouchMove, this));
        this.modal.on($.touchEvents.end, $.proxy(this.onTouchEnd, this));

        //init index
        this.wrapper.transition(0);
        this.wrapper.transform('translate3d(-' + $(window).width()*this.config.initIndex + 'px,0,0)');
        this.container.find('.caption-item').eq(this.config.initIndex).addClass('active');
        this.container.find('.swiper-pagination-bullet').eq(this.config.initIndex).addClass('swiper-pagination-bullet-active');
      }

      var self = this;
      this.modal.show().height();
      this.modal.addClass('weui-photo-browser-modal-visible');
      this.container.addClass('swiper-container-visible').transitionEnd(function() {
        self.initParams();
        if(self.config.onOpen) {
          self.config.onOpen.call(self);
        }
      });

      this._open = true;
      if(index !== undefined) {
        this.slideTo(index, 0);
      }
    },

    close: function() {
      this.container.transitionEnd($.proxy(function() {
        this.modal.hide();
        this._open = false;
        if(this.config.onClose) this.config.onClose.call(this);
      }, this));
      this.container.removeClass('swiper-container-visible');
      this.modal.removeClass('weui-photo-browser-modal-visible');
    },

    initParams: function () {
      if(this.containerHeight) return false;

      this.windowWidth = $(window).width();
      this.containerHeight = this.container.height();
      this.containerWidth = this.container.width();

      this.touchStart = {};

      this.wrapperTransform = 0;
      this.wrapperLastTransform = - $(window).width()*this.config.initIndex;
      this.wrapperDiff = 0;

      this.lastScale = 1;
      this.currentScale = 1;

      this.imageLastTransform = { x: 0, y: 0 };
      this.imageTransform = { x: 0, y: 0 };
      this.imageDiff = { x: 0, y: 0 };
      this.imageLastDiff = { x: 0, y: 0 };
    },

    onTouchStart: function (e) {
      if(this.scaling) return false;
      this.touching = true;
      this.touchStart = $.getTouchPosition(e);
      this.touchMove = null;
      this.touchStartTime = + new Date;
      this.wrapperDiff = 0;
      this.breakpointPosition = null;
    },

    onTouchMove: function (e) {
      if(!this.touching || this.scaling) return false;

      e.preventDefault();

      if(this.gestureImage) {
        var rect = this.gestureImage[0].getBoundingClientRect();
        if (rect.left >= 0 || rect.right <= this.windowWidth) {
          this.overflow = true;
        } else {
          this.overflow = false;
        }
      } else {
        this.oveflow = false;
      }
      var p = this.touchMove = $.getTouchPosition(e);
      if(this.currentScale === 1 || this.overflow) {
        if(this.breakpointPosition) {
          this.wrapperDiff = p.x - this.breakpointPosition.x;
        } else {
          this.wrapperDiff = p.x - this.touchStart.x;
        }
        if(this.activeIndex === 0 && this.wrapperDiff > 0) this.wrapperDiff = Math.pow(this.wrapperDiff, .8);
        if(this.activeIndex === this.config.items.length - 1 && this.wrapperDiff < 0) this.wrapperDiff = - Math.pow(-this.wrapperDiff, .8);
        this.wrapperTransform = this.wrapperLastTransform + this.wrapperDiff;
        this.doWrapperTransform();
      } else {
        var img = this.gestureImage;
        this.imageDiff = {
          x: p.x - this.touchStart.x,
          y: p.y - this.touchStart.y
        }

        this.imageTransform = {
          x: this.imageDiff.x + this.imageLastTransform.x,
          y: this.imageDiff.y + this.imageLastTransform.y
        };
        this.doImageTransform();

        this.breakpointPosition = p;

        this.imageLastDiff = this.imageDiff;
      }
    },

    onTouchEnd: function (e) {
      if(!this.touching) return false;
      this.touching = false;
      if(this.scaling) return false;
      var duration = (+ new Date) - this.touchStartTime;

      if(duration < 200 && (!this.touchMove || Math.abs(this.touchStart.x - this.touchMove.x) <= 2 && Math.abs(this.touchStart.y - this.touchMove.y) <= 2)) {
        this.onClick();
        return;
      }
      if(this.wrapperDiff > 0) {
        if(this.wrapperDiff > this.containerWidth/2 || (this.wrapperDiff > 20 && duration < 300)) {
          this.slidePrev();
        } else {
          this.slideTo(this.activeIndex);
        }
      } else {
        if(- this.wrapperDiff > this.containerWidth/2 || (-this.wrapperDiff > 20 && duration < 300)) {
          this.slideNext();
        } else {
          this.slideTo(this.activeIndex);
        }
      }

      this.imageLastTransform = this.imageTransform;

      this.adjust();
    },

    onClick: function () {
      var self = this;
      if (this._lastClickTime && ( + new Date - this._lastClickTime < 300)) {
        this.onDoubleClick();
        clearTimeout(this._clickTimeout);
      } else {
        this._clickTimeout = setTimeout(function () {
          self.close();
        }, 300);
      }
      this._lastClickTime = + new Date;
    },

    onDoubleClick: function () {
      this.gestureImage = this.container.find('.swiper-slide').eq(this.activeIndex).find('img');
      this.currentScale = this.currentScale > 1 ? 1 : 2;
      this.doImageTransform(200); 
      this.adjust();
    },

    onGestureStart: function (e) {
      this.scaling = true;
      this.gestureImage = this.container.find('.swiper-slide').eq(this.activeIndex).find('img');
    },

    onGestureChange: function (e) {
      var s = this.lastScale * e.scale;
      if (s > this.config.maxScale) {
        s = this.config.maxScale + Math.pow((s - this.config.maxScale), 0.5);
      } else if (s < 1) {
        s = Math.pow(s, .5);
      }
      this.currentScale = s;
      this.doImageTransform();
    },

    onGestureEnd: function (e) {
      if (this.currentScale > this.config.maxScale) {
        this.currentScale = this.config.maxScale;
        this.doImageTransform(200);
      } else if (this.currentScale < 1) {
        this.currentScale = 1;
        this.doImageTransform(200);
      }
      this.lastScale = this.currentScale;
      this.scaling = false;
      this.adjust();
    },

    doWrapperTransform: function(duration, callback) {
      this.wrapper.transitionEnd(function() {
        callback && callback();
      });
      this.wrapper.transition(duration || 0).transform('translate3d(' + this.wrapperTransform + 'px, 0, 0)');
    },

    doImageTransform: function(duration, callback) {
      if(!this.gestureImage) return;
      this.gestureImage.transition(duration || 0).transform('translate3d(' + this.imageTransform.x + 'px,' + this.imageTransform.y + 'px, 0) scale(' + this.currentScale + ')');
      this._needAdjust = true;
    },

    adjust: function() {
      if(!this._needAdjust) return false;
      var img = this.gestureImage;
      if(!img) return false;
      if(this.currentScale === 1) {
        this.imageTransform = this.imageLastDiff =  {x:0,y:0};
        this.doImageTransform(200);
        return;
      }

      var rect = img[0].getBoundingClientRect();

      //调整上下
      if(rect.height < this.containerHeight) {  // 如果高度没容器高，则自动居中
        this.imageTransform.y = this.imageLastTransform.y = 0;
      } else {  //如果比容器高，那么要保证上下不能有空隙
        if(rect.top > 0) this.imageTransform.y = this.imageTransform.y - rect.top;
        else if(rect.bottom < this.containerHeight) this.imageTransform.y = this.imageTransform.y + this.containerHeight - rect.bottom;
      }

      this.doImageTransform(200);
      this._needAdjust = false; // must at last line, because doImageTransform will set this._needAdjust true
    },

    slideTo: function(index, duration) {
      if(index < 0) index = 0;
      if(index > this.config.items.length-1) index = this.config.items.length - 1;
      this.lastActiveIndex = this.activeIndex;
      this.activeIndex = index;
      this.wrapperTransform = - (index * this.containerWidth);
      this.wrapperLastTransform = this.wrapperTransform;
      this.doWrapperTransform(duration || 200, $.proxy(function() {
        if(this.lastActiveIndex === this.activeIndex) return false; // active index not change
        this.container.find('.caption-item.active').removeClass('active');
        this.container.find('.swiper-slide-active').removeClass('swiper-slide-active');
        this.container.find('.swiper-pagination-bullet-active').removeClass('swiper-pagination-bullet-active');
        this.container.find('.caption-item').eq(this.activeIndex).addClass('active');
        this.container.find('.swiper-slide').eq(this.activeIndex).addClass('swiper-slide-active');
        this.container.find('.swiper-pagination-bullet').eq(this.activeIndex).addClass('swiper-pagination-bullet-active');

        //reset image transform
        this.container.find('.swiper-slide img[style]').transition(0).transform('translate3d(0,0,0) scale(1)');

        this.lastScale = 1;
        this.currentScale = 1;

        this.imageLastTransform = { x: 0, y: 0 };
        this.imageTransform = { x: 0, y: 0 };
        this.imageDiff = { x: 0, y: 0 };
        this.imageLastDiff = { x: 0, y: 0 };

        if(this.config.onSlideChange) {
          this.config.onSlideChange.call(this, this.activeIndex);
        }

      }, this));
    },
    slideNext: function() {
      return this.slideTo(this.activeIndex+1);
    },
    slidePrev: function() {
      return this.slideTo(this.activeIndex-1);
    }
  }

  defaults = Photos.prototype.defaults = {
    items: [],
    autoOpen: false, //初始化完成之后立刻打开
    onOpen: undefined,
    onClose: undefined,
    initIndex: 0, //打开时默认显示第几张
    maxScale: 3,
    onSlideChange: undefined,
    tpl: '<div class="weui-photo-browser-modal">\
            <div class="swiper-container">\
              <div class="swiper-wrapper">\
                {{#items}}\
                <div class="swiper-slide">\
                  <div class="photo-container">\
                    <img src="{{image}}" />\
                  </div>\
                </div>\
                {{/items}}\
              </div>\
              <div class="caption">\
                {{#items}}\
                <div class="caption-item caption-item-{{@index}}">{{caption}}</div>\
                {{/items}}\
              </div>\
              <div class="swiper-pagination swiper-pagination-bullets">\
                {{#items}}\
                <span class="swiper-pagination-bullet"></span>\
                {{/items}}\
              </div>\
            </div>\
          </div>'
  }

  $.photoBrowser = function(params) {
    return new Photos(params);
  }
}($);

//# sourceMappingURL=all.js.map
