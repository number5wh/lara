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
    <?php
    $num = count($equipId);?>
    <form action="{{url('/distribute/deleteEquip2')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <input type="text" name="group_id" value="{{$group[0]['id']}}" hidden="hidden"/>
        <?php
            for($i=0;$i<$num;$i++){
                ?>
        <input type="checkbox" name="equip_id[]" value="{{$equipId[$i]}}"/>{{$equipName[$i]}}<br/>
        <?php
            }

        ?>
        <br><br>
        <input type="submit" value="确定"/>
    </form>
@endsection