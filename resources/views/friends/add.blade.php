@extends('layouts.layout')
@section('title')
    添加好友
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
        <h1 class="demos-title">添加好友</h1>
    </header>

    <form action="{{url('/friend/add')}}" method="post">


        
    <div class="weui_cells weui_cells_form">
        {{csrf_field()}}
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">email地址</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="email" name="email" placeholder="请输入对方email地址">
            </div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">选择分组</label></div>
            <div class="weui_cell weui_cell_select">
                <div class="weui_cell_bd weui_cell_primary">
                    <select class="weui_select" name="group">
                        @foreach($groups as $group)
                            <option value="{{$group}}">{{$group}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
        </div>
            <div class="weui_btn_area">
                <input type="submit" class="weui_btn weui_btn_primary" href="javascript:" id="showTooltips" value="确定"/>
            </div>

            </div>
    </form>

@endsection