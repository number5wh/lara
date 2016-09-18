<?php

namespace App\Http\Controllers\Equip;

use App\Models\Fan;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class FanController extends Controller
{
    //设置风扇风速
    public function setSpeed(Request $request)
    {
        $equipId = $request->equipId;
        $speed = $request->speed;
        Fan::where('equipment_id',$equipId)->update([
            'speed'=>$speed
        ]);
        echo 'success';
    }
    //设置风扇摆风
    public function setSwing(Request $request)
    {
        $equipId = $request->equipId;
        $swing = $request->swing;
        Fan::where('equipment_id',$equipId)->update([
            'swing_wind'=>$swing
        ]);
        echo 'success';
    }
}
