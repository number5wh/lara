@extends('layouts.layout')
@section('title')
   删除好友分组
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="window.location.href='{{url('/friend')}}'"></span>
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
    </div>
@endsection
@section('main')
    <?php
    $num = $fg==null?0:count($fg);

    ?>
    <form action="{{url('/friendGroup/delete')}}" method="post" id="deleteGroupForm">
        <input type="text" name="_token" value="{{csrf_token()}}"  hidden >
        <input type="text" name="groupId" value="" id="delFGId" hidden>
    <?php

    for($i=0;$i<$num;$i++){
            if($fg[$i]['name'] != '默认'){
        ?>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p> <input type="checkbox" name="gid" value="{{$fg[$i]['id']}}"/>
                      {{$fg[$i]['name']}}</p>
            </div>
        </a>

    <?php
    }}

    ?>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="button" class="weui_btn weui_btn weui_btn_warn" id="deleteFriendGroup"
                          value="删除"/></p>
            </div>
        </a>
    </form>
@endsection