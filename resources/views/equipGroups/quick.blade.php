@extends('layouts.layout')
@section('title')
    便捷分组设备
@endsection
@section('header')
    <div class="bk_nav">
        <a href="{{url('/equip/changeWatch/1')}}"><img src="{{url('images/change.png')}}" alt="" class="bk_back" style="background: white"/></a>
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
            <img src="{{url('images/add1.png')}}" alt="" id="equipPageAdmin" class="bk_nav_menu" style="background: white"/>
        @else
            <img src="{{url('images/add1.png')}}" alt="" id="equipPage" class="bk_nav_menu" style="background: white"/>
        @endif

    </div>
@endsection
@section('main')
    @foreach($groupName as $group)
        <div class="weui_cells_title"><b class="slider">{{$group}}</b></div>
        <div class="weui_cells weui_cells_access" style='display:none'>
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