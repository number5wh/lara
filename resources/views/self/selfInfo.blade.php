@extends('layouts.layout')
@section('title')
    详细资料
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="history.back(-1)"></span>
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
    </div>
@endsection
@section('main')
    <div class="weui_cells weui_cells_form">
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">昵称</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <label class="weui_input">{{$info['name']}}</label>
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">注册邮箱</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <label class="weui_input">{{$info['email']}}</label>
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">注册时间</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <label class="weui_input">{{$info['created_at']}}</label>
            </div>
        </div>
    </div>
@endsection
