@extends('layouts.layout')
@section('title')
   删除分组
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="window.location.href='{{url('/equipGroup')}}'"/>
        <p class="bk_title"></p>

    </div>
@endsection
@section('main')
    <?php
    $num = $group==null?0:count($group);

    ?>
    <form action="{{url('/equipGroup/delete')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
    <?php

    for($i=0;$i<$num;$i++){
        ?>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p>  <input type="checkbox" name="groupName[]" value="{{$group[$i]}}"/>
                    {{$group[$i]}}</p>
            </div>
        </a>

    <?php
    }

    ?>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="submit" class="weui_btn weui_btn weui_btn_warn" value="删除"/></p>
            </div>
        </a>

    </form>
@endsection