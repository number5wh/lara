<?php

namespace App\Http\Controllers\Self;

use App\User;
use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class SelfController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct(){
        $this->middleware('auth');
    }
    /*
     * 首页
     */
    public function home(){
        return view('self.home');
    }
    /*
     * 获取个人信息
     */
    public function getSelf()
    {
        $info = User::where('id',Auth::user()->id)->first()->toArray();
        return view('self.selfInfo',compact('info'));
    }

}
