@extends('layouts.layout')
@section('title')
    {{$equipIdName[0]['name']}}
@endsection
@section('style')
    <script src="{{url('js/jquery-ui-1.10.3.mouse_core.js')}}"></script>
    <script src="{{url('js/jquery.ui.touch-punch.js')}}"></script>

    <!-- Optionally enable responsive features in IE8 -->
    <script src="{{url('js/bootstrapslider.min.js')}}"></script>
    <style>
        .slider-bar{
            display:block; width:30px; background-color:brown; position:relative;
        }

        .slider, .slider-bar{
            height:30px;
        }
    </style>
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
    <input type="text" name="light" value="" hidden>
<div class="showEquipSet">
    @if($switch[0]['status'] == 0)
        <div class="status2zero">灯泡未开启</div>
    @elseif($switch[0]['status'] == 1)
        <div class="show-light">
            <div class="pull-left">灯泡亮度调节：<span id="l-num">{{$equipSetInf[0]['light']}}%</span></div>
            <div class="progress slider" id="light-num" style="width: 100%;margin: 0 auto">
                <div  aria-valuemax="100" aria-valuemin="0" aria-valuenow="{{$equipSetInf[0]['light']}}" role="progressbar" class="progress-bar progress-bar-primary" disabled> <span class="sr-only">50%</span>
                </div>
            </div>
        </div>
    @endif
</div>

<div  style="text-align: center;margin:40px auto">
        <div class="btn btn-primary circle-button">
            <a href="{{url('/equipset/onoff/id/'.$equipIdName[0]['id'])}}" type="button" style="color: inherit;display: block">
                <span class="glyphicon glyphicon-off"></span>
                开关</a>
        </div>
</div>
@endsection

