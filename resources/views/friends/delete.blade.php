@extends('layouts.layout')
@section('title')
    删除好友
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="window.location.href='{{url('/friend')}}'"></span>
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
        <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="friendPage"></span>
        {{--<img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>--}}
    </div>
    @endsection
@section('main')
    <form action="{{url('/friend/delete')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
    <?php
    for($i=0;$i<count($fg);$i++){
        ?>
    <div class="weui_cells_title"><div class="slider list-req">{{$fg[$i]['name']}}</div>
        <span style="color: #999999">全选</span><input type='checkbox' class='checkedAll2'>
        </div>
    <div class="weui_cells weui_cells_access">
        <?php
        for($j=0;$j<count($friends);$j++){
        if(Auth::user()->is_admin == 0){
            if($friends[$j]['group_id'] == $fg[$i]['id']){
            ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="checkbox"  name="id[]" value="{{$friends[$j]['users']}}">{{$friends[$j]['friend_email']}}</p>
            </div>

        </a>
        <?php }}elseif(Auth::user()->is_admin == 1){
                $url = url("/distribute/getDistribute/{$friends[$j]['users']}");
                if($friends[$j]['group_id'] == $fg[$i]['id']){

            ?>
            <a class="weui_cell" href="{{$url}}">
                <div class="weui_cell_bd weui_cell_primary">
                    <p><input type="checkbox" name="id[]" value="{{$friends[$j]['users']}}">{{$friends[$j]['friend_email']}}</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
        <?php }}}

            ?>
    </div>
            <?php
            }
            ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="submit" class="weui_btn weui_btn weui_btn_warn" value="确定"/></p>
            </div>
        </a>
    </form>
@endsection
