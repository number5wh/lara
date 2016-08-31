@extends('layouts.layout')
@section('title')
    设备首页
@endsection
@section('header')
    <div class="bk_nav">
        <a href="{{url('/equip/changeWatch/0')}}"><img src="{{url('images/change.png')}}" alt="0" class="bk_back" style="background: white"/></a>
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
            <img src="{{url('images/add1.png')}}" alt="" id="equipPageAdmin" class="bk_nav_menu" style="background: white"/>
            @else
            <img src="{{url('images/add1.png')}}" alt="" id="equipPage" class="bk_nav_menu" style="background: white"/>
            @endif

    </div>
@endsection

@section('main')
    <?php
    if($equip!=null){
    $num = count($equip);
    $hostName = array_keys($equip);
    for($i=0;$i<$num;$i++){
        ?>
    <div class="weui_cells_title"><b class="slider">{{$hostName[$i]}}</b></div>
    <div class="weui_cells weui_cells_access" style='display:none'>
      <?php
        for($j=0;$j<count($equip[$hostName[$i]]);$j++){
            ?>
          <a class="weui_cell" href="javascript:;">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>{{$equip[$hostName[$i]][$j]['name']}}</p>
              </div>
          </a>

          <?php }
          echo "</div>";
          }}else{
          ?>
          <a class="weui_cell" href="javascript:;">
              <div class="weui_cell_bd weui_cell_primary">
                  <a href="{{url('/host/add')}}"><button class="weui_btn weui_btn_mini weui_btn_primary">点我添加主机</button></a>
              </div>
          </a>

        <?php }

          if($equip2!=null){
          $num2 = count($equip2);
          ?>
          <div class="weui_cells_title"><b class="slider">别人分配的设备</b></div>
          <div class="weui_cells weui_cells_access" style='display:none'>
          <?php
          for($i=0;$i<$num2;$i++){
              ?>
          <a class="weui_cell" href="javascript:;">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>{{$equip2[$i]['name']}}</p>
              </div>
          </a>
          <?php }  echo "</div>";}?>


@endsection