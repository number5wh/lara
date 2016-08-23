@extends('layouts.layout')
@section('title')
    添加设备
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
    <div class="addEquip">
        <ul>
            @foreach($deleted as $v)
                <li>设备名称:{{$v['name']}}(所属主机{{$v['host_name']}}) <a href="{{url("/equipment/addEquip2/{$v['id']}")}}"><button>添加</button></a></li>
            @endforeach
        </ul>
    </div>
@endsection