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
<div class="showEquipSet2">
    <canvas id="pic" height="200" width="200">
    </canvas>
</div>

    <script>
 /*       $(function(){
            //获取宽高
            var y = Number($("#pic").outerHeight(true));
            var x = Number($("#pic").outerWidth(true));
            var c = document.getElementById('pic');
            var ctx = c.getContext('2d');
            ctx.beginPath();
            ctx.arc(x/2,y/2,90,0,2*Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x/2,y/2,30,0,2*Math.PI);
            ctx.stroke();
        });*/

    </script>
@endsection
