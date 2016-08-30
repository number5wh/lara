@extends('layouts.layout')
@section('title')
    添加主机
    @endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>
    </div>
@endsection
@section('main')
    <header class='demos-header'>
        <h1 class="demos-title">添加主机</h1>
    </header>

        <div class="weui_cells weui_cells_form" id="addHost">
            {{csrf_field()}}
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">主机id</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" name="id" placeholder="请输入主机id">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">主机名称</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" name="name" placeholder="为主机起个名称">
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="password" name="password" placeholder="请输入密码">
                </div>
            </div>
            <div class="weui_btn_area">
                <input type="submit" class="weui_btn weui_btn_primary" id="addHostBtn" value="确定"/>
            </div>
            </div>
@endsection
