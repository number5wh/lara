@extends('layouts.layout')
@section('title')
    便捷分组设备
@endsection
@section('header')
{{--    <div class="bk_nav">
        <a href="{{url('/equip/changeWatch/1')}}"><img src="{{url('images/change.png')}}" alt="" class="bk_back" style="background: white"/></a>
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
            <img src="{{url('images/add1.png')}}" alt="" id="equipPageAdmin" class="bk_nav_menu" style="background: white"/>
        @else
            <img src="{{url('images/add1.png')}}" alt="" id="equipPage" class="bk_nav_menu" style="background: white"/>
        @endif

    </div>--}}
    <div class="bk_nav">
        <span class="glyphicon glyphicon-retweet bk_back" onclick="window.location.href='{{url('/equip/changeWatch/1')}}'"></span>
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
    @foreach($groupName as $group)
        <div class="weui_cells_title"><span class="slider list">{{$group}}</span></div>
        <div class="weui_cells weui_cells_access" style='display: none;'>
            <?php
            for($i=0;$i<count($equips);$i++){
                if($equips[$i]['name'] == $group){
                    ?>
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>{{$equips[$i]['equipInfo'][0]['name']}}</p>
                    </div>
                </a>
            <?php
                }
            }
            ?>
        </div>

    @endforeach
@endsection