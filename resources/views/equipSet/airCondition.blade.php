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
    <input type="text" name="equipId" value="{{$equipIdName[0]['id']}}" hidden>
    <input type="text" name="typeId" value="{{$equipIdName[0]['type_id']}}" hidden>
    <input type="text" name="_token" value="{{csrf_token()}}" hidden>
    <div class="showEquipSet">
        @if($switch[0]['status'] == 0)
            <div class="status2zero">空调未启动</div>
        @elseif($switch[0]['status'] == 1)
            <div class="temperature"><span id="showTemperature">{{$equipSetInf[0]['temperature']}}</span><sup class="sup">℃</sup>
                @if($equipSetInf[0]['model'] == 0)
                    <sub class="sub"><span class="glyphicon glyphicon-asterisk"></span>
                        <span id="air-model"><input type="text" value="{{$equipSetInf[0]['model']}}" hidden>制冷</span>
                    </sub>
                @elseif($equipSetInf[0]['model'] == 1)
                        <sub class="sub"><span class="glyphicon glyphicon-fire"></span>
                            <span id="air-model"><input type="text" value="{{$equipSetInf[0]['model']}}" hidden>制热</span>
                        </sub>
                @elseif($equipSetInf[0]['model'] == 2)
                    <sub class="sub"><span class="glyphicon glyphicon-leaf"></span>
                        <span id="air-model"><input type="text" value="{{$equipSetInf[0]['model']}}" hidden>自动</span>
                    </sub>
                @elseif($equipSetInf[0]['model'] == 3)
                    <sub class="sub"><span class="glyphicon glyphicon-refresh"></span>
                        <span id="air-model"><input type="text" value="{{$equipSetInf[0]['model']}}" hidden>通风</span>
                    </sub>
                @elseif($equipSetInf[0]['model'] == 4)
                    <sub class="sub"><span class="glyphicon glyphicon-tint"></span>
                        <span id="air-model"><input type="text" value="{{$equipSetInf[0]['model']}}" hidden>除湿</span>
                    </sub>
                @endif
            </div>
            <div class="status">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="showSpeed">
                            风速
                            @if($equipSetInf[0]['speed'] == 0)
                                <span id="airSpeed"><input type="text" name="speed" value="0" hidden>自动</span>
                            @elseif($equipSetInf[0]['speed'] == 1)
                                <span id="airSpeed"><input type="text" name="speed" value="1" hidden>低</span>
                            @elseif($equipSetInf[0]['speed'] == 2)
                                <span id="airSpeed"><input type="text" name="speed" value="2" hidden>中</span>
                            @elseif($equipSetInf[0]['speed'] == 3)
                                <span id="airSpeed"><input type="text" name="speed" value="3" hidden>高</span>
                            @endif
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="showDirection">
                            @if($equipSetInf[0]['direction'] == 0)
                                <span class="glyphicon glyphicon-arrow-right"></span>
                                <input type="text" name="direction" value="0" hidden>风向 中
                            @elseif($equipSetInf[0]['direction'] == 1)
                                <span class="glyphicon glyphicon-arrow-up"></span>
                                <input type="text" name="direction" value="1" hidden>风向 上
                            @elseif($equipSetInf[0]['direction'] == 2)
                                <span class="glyphicon glyphicon-arrow-down"></span>
                                <input type="text" name="direction" value="2" hidden>风向 下
                            @elseif($equipSetInf[0]['direction'] == 3)
                                <span class="glyphicon glyphicon-random"></span>
                                <input type="text" name="direction" value="3" hidden>风向 扫风
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
                    <a href="{{url('/equipset/onoff/id/'.$equipIdName[0]['id'])}}" type="button" style="color: inherit;display: block">开关</a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column" id="setAirModel">
                    <a  type="button" style="color: inherit">模式</a>
                </div>
            </div>
            <div class="row row-set">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column" id="setAirSpeed" >
                    <a type="button" style="color: inherit">风速</a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column" id="setAirDirection">
                    <a  type="button" style="color: inherit">风向</a>
                </div>
            </div>
            <div class="row row-set">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 row-column" id="setAirTemperatureMinus">
                    <span class="glyphicon glyphicon-minus"></span>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 row-column">
                    <span style="color: #666666">温度</span>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 row-column" id="setAirTemperaturePlus">
                    <span class="glyphicon glyphicon-plus"></span>
                </div>
            </div>
            <div class="row row-set">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 row-column">
                    <a href="" type="button" style="color: inherit">更多</a>
                </div>
        </div>

    </div>
    <script>
        $(function(){
            var height = $(".row-set").css('height');
            $(".row-set").css('line-height',height);
            $(".row-column").css('height',height);
            $(".row-column").css('line-height',height);
        })
    </script>
@endsection
