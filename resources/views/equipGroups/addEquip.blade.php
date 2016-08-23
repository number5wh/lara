@extends('layouts.layout')
@section('title')
    添加设备到{{$group[0]['name']}}
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="" id="quickPage" class="bk_nav_menu" style="background: white"/>
    </div>
@endsection
@section('main')
    <?php
    $num = $equip==null?0:count($equip);?>
    <form action="{{url("/equipGroup/addEquip")}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <input type="text" name="group_id" value="{{$group[0]['id']}}" hidden="hidden"/>
        <?php
    if($num!=0){
    $hostName = array_keys($equip);
        for($i=0;$i<$num;$i++){
?>
        <div class="weui_cells_title"><b class="slider">{{$hostName[$i]}}&nbsp;&nbsp;&nbsp;</b>
            <input type='checkbox' class='checkedAll1'/>{{count($equip[$hostName[$i]])}}个设备</div>
        <div class="weui_cells weui_cells_access" style='display:none'>
            <?php
            for($j=0;$j<count($equip[$hostName[$i]]);$j++){
                if(!in_array($equip[$hostName[$i]][$j]['id'],$equipId)){
                    ?>
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p><input type="checkbox" name="equip_id[]" value="{{$equip[$hostName[$i]][$j]['id']}}">{{$equip[$hostName[$i]][$j]['name']}}</p>
                    </div>
                </a>
                <?php
                }else{?>
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>{{$equip[$hostName[$i]][$j]['name']}}(已在分组中)</p>
                    </div>
                </a>
                <?php
                }

            }
            echo "</div>";
            }
        }

                $num2 = $equip2==null?0:count($equip2);
                if($num2 != 0){
                ?>
                <div class="weui_cells_title"><b class="slider">别人分配的部分&nbsp;&nbsp;&nbsp;</b><input type='checkbox' class='checkedAll1'/>{{count($equip2)}}个设备</div>
                <div class="weui_cells weui_cells_access" style='display:none'>
                    <?php

                    for($k=0;$k<$num2;$k++){
                    ?>
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p><input type="checkbox" name="equip_id[]" value="{{$equip2[$k]['id']}}">{{$equip2[$k]['name']}}</p>
                        </div>
                    </a>
                    <?php

                    }
                    echo "</div>";
                    }

                    ?>
        <input type="submit" class="weui_btn weui_btn_mini weui_btn_primary" value="添加"/>
    </form>
@endsection