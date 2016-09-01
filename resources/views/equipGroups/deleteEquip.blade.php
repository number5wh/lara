@extends('layouts.layout')
@section('title')
    删除设备
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>

    </div>
    @endsection
@section('main')
    <header class='demos-header'>
        <h4 class="demos-title">从{{$name}}中删除设备</h4>
    </header>
    <?php
    $num = $equipId==null?0:count($equipId);?>
    <form action="{{url('/equipGroup/deleteEquip2')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <input type="text" name="name" value="{{$name}}" hidden="hidden"/>
        <?php
            for($i=0;$i<$num;$i++){
                ?>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="checkbox" name="equip_id[]" value="{{$equipId[$i]}}">{{$equipName[$i]}}</p>
            </div>
        </a>
        <?php
            }

        ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p> <input type="submit" class="weui_btn weui_btni weui_btn_warn" value="确定"/></p>
            </div>
        </a>

    </form>
@endsection