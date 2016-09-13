@extends('layouts.layout')
@section('title')
    移动联系人
@endsection
@section('header')
  <div class="bk_nav">
      <span class="glyphicon glyphicon-chevron-left bk_back" onclick="window.location.href='{{url('/friend')}}'"></span>
      {{--<img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>--}}
      <p class="bk_title"></p>
      <span class="bk_nav_menu glyphicon glyphicon-align-justify" id="friendPage"></span>
      {{--<img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>--}}
  </div>
    @endsection
@section('main')
    <form action={{url("/friendGroup/move")}} method="post">
        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
    <?php
    for($i=0;$i<count($fg);$i++){
        ?>
    <div class="weui_cells_title"><span class="slider list">{{$fg[$i]['name']}}</span>
        <input type='checkbox' class='checkedAll2'/></div>
    <div class="weui_cells weui_cells_access">
        <?php
        for($j=0;$j<count($friends);$j++){
            if($friends[$j]['group_id'] == $fg[$i]['id']){
            ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p><input type="checkbox" name="id[]" value="{{$friends[$j]['users']}}">{{$friends[$j]['friend_email']}}</p>
            </div>

        </a>
        <?php }}

            ?>
    </div>
            <?php
            }
            ?>
    <div class="weui_cell">
        <div class="weui_cell_hd"><label class="weui_label">移动至分组:</label></div>
        <div class="weui_cell weui_cell_select">
            <div class="weui_cell_bd weui_cell_primary">
                <select class="weui_select" name="group">
                    @foreach($fg as $group)
                        <option value="{{$group['id']}}">{{$group['name']}}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </div>
    <div class="weui_btn_area">
        <input type="submit" class="weui_btn weui_btn_primary" href="javascript:" value="确定"/>
    </div>
    </form>
@endsection
