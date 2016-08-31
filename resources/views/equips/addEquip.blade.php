@extends('layouts.layout')
@section('title')
    添加设备
@endsection
@section('header')
    <div class="bk_nav">
        <a href="{{url('/equip/changeWatch/0')}}"><img src="{{url('images/change.png')}}" alt="0" class="bk_back" style="background: white"/></a>
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
            <img src="{{url('images/add1.png')}}" alt="" id="equipPageAdmin" class="bk_nav_menu" style="background: white"/>
        @else
            <img src="{{url('images/add1.png')}}" alt="" id="equipPage" class="bk_nav_menu" style="background: white"/>
        @endif

    </div>
@endsection
@section('main')
    <form action="{{url('/equip/add')}}" method="post">
        <div class="weui_cells weui_cells_form">
            {{csrf_field()}}
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">设备名称</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" name="name" placeholder="请输入设备名称">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">选择主机</label></div>
                <div class="weui_cell weui_cell_select">
                    <div class="weui_cell_bd weui_cell_primary">
                        <select class="weui_select" name="host_id">
                            @foreach($hostInf as $host)
                                <option value="{{$host['id']}}">{{$host['name']['name']}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            <div class="weui_btn_area">
                <input type="submit" class="weui_btn weui_btn_primary" href="javascript:"  value="确定"/>
            </div>
        </div>
    </form>
@endsection