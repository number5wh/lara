<?php

namespace App\Http\Controllers\Equip;

use App\Models\Light;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class LightController extends Controller
{
    //设置灯泡亮度
    public function setLight(Request $request)
    {
        $equipId = $request->equipId;
        $light = $request->light;
        Light::where('equipment_id',$equipId)->update([
            'light'=>$light
        ]);
        echo 'success';
    }
}
