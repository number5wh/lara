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
            <div class="pull-left">灯泡亮度调节：</div>
            <div class="progress slider" style="width: 100%;margin: 0 auto">
                <div id="light-num" aria-valuemax="100" aria-valuemin="0" aria-valuenow="{{$equipSetInf[0]['light']}}" role="progressbar" class="progress-bar progress-bar-primary" disabled> <span class="sr-only">50%</span>
                </div>
            </div>
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
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 row-column">
            <a id="setLight" type="button" style="color: inherit;display: block">确定设置</a>
        </div>
    </div>
</div>
<script>
    //设置行高
    $(function(){
        var height = $(".row-set-50").css('height');
        $(".row-set-50").css('line-height',height);
        $(".row-column").css('height',height);
        $(".row-column").css('line-height',height);
    })
</script>
@endsection

