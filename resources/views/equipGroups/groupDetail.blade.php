@extends('layouts.layout')
@section('title')
    分组详情
@endsection
@section('header')
 {{--   <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="window.location.href='{{url('/equipGroup')}}'"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="{{$name}}" id="groupDetailPage" class="bk_nav_menu" style="background: white"/>
    </div>--}}
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="window.location.href='{{url('/equipGroup')}}'"></span>
        <p class="bk_title"></p>
        <span class="bk_nav_menu glyphicon glyphicon-align-justify"  id="groupDetailPage">
           <p hidden>{{$name}}</p>
        </span>
    </div>

@endsection
@section('main')

    <div class="myrow">
    <?php
           for($i=0;$i<count($equips);$i++){
               ?>
        <a class="col-25" style="color: inherit" id="singleSwitch">
            {{$equips[$i]['equipInfo'][0]['name']}}
            @if($equips[$i]['equipInfo'][0]['status'] == 0)
                <input type='text' name='status' value='1' hidden='hidden'/>
                状态：关
            @else
                <input type='text' name='status' value='0' hidden='hidden'/>
                状态：开
            @endif
            <input type="text" hidden="hidden" name="url" value="{{url('/equipGroup/singleSwitch')}}"/>
            <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
            <input type="text" name="equip_id" value=" {{$equips[$i]['equipInfo'][0]['id']}}" hidden="hidden"/>

        </a>
        <?php }?>
        <a class="col-25" href="{{url('/equipGroup/group/'.$name.'/addEquip')}}" style="color: inherit"><span class="glyphicon glyphicon-plus"></span></a>
        </div>
    <div style="clear:both" align="center"><a class="weui_btn weui_btn_mini weui_btn_primary" href="{{url("/equipGroup/group/$name/allSwitch/1")}}">全部开启</a>
        &nbsp;&nbsp;&nbsp;&nbsp;<a class="weui_btn weui_btn_mini weui_btn_default" href="{{url("/equipGroup/group/$name/allSwitch/0")}}">全部关闭</a>
    </div>
@endsection