@extends('layouts.layout')
@section('title')
    {{$equipIdName[0]['name']}}
@endsection
@section('style')
    <script src="{{url('js/bootstrap.min.js')}}"></script>
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
    <script>
        $(function(){
            var height = $(".row-set2").css('height');
            $(".row-set2").css('line-height',height);
            $(".row-column").css('height',height);
            $(".row-column").css('line-height',height);

        });
    </script>
    <input type="text" name="equipId" value="{{$equipIdName[0]['id']}}" hidden>
    <input type="text" name="typeId" value="{{$equipIdName[0]['type_id']}}" hidden>
    <input type="text" name="_token" value="{{csrf_token()}}" hidden>
    <div id="someInf">
        <input type="text" name="channel" value="{{$equipSetInf[0]['channel']}}" hidden>
        <input type="text" name="volume" value="{{$equipSetInf[0]['volume']}}" hidden>
        <input type="text" name="model" value="{{$equipSetInf[0]['model']}}" hidden>
        <input type="text" name="silent" value="{{$equipSetInf[0]['silent']}}" hidden>
        <input type="text" name="status" value="{{$switch[0]['status']}}" hidden>
    </div>
    <div class="showEquipSet3" >

        <div class="mycircle" style="text-align: center;height: 200px;margin: 0 auto;position: relative">
            <button class="btn mycircle2 btn-default" style="position: absolute;
            z-index: 100;margin-top: 60px;margin-left: -40px">
                OK
            </button>
            <button id="plusChannel" class="btn btn-circle btn-default" style="position: absolute;
            z-index: 100;margin-top: 20px;margin-left: -15px">
                <span class="glyphicon glyphicon-chevron-up"></span>
            </button>
            <button id="minusChannel" class="btn btn-circle btn-default" style="position: absolute;
            z-index: 100;margin-top: 150px;margin-left: -15px">
                <span class="glyphicon glyphicon-chevron-down"></span>
            </button>
            <button id="minusVol" class="btn btn-circle btn-default" style="position: absolute;
            z-index: 100;margin-top: 85px;margin-left: -80px">
                <span class="glyphicon glyphicon-chevron-left"></span>
            </button>
            <button id="plusVol" class="btn btn-circle btn-default" style="position: absolute;
            z-index: 100;margin-top: 85px;margin-left: 50px">
                <span class="glyphicon glyphicon-chevron-right"></span>
            </button>
        </div>

        <div id="mystyle" style="padding:50px 30px 0px 30px">
            <a href="{{url('/equipset/onoff/id/'.$equipIdName[0]['id'])}}" id="onoffTV" class="btn btn-circle btn-lg btn-default pull-left">
                <span class="glyphicon glyphicon-off"></span>
            </a>
            <button class="btn btn-circle btn-lg btn-default" data-toggle="modal" data-target="#myModal" style="padding-left: 10px;">
                123
            </button>
            <button id="silentTV" class="btn btn-circle btn-lg btn-default pull-right">
                <span class="glyphicon glyphicon-volume-off"></span>
            </button>
        </div>
    </div>
<div class="set2">
    <div class="row row-set2">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column btn btn-default" id="setAirSpeed" >
            <a type="button"  style="color: inherit;display: block">菜单</a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column btn btn-default" id="setAirDirection">
            <a id="nowtime"  type="button" style="color: inherit;display: block">时间</a>
        </div>
    </div>
    <div class="row row-set2">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column btn btn-default" id="setAirSpeed" >
            <a type="button" id="modelTV"  style="color: inherit;display: block">模式</a>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 row-column btn btn-default" id="setAirDirection">
            <a type="button"  style="color: inherit;display: block">TV/AV</a>
        </div>
    </div>
</div>


{{--数字弹框--}}
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="container">
                    <div class="row" style="padding: 10px;">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">1</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">2</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center;">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">3</button>
                        </div>
                    </div>
                    <div class="row"  style="padding: 10px;">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">4</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">5</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center;">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">6</button>
                        </div>
                    </div>
                    <div class="row"  style="padding: 10px;">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">7</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">8</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center;">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">9</button>
                        </div>
                    </div>
                    <div class="row"  style="padding: 10px;">
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center">
                            <button class="btn btn-circle btn-lg" style="border: 1px solid;">0</button>
                        </div>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-xs-4"
                             style="background-color: #fff;text-align:center;">
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal -->
</div>


@endsection
@section('script')

    @endsection


