@extends('layouts.layout')
@section('title')
    设备类型
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-retweet bk_back" onclick="window.location.href='{{url('/equip/changeWatch/0')}}'"></span>
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
    <div class="weui_cells_title"><div class="slider list">灯
            <span class="pull-right">{{count($light)}}</span>
        </div></div>
    <div class="weui_cells weui_cells_access" style='display: none;'>
    <?php
        for($i=0;$i<count($light);$i++){
    ?>
        <a class="weui_cell" href="{{url("/equipset/set/id/".$light[$i]['id']."/type/".$light[$i]['type_id'])}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>{{$light[$i]['name']}}</p>
            </div>
        </a>
    <?php }   ?>
    </div>

    <div class="weui_cells_title"><div class="slider list">空调
            <span class="pull-right">{{count($air)}}</span>
        </div></div>
    <div class="weui_cells weui_cells_access" style='display: none;'>
        <?php
        for($j=0;$j<count($air);$j++){
        ?>
            <a class="weui_cell" href="{{url("/equipset/set/id/".$air[$j]['id']."/type/".$air[$j]['type_id'])}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>{{$air[$j]['name']}}</p>
            </div>
        </a>
        <?php }   ?>
    </div>

    <div class="weui_cells_title"><div class="slider list">电视
            <span class="pull-right">{{count($tv)}}</span>
        </div></div>
    <div class="weui_cells weui_cells_access" style='display: none;'>
        <?php
        for($m=0;$m<count($tv);$m++){
        ?>
            <a class="weui_cell" href="{{url("/equipset/set/id/".$tv[$m]['id']."/type/".$tv[$m]['type_id'])}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>{{$tv[$m]['name']}}</p>
            </div>
        </a>
        <?php }   ?>
    </div>

    <div class="weui_cells_title"><div class="slider list">风扇
            <span class="pull-right">{{count($fan)}}</span>
        </div></div>
    <div class="weui_cells weui_cells_access" style='display: none;'>
        <?php
        for($n=0;$i<count($fan);$n++){
        ?>
            <a class="weui_cell" href="{{url("/equipset/set/id/".$fan[$n]['id']."/type/".$fan[$n]['type_id'])}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>{{$fan[$n]['name']}}</p>
            </div>
        </a>
        <?php }   ?>
    </div>
@endsection
