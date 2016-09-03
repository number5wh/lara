@extends('layouts.layout')
@section('title')
    添加好友分组
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="window.location.href='{{url('/friend')}}'"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>
    </div>
@endsection
@section('main')

    <header class='demos-header'>
        <h1 class="demos-title">添加好友分组</h1>
    </header>

    <form action="{{url('/friendGroup/add')}}" method="post">


        
    <div class="weui_cells weui_cells_form">
        {{csrf_field()}}
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">分组名称</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="text" name="name" placeholder="请输入分组名称">
            </div>
        </div>

            <div class="weui_btn_area">
                <input type="submit" class="weui_btn weui_btn_primary" value="确定"/>
            </div>

            </div>
    </form>

@endsection