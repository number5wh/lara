@extends('layouts.layout')
@section('title')
    删除设备
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="window.location.href='{{url('/friend')}}'"/>
        <p class="bk_title"></p>
    </div>
@endsection
@section('main')
    <header class='demos-header'>
        <h1 class="demos-title">删除{{$email}}设备</h1>
    </header>
    <?php
    $num = count($equipGroup);?>
    <form action="{{url('/distribute/deleteEquip2')}}" method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <input type="text" name="id" value="{{$id}}" hidden="hidden"/>
        <?php
            foreach($equipGroup as $k => $v){?>
        <div class="weui_cells_title"><b class="slider">{{$k}}&nbsp;&nbsp;&nbsp;</b>
            <input type='checkbox' class='checkedAll1'/>{{count($equipGroup[$k])}}个设备</div>
        <div class="weui_cells weui_cells_access" style='display:none'>
            <?php
                foreach($equipGroup[$k] as $v){?>
                <a class="weui_cell" href="javascript:;">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p><input type="checkbox" name="equip_id[]" value="{{$v['id']}}">{{$v['name']}}</p>
                    </div>
                </a>

        <?php
            }
                    echo "</div>";
                    }
        ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="submit" class="weui_btn weui_btn weui_btn_warn" value="确定"/></p>
            </div>
        </a>

    </form>
@endsection