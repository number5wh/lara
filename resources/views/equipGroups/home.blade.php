@extends('layouts.layout')
@section('title')
    便捷分组首页
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="" id="quickPage" class="bk_nav_menu" style="background: white"/>
    </div>
    <style>
        .weui-row {
            margin-top: 10px;
        }
        .weui-col-25{
            float: left;
            text-overflow: ellipsis ;
            overflow: hidden;
        }
        [class*="weui-col-"] {
            margin:10px;
            border: 1px solid #ccc;
            height: 60px;
            line-height: 60px;
            text-align: center;


        }

    </style>
@endsection
@section('main')
    <div class="weui-row">
    <?php

           for($i=0;$i<count($quick);$i++){
               ?>
        <a class="weui-col-25" style="color: inherit" href="{{url("/equipGroup/groupInfo/{$quick[$i]['id']}")}}">{{$quick[$i]['name']}}</a>

    <?php
           }
    ?>
    <a class="weui-col-25" href="{{url('/equipGroup/add')}}" style="color: inherit">+</a>

    </div>
@endsection