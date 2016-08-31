@extends('layouts.layout')
@section('title')
    联系人首页
@endsection
@section('header')
  <div class="bk_nav">
      <img src="{{url('images/back.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
      <p class="bk_title"></p>
      <img src="{{url('images/add1.png')}}" alt="" id="friendPage" class="bk_nav_menu" style="background: white"/>
  </div>
    @endsection
@section('main')

    <div class="weui_search_bar" id="search_bar">
        <form class="weui_search_outer">
            <div class="weui_search_inner">
                <i class="weui_icon_search"></i>
                <input type="search" class="weui_search_input" id="search_input" placeholder="搜索" required/>
                <a href="javascript:" class="weui_icon_clear" id="search_clear"></a>
            </div>
            <label for="search_input" class="weui_search_text" id="search_text">
                <i class="weui_icon_search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui_search_cancel" id="search_cancel">取消</a>
    </div>

    <?php //dd($data,$fremailAdd);?>
    @if($fremailAdd != null || $fremailDeny != null || $fremailPass != null)
    <div class="weui_cells_title">好友处理
        @if($fremailAdd != null)
            <ul style="list-style-type: none">
                <form action="{{url('/friend/handle')}}" method="post">
                @foreach($fremailAdd as $add)
                    <li class="addFriend">
                        <div class="weui_cells_tips">{{$add}}想添加你为好友</div>
                        <input type="text" name="_token" value="{{csrf_token()}}" hidden="hidden"/>
                        <input type="text" name="from" value="{{$add}}" hidden="hidden"/>
                        <input type="text" name="to" value="{{Auth::user()->id}}" hidden="hidden"/>
                        <div class="weui_cell weui_cell_select" id="friendHandle">
                            <div class="weui_cell_bd weui_cell_primary">
                                <select class="weui_select" name="pass" >
                                    <option selected="" value="-1">请选择</option>
                                    <option value="1">同意</option>
                                    <option value="0">拒绝</option>
                                    <option value="3">忽略</option>
                                </select>
                            </div>
                        </div>


                        <div class="handleAgree" style="display: none">
                            <div class="weui_cell weui_cell_select" id="chooseGroup">
                                <div class="weui_cell_bd weui_cell_primary">
                                    <select class="weui_select" name="group" >
                                        @foreach($group as $v)
                                            <option value="{{$v}}">{{$v}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="weui_cells_tips"><input type="submit" id="btn" class="weui_btn weui_btn_mini weui_btn_primary" value="确定"></div>

                        </div>
                        <div class="handleDeny" style="display: none">
                            <div class="weui_cells_tips"><input type="submit" id="btn" class="weui_btn weui_btn_mini weui_btn_primary" value="确定"></div>

                        </div>
                        <div class="handleIgnore" style="display: none">
                            <div class="weui_cells_tips"><input type="submit" id="btn" class="weui_btn weui_btn_mini weui_btn_primary" value="确定"></div>
                        </div>
                    </li>
                @endforeach
                </form>
            </ul>
    @endif

    @if($fremailDeny != null)
        <ul style="list-style-type: none">
            @foreach($fremailDeny as $deny)
                <li class="deny"><a href="{{url("/friend/handleResult/".Auth::user()->id."/$deny/0")}}">{{$deny}}拒绝了你的好友请求</a></li>
            @endforeach
        </ul>
    @endif

    @if($fremailPass != null)
        <ul style="list-style-type: none">
            @foreach($fremailPass as $pass)
                <li class="pass"><a href="{{url('/friend/handleResult/'.Auth::user()->id."/$pass/1")}}">{{$pass}}通过了你的好友请求</a></li>
                @endforeach
        </ul>
        @endif

    </div>
    @endif

    <?php
            //dd($data);
    $name = $data['name'];
    $emails = $data['email'];
            //dd($emails);
    $groups = $name==null?0:count($name);
    //dd($groups);
    for($i=0;$i<$groups;$i++){
        ?>


    <div class="weui_cells_title"><b class="slider">{{$name[$i]}}</b></div>
    <div class="weui_cells weui_cells_access">
        <?php
        for($j=0;$j<count($emails[$i]);$j++){
        if(Auth::user()->is_admin == 0){
            if($emails[$i][$j] != null){
            ?>
        <a class="weui_cell" href="javascript:;">
            <div class="weui_cell_bd weui_cell_primary">
                <p>{{$emails[$i][$j]}}</p>
            </div>

        </a>
        <?php }}elseif(Auth::user()->is_admin == 1){
                $url = url("/distribute/getDistribute/{$emails[$i][$j]}");
                if($emails[$i][$j] != null){

            ?>
            <a class="weui_cell" href="{{$url}}">
                <div class="weui_cell_bd weui_cell_primary">
                    <p>{{$emails[$i][$j]}}</p>
                </div>
                <div class="weui_cell_ft"></div>
            </a>
            {{--<div class="weui_cell_bd weui_cell_primary">--}}
                {{--<p><a href="{{$url}}" style="color: inherit">{{$emails[$i][$j]}}</a></p>--}}
            {{--</div>--}}

        <?php }}}

            ?>
    </div>
            <?php
            }
            ?>
@endsection
