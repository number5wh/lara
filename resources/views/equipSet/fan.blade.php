@extends('layouts.layout')
@section('title')
    设备类型
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
            <div class="status2zero">风扇未启动</div>
        @elseif($switch[0]['status'] == 1)
            <div class="wind-speed">
            @if($equipSetInf[0]['speed'] == 0)
            <span id="showWindSpeed"><input type="text" name="speed" value="0" hidden>风速:低</span>
            @elseif($equipSetInf[0]['speed'] == 1)
            <span id="showWindSpeed"><input type="text" name="speed" value="1" hidden>风速:中</span>
            @elseif($equipSetInf[0]['speed'] == 2)
            <span id="showWindSpeed"><input type="text" name="speed" value="2" hidden>风速:高</span>
            @endif
                @if($equipSetInf[0]['swing_wind'] == 0)
                    <sub class="sub" id="show-swing-wind">
                        <input type="text" name="swing-wind" value="0" hidden>
                        左右摆风 <span class="glyphicon glyphicon-remove-circle"></span></sub>
                @elseif($equipSetInf[0]['swing_wind'] == 1)
                    <sub class="sub" id="show-swing-wind">
                        <input type="text" name="swing-wind" value="1" hidden>
                        左右摆风 <span class="glyphicon glyphicon-ok-circle"></span></sub>
                @endif
            </div>

        @endif
    </div>
    <div class="set">
        <div class="row row-set-50">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 row-column">
                <a href="{{url('/equipset/onoff/id/'.$equipIdName[0]['id'])}}" type="button" style="color: inherit;display: block">开关</a>
            </div>
        </div>
        <div class="row row-set-50">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column" id="setFanSpeed" >
                <a type="button" style="color: inherit">风速</a>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column" id="setFanSwing">
                <a  type="button" style="color: inherit">左右摆风</a>
            </div>
        </div>


    </div>
    <script>
        $(function(){
            var height = $(".row-set-50").css('height');
            $(".row-set-50").css('line-height',height);
            $(".row-column").css('height',height);
            $(".row-column").css('line-height',height);
        })
    </script>
@endsection
