<?php

namespace App\Http\Controllers\Equip;

use App\Models\AirCondition;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AirConditionController extends Controller
{
    //设置空调模式
    public function setModel(Request $request)
    {
        $equipId = $request->equipId;
        $model = $request->model;
        /*echo $model;
        die;*/
        AirCondition::where('equipment_id',$equipId)->update([
            'model'=>$model
        ]);
        echo 'success';
    }

    //设置空调风速
    public function setSpeed(Request $request)
    {
        $equipId = $request->equipId;
        $speed = $request->speed;
        AirCondition::where('equipment_id',$equipId)->update([
            'speed'=>$speed
        ]);
        echo 'success';
    }
    //设置空调风向
    public function setDirection(Request $request)
    {
        $equipId = $request->equipId;
        $direction = $request->direction;
        AirCondition::where('equipment_id',$equipId)->update([
            'direction'=>$direction
        ]);
        echo 'success';
    }
    //设置空调温度
    public function setTemperature(Request $request)
    {
        $equipId = $request->equipId;
        $temperature = $request->temperature;
        AirCondition::where('equipment_id',$equipId)->update([
            'temperature'=>$temperature
        ]);
        echo 'success';
    }
}
