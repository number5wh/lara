<?php

namespace App\Http\Controllers\Equip;

use App\Models\TV;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class TVController extends Controller
{
    //设置频道
    public function setChannel(Request $request)
    {
        $equipId = $request->equipId;
        $channel = $request->channel;
        TV::where('equipment_id',$equipId)->update([
            'channel'=>$channel
        ]);
        echo 'success';
    }
    //设置音量
    public function setVolume(Request $request)
    {
        $equipId = $request->equipId;
        $volume = $request->volume;
        TV::where('equipment_id',$equipId)->update([
            'volume'=>$volume,
            'silent'=>0
        ]);
        echo 'success';
    }
    //设置静音
    public function setSilent(Request $request)
    {
        $equipId = $request->equipId;
        $silent = $request->silent;
        TV::where('equipment_id',$equipId)->update([
            'silent'=>$silent
        ]);
        echo 'success';
    }
    //设置模式
    public function setModel(Request $request)
    {
        $equipId = $request->equipId;
        $model = $request->model;
        TV::where('equipment_id',$equipId)->update([
            'model'=>$model
        ]);
        echo 'success';
    }
}
