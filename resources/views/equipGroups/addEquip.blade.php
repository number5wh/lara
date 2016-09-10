@extends('layouts.layout')
@section('title')
    添加设备
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="window.location.href='{{url('/equipGroup')}}'"></span>
        <p class="bk_title"></p>
        <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="quickPage"></span>
    </div>
@endsection
@section('main')
    <header class='demos-header'>
        <h4 class="demos-title">添加设备到{{$name}}</h4>
    </header>
    <?php
    $num = $equip==null?0:count($equip);?>
    <form action="{{url("/equipGroup/addEquip")}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <input type="text" name="name" value="{{$name}}" hidden="hidden"/>
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
                <div class="weui_cells_title"><b class="slider">别人分配的部分&nbsp;&nbsp;&nbsp;</b>
                    <input type='checkbox' class='checkedAll1'/>{{count($equip2)}}个设备</div>
                <div class="weui_cells weui_cells_access" style='display:none'>
                    <?php

                    for($k=0;$k<$num2;$k++){
                        if(!in_array($equip2[$k]['id'],$equipId)){

                    ?>
                    <a class="weui_cell" href="javascript:;">
                        <div class="weui_cell_bd weui_cell_primary">
                            <p><input type="checkbox" name="equip_id[]" value="{{$equip2[$k]['id']}}">{{$equip2[$k]['name']}}</p>
                        </div>
                    </a>
                    <?php
                            }else{
                            ?>
                        <a class="weui_cell" href="javascript:;">
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>{{$equip2[$k]['name']}}(已在分组中)</p>
                            </div>
                        </a>
                        <?php
                        }

                    }
                    echo "</div>";
                    }

                    ?>
        <input type="submit" class="weui_btn weui_btn weui_btn_primary" value="添加"/>
    </form>
@endsection