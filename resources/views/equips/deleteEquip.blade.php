@extends('layouts.layout')
@section('title')
    移除设备
@endsection
@section('header')
    <div class="bk_nav">
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
            <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="equipPageAdmin"></span>
        @else
            <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="equipPage"></span>
        @endif
        {{--<img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>--}}
    </div>
@endsection
@section('main')
    <?php
        $num = $equip==null?0:count($equip);
        $hostName = array_keys($equip);?>
    <form action="{{url('/equip/delete')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
    <?php
        for($i=0;$i<$num;$i++){
        ?>
        <div class="weui_cells_title"><div class="slider1 list">{{$hostName[$i]}}&nbsp;&nbsp;&nbsp;</div>
            <span style="color: #999999">全选</span><input type='checkbox' class='checkedAll1'/>{{count($equip[$hostName[$i]])}}个设备</div>
        <div class="weui_cells weui_cells_access" style='display: none;'>
            <?php
            for($j=0;$j<count($equip[$hostName[$i]]);$j++){
         ?>
            <a class="weui_cell" href="javascript:;">
                <div class="weui_cell_bd weui_cell_primary">
                    <p><input type="checkbox" name="equip_id[]" value="{{$equip[$hostName[$i]][$j]['id']}}">{{$equip[$hostName[$i]][$j]['name']}}</p>
                </div>
            </a>

            <?php
            }
            ?>
            </div>
       <?php }?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <input type="submit"  class="weui_btn weui_btn weui_btn_warn" value="删除"/>
            </div>
        </a>

    </form>
@endsection