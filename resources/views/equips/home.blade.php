@extends('layouts.layout')
@section('title')
    设备首页
@endsection
@section('header')
    <div class="bk_nav">
        <img src="{{url('images/change.png')}}" alt="" class="bk_back" style="background: white" onclick="history.back(-1)"/>
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
            echo "<b class='equipblock'><a>".$hostName[$i]."</a></b><br><ul class='equipGroup' style='display:none'>";
            for($j=0;$j<count($equip[$hostName[$i]]);$j++){
                echo "<li class='equip'>".$equip[$hostName[$i]][$j]['name']."</li>";
            }
            echo "</ul><br><br>";
        }
        }else{
            echo "<b>您没有任何主机</b><br><br>";
            ?>

            <a href="{{url('/equipment/addHost1')}}"><button>点我添加主机</button></a>
    <br/><br/>
    <?php
        }
            if($equip2!=null){
                $num2 = count($equip2);
                echo "<b class='equipblock'><a>别人分配的设备</a></b><br><ul class='equipGroup' style='display:none'>";
                for($i=0;$i<$num2;$i++){
                    echo "<li class='equip'>".$equip2[$i]['name']."</li>";
                }
                echo "</ul><br><br>";
            }else{
                echo "<b>别人还未分配设备给您</b><br><br>";
            }
    ?>

@endsection