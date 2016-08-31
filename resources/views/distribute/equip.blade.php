@extends('layouts.layout')
@section('title')
    设备分配
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
        <p class="bk_title"></p>
        <img src="{{url('images/add1.png')}}" alt="" id="quickPage" class="bk_nav_menu" style="background: white"/>
    </div>
@endsection
@section('main')
    <div align="center">{{$email}}可操控的设备</div>
    <?php
        $num =  $equipInfo==null?0:count($equipInfo);
        $equipInfo = array_values($equipInfo);
               // dd($name,$equipInfo);
    //            dd($equipInfo);
        for($i=0;$i<$num;$i++){
            ?>
        <div class="weui_cells_title"><b class="slider">{{$name[$i]['name']}}&nbsp;&nbsp;&nbsp;</b></div>
        <div class="weui_cells weui_cells_access">
            <?php
            for($j=0;$j<count($equipInfo[$i]);$j++){
               ?>
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>{{$equipInfo[$i][$j]}}</p>
                    </div>
                </a>
                <?php

            }
          echo "</div>";
        }
    ?>
        <a class="weui_cell" href="javascript:;">
            <div align="center" class="weui_cell_bd weui_cell_primary">
                <a href="{{url("/distribute/showSetEquip/$disId")}}"><button class="weui_btn weui_btn_mini weui_btn_primary">添加设备</button></a>
                <a href="{{url("/distribute/deleteEquip1/$disId")}}"><button class="weui_btn weui_btn_mini weui_btn_warn">移除设备</button></a>
            </div>
        </a>


    @endsection