@extends('layouts.layout')
@section('title')
    个人中心
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>
    </div>
@endsection
@section('main')
    <div class="weui_cells_title">个人信息设置及系统设置</div>
    <div class="weui_cells weui_cells_access">
        <a class="weui_cell" href="{{url('/self/getSelf')}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>查看个人信息</p>
            </div>
            <div class="weui_cell_ft">
            </div>
        </a>
        <a class="weui_cell" href="{{url('/logout')}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>退出登录</p>
            </div>
            <div class="weui_cell_ft">
            </div>
        </a>
    </div>
@endsection
