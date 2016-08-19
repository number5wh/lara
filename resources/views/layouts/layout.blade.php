<!DOCTYPE html>
<html>
  <head>
    <title>@yield('title')</title>
    <meta charset="utf-8">
      <meta name="csrf-token" content="{{ csrf_token() }}">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

<meta name="description" content="Write an awesome description for your new site here. You can edit this line in _config.yml. It will appear in your document head meta (for Google search results) and in your feed.xml site description.
">

<link rel="stylesheet" href="{{url('css/all.css')}}">
  </head>

  <body ontouchstart>


    <div class="weui_tab">

      <div class="weui_navbar">
          @yield('header')
      </div>
      <div class="weui_tab_bd">
          @yield('main')

      </div>

      <div class="weui_tabbar">
        <a href="{{url('/friend')}}" class="weui_tabbar_item weui_bar_item_on">
          <div class="weui_tabbar_icon">
            <img src="{{url('images/icon_nav_button.png')}}" alt="">
          </div>
          <p class="weui_tabbar_label">联系人</p>
        </a>
        <a href="{{url('/equip')}}" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <img src="{{url('images/icon_nav_msg.png')}}" alt="">
          </div>
          <p class="weui_tabbar_label">设备</p>
        </a>
        <a href="{{url('/quick')}}" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <img src="{{url('images/icon_nav_article.png')}}" alt="">
          </div>
          <p class="weui_tabbar_label">便捷操作</p>
        </a>
        <a href="{{url('/friend')}}" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <img src="{{url('images/icon_nav_cell.png')}}" alt="">
          </div>
          <p class="weui_tabbar_label">我</p>
        </a>
      </div>
    </div>
    <script src="{{url('js/jquery-2.1.4.js')}}"></script>
<script src="{{url('js/all.js')}}"></script>
    <script>$(".bk_title").html(document.title)</script>

  </body>
</html>