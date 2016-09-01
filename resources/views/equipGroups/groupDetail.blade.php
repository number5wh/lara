@extends('layouts.layout')
@section('title')
    分组详情
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="window.location.href='{{url('/equipGroup')}}'"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="{{$name}}" id="groupDetailPage" class="bk_nav_menu" style="background: white"/>
    </div>
    <style>
        .weui-row {
            margin-top: 10px;
        }
        [class*="weui-col-"] {
            margin:10px;
            border: 1px solid #ccc;
            height: 70px;
            line-height: 70px;
            text-align: center;

        }

    </style>
@endsection
@section('main')
    <div align="center"><a class="weui_btn weui_btn_mini weui_btn_primary" href="{{url("/equipGroup/group/$name/allSwitch/1")}}">全部开启</a>
        &nbsp;&nbsp;&nbsp;&nbsp;<a class="weui_btn weui_btn_mini weui_btn_default" href="{{url("/equipGroup/group/$name/allSwitch/0")}}">全部关闭</a>
    </div>
    <div class="weui-row">
    <?php
           for($i=0;$i<count($equips);$i++){
               ?>
        <a class="weui-col-40" style="color: inherit" id="singleSwitch">
            {{$equips[$i]['equipInfo'][0]['name']}}:

            <input type="text" hidden="hidden" name="url" value="{{url('/equipGroup/singleSwitch')}}"/>
            <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
            <input type="text" name="equip_id" value=" {{$equips[$i]['equipInfo'][0]['id']}}" hidden="hidden"/>

            @if($equips[$i]['equipInfo'][0]['status'] == 0)
            <input type='text' name='status' value='1' hidden='hidden'/>
            关
                @else
                <input type='text' name='status' value='0' hidden='hidden'/>
                开
                @endif
        </a>
        <?php }?>
        <a class="weui-col-40" href="{{url('/equipGroup/group/'.$name.'/addEquip')}}" style="color: inherit">+</a>
        </div>


@endsection