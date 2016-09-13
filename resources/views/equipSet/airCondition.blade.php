@extends('layouts.layout')
@section('title')
    {{$equipIdName[0]['name']}}
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="window.location.href='{{url('/equip')}}'"></span>
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
            <span class="bk_nav_menu glyphicon glyphicon-cog" id="equipSet"></span>
        @endif
        {{--<img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>--}}
    </div>
@endsection
@section('main')
    <div class="showEquipSet">
        @if($switch[0]['status'] == 0)
            <div class="status2zero">空调未启动</div>
        @elseif($switch[0]['status'] == 1)
            <div class="temperature">{{$equipSetInf[0]['temperature']}}<sup class="sup">℃</sup>
                @if($equipSetInf[0]['model'] == 0)
                    <sub class="sub"><span class="glyphicon glyphicon-asterisk"></span> 制冷</sub>
                @elseif($equipSetInf[0]['model'] == 1)
                        <sub class="sub"><span class="glyphicon glyphicon-fire"></span> 制热</sub>
                @elseif($equipSetInf[0]['model'] == 2)
                    <sub class="sub"><span class="glyphicon glyphicon-leaf"></span> 自动</sub>
                @elseif($equipSetInf[0]['model'] == 3)
                    <sub class="sub"><span class="glyphicon glyphicon-refresh"></span> 通风</sub>
                @elseif($equipSetInf[0]['model'] == 4)
                    <sub class="sub"><span class="glyphicon glyphicon-tint"></span> 除湿</sub>
                @endif
            </div>
            <div class="status">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            风速
                            @if($equipSetInf[0]['speed'] == 0)
                                自动
                            @elseif($equipSetInf[0]['speed'] == 1)
                                低
                            @elseif($equipSetInf[0]['speed'] == 2)
                                中
                            @elseif($equipSetInf[0]['speed'] == 3)
                            高
                            @endif
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            @if($equipSetInf[0]['direction'] == 0)
                                <span class="glyphicon glyphicon-arrow-right"></span> 风向 中
                            @elseif($equipSetInf[0]['direction'] == 1)
                                <span class="glyphicon glyphicon-arrow-up"></span> 风向 上
                            @elseif($equipSetInf[0]['direction'] == 2)
                                <span class="glyphicon glyphicon-arrow-down"></span> 风向 下
                            @elseif($equipSetInf[0]['direction'] == 3)
                                <span class="glyphicon glyphicon-random"></span> 风向 扫风
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        @endif
    </div>
    <div class="set">
            <div class="row row-set">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
            </div>
            <div class="row row-set">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
            </div>
            <div class="row row-set">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
            </div>
            <div class="row row-set">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column">
                    666
                </div>
        </div>

    </div>
@endsection
