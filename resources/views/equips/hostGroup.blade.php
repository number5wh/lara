@extends('layouts.layout')
@section('title')
    主机设备
@endsection
@section('header')
    <div class="bk_nav">
        <span class="glyphicon glyphicon-retweet bk_back" onclick="window.location.href='{{url('/equip/changeWatch/1')}}'"></span>
        {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
        <p class="bk_title"></p>
        @if(Auth::user()->is_admin == 1)
        <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="equipPageAdmin"></span>
        @else
            <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="equipPage"></span>
        @endif
        {{--<img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>--}}
    </div>
@endsection

@section('main')
    <?php
    if($equip!=null){
            //dd($equip,$equip2);
    $num = count($equip);
    $hostName = array_keys($equip);
    for($i=0;$i<$num;$i++){
        ?>
    <div class="weui_cells_title"><div class="slider list">{{$hostName[$i]}}
            <span class="pull-right">{{count($equip[$hostName[$i]])}}</span></div></div>
    <div class="weui_cells weui_cells_access" style='display: none;'>
      <?php
        for($j=0;$j<count($equip[$hostName[$i]]);$j++){
            ?>
          <a class="weui_cell" href="{{url("/equipset/set/id/".$equip[$hostName[$i]][$j]['id']."/type/".$equip[$hostName[$i]][$j]['type_id'])}}">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>{{$equip[$hostName[$i]][$j]['name']}}</p>
              </div>
          </a>

          <?php }
          echo "</div>";
          }}else{
          ?>
          <a class="weui_cell">
              <div class="weui_cell_bd weui_cell_primary">
                  <a href="{{url('/host/add')}}" class="weui_btn weui_btn weui_btn_primary">点我添加主机</a>
              </div>
          </a>

        <?php }

          if($equip2!=null){
          $num2 = count($equip2);
          ?>
          <div class="weui_cells_title"><span class="slider list">别人分配的设备
                  <span class="pull-right">{{count($equip2)}}</span></span></div>
          <div class="weui_cells weui_cells_access" style='display:none'>
          <?php
          for($k=0;$k<$num2;$k++){
              ?>
          <a class="weui_cell" href="{{url("/equipset/set/id/".$equip2[$k][0]['id']."/type/".$equip2[$k][0]['type_id'])}}">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>{{$equip2[$k][0]['name']}}</p>
              </div>
          </a>
          <?php }  echo "</div>";}?>


@endsection