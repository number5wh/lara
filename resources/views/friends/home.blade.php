@extends('layouts.layout')
@section('title')
    联系人首页
@endsection
@section('header')
    <div class="weui_navbar_item">

    </div>
    <div class="weui_navbar_item">
        联系人首页
    </div>
    <div class="weui_navbar_item" style="text-align: right;margin-right: 20px">
        <img src="{{url('images/icon_nav_cell.png')}}" alt="" style="width: 25px;height: 25px;">
    </div>
    @endsection
@section('main')
    <div class="weui_search_bar" id="search_bar">
        <form class="weui_search_outer">
            <div class="weui_search_inner">
                <i class="weui_icon_search"></i>
                <input type="search" class="weui_search_input" id="search_input" placeholder="搜索" required/>
                <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
            </div>
            <label for="search_input" class="weui_search_text" id="search_text">
                <i class="weui_icon_search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui_search_cancel" id="search_cancel">取消</a>
    </div>
    @endsection
