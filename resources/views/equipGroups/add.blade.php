@extends('layouts.layout')
@section('title')
    添加便捷分组
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
    <?php
    $num = $equip==null?0:count($equip);
?>
    <form action={{url("/equipGroup/add")}} method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
        <div class="weui_cells weui_cells_form">
            <div class="weui_cell">
                <div class="weui_cell_hd"><label class="weui_label">分组名:</label></div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" type="text" name="name" placeholder="请输入分组名"/>
                    </div>
            </div>
            </div>
        </a>
        <a class="weui_cell" href="javascript:;" style="color: inherit">
            <div class="weui_cell_bd weui_cell_primary">
                <p>请选择加入的设备:</p>
            </div>
        </a>

        <?php
    if($num != 0){
    $hostName = array_keys($equip);?>


    <?php
    for($i=0;$i<$num;$i++){
?>
        <div class="weui_cells_title"><b class="slider">{{$hostName[$i]}}&nbsp;&nbsp;&nbsp;</b>
            <input type='checkbox' class='checkedAll1'/>{{count($equip[$hostName[$i]])}}个设备</div>
        <div class="weui_cells weui_cells_access" style='display:none'>
       <?php
        for($j=0;$j<count($equip[$hostName[$i]]);$j++){
            ?>
           <a class="weui_cell" href="javascript:;">
               <div class="weui_cell_bd weui_cell_primary">
                   <p><input type="checkbox" name="equip_id[]" value="{{$equip[$hostName[$i]][$j]['id']}}">{{$equip[$hostName[$i]][$j]['name']}}</p>
               </div>
           </a>
       <?php
        }
        echo "</div>";
    }}


        $num2 = $equip2==null?0:count($equip2);
            if($num2 != 0){
                ?>
                <div class="weui_cells_title"><b class="slider">别人分配的部分&nbsp;&nbsp;&nbsp;</b><input type='checkbox' class='checkedAll1'/>{{count($equip2)}}个设备</div>
                <div class="weui_cells weui_cells_access" style='display:none'>
                <?php

                for($k=0;$k<$num2;$k++){
                    ?>
           <a class="weui_cell" href="javascript:;">
               <div class="weui_cell_bd weui_cell_primary">
                   <p><input type="checkbox" name="equip_id[]" value="{{$equip2[$k]['id']}}">{{$equip2[$k]['name']}}</p>
               </div>
           </a>
           <?php

                }
           echo "</div>";
            }

    ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="submit" class="weui_btn weui_btn weui_btn_primary" value="确定"/></p>
            </div>
        </a>

    </form>
@endsection