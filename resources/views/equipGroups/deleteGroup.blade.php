@extends('layouts.layout')
@section('title')
   删除分组
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>

    </div>
@endsection
@section('main')
    <?php
    $num = $group==null?0:count($group);
    if($num == 0){
       ?>
    <script>alert('您还没有分组！');window.location.href='/equipGroup';</script>
    <?php
    }
    ?>
    <br/><br/>
    <form action="{{url('/equipGroup/delete')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
    <?php

    for($i=0;$i<$num;$i++){
        ?>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p>  <input type="checkbox" name="groupId[]" value="{{$group[$i]['id']}}"/>
                    {{$group[$i]['name']}}</p>
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