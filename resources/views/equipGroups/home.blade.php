@extends('layouts.layout')
@section('title')
    便捷分组首页
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-chevron-left bk_back" onclick="history.back(-1)"></span>
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
        <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="quickPage"></span>
        {{--<img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>--}}
    </div>
@endsection
@section('main')
    <div class="row">
    <?php

           for($i=0;$i<count($groupName);$i++){
               ?>
        <a class="col-25" style="color: inherit" href="{{url("/equipGroup/groupInfo/{$groupName[$i]}")}}">{{$groupName[$i]}}</a>

    <?php
           }
    ?>
    <a class="col-25" href="{{url('/equipGroup/add')}}" style="color: inherit"><span class="glyphicon glyphicon-plus"></span></a>

    </div>
@endsection