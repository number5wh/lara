@extends('layouts.layout')
@section('title')
    设备分配
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>
    </div>
@endsection
@section('main')
    <div align="center">为{{$femail}}设备分配</div>
    <?php
    $num = $equip==null?0:count($equip);
    $hostName = array_keys($equip);?>
    <form action="{{url('/distribute/setEquip')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <input type="text" name="to" value="{{$id}}" hidden="hidden"/>
        <?php
        for($i=0;$i<$num;$i++){
?>
        @if(count($equip[$hostName[$i]]) != 0)
        <div class="weui_cells_title"><b class="slider">{{$hostName[$i]}}&nbsp;&nbsp;&nbsp;</b>
            <input type='checkbox'  class='checkedAll1'/>{{count($equip[$hostName[$i]])}}个设备</div>
        @elseif(count($equip[$hostName[$i]]) == 0)
        <div class="weui_cells_title"><b class="slider">{{$hostName[$i]}}&nbsp;&nbsp;&nbsp;</b>
            <input type='checkbox' class='checkedAll1' disabled/>
           {{count($equip[$hostName[$i]])}}个设备</div>
        @endif
        <div class="weui_cells weui_cells_access" style='display:none'>
            <?php
            for($j=0;$j<count($equip[$hostName[$i]]);$j++){
            if(!in_array($equip[$hostName[$i]][$j]['id'],$equipId)){
            ?>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_bd weui_cell_primary">
                    <p><input type="checkbox" name="equip_id[]"  value="{{$equip[$hostName[$i]][$j]['id']}}">
                        {{$equip[$hostName[$i]][$j]['name']}}</p>
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
            ?>
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p><input type="submit" class="weui_btn weui_btn weui_btn_primary" value="确定"/>
                        </p> </div>
                </a>

    </form>
@endsection