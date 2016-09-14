<?php

namespace App\Http\Controllers\Equip;

use App\Models\TV;
use App\Models\Fan;
use App\Models\AirCondition;
use App\Models\Light;
use App\Models\Equipment;
use Illuminate\Http\Request;
use App\User;
use App\Models\Host;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class EquipSetController extends Controller
{
    //控制家居设备
    public function set($id,$type_id)
    {
        //判断设备id是否合法
        $ids = $this->getEquipId();
        if(!in_array($id,$ids)){
            return redirect('/equip')->withErrors('设备有误!');
        }
        //判断类型是否合法
       $validateType = [1,2,3,4];
        if(!in_array($type_id,$validateType)){
            return redirect('/equip')->withErrors('设备类型有误!');
        }
        //判断设备是开还是关
        $switch = Equipment::select('status')->where('id',$id)->get()->toArray();
        //获取设备id，名称，类型
        $equipIdName = Equipment::select('id','name','type_id')->where('id',$id)->get()->toArray();
//        dd($equipIdName);
        if($switch == 0){//关闭状态
            if($type_id == 1){//灯
                return view('equipSet.light',compact(['switch','equipIdName']));
            }elseif($type_id == 2){//空调
                return view('equipSet.airCondition',compact(['switch','equipIdName']));
            }
            elseif($type_id == 3){//电视
                return view('equipSet.tv',compact(['switch','equipIdName']));
            }
            elseif($type_id == 4){//风扇
                return view('equipSet.fan',compact(['switch','equipIdName']));
            }

        }else{//开启状态
            //查询设备的设置信息
            $equipSetInf = $this->getEquipSetInf($id,$type_id);
            if($type_id == 1){//灯
                return view('equipSet.light',compact(['switch','equipSetInf','equipIdName']));
            }elseif($type_id == 2){//空调
                return view('equipSet.airCondition',compact(['switch','equipSetInf','equipIdName']));
            }
            elseif($type_id == 3){//电视
                return view('equipSet.tv',compact(['switch','equipSetInf','equipIdName']));
            }
            elseif($type_id == 4){//风扇
                return view('equipSet.fan',compact(['switch','equipSetInf','equipIdName']));
            }
        }
    }

    //获取可操控的设备id
    protected function getEquipId()
    {
        //判断设备id是否属于用户所管
        $e = new EquipController();
        //获取用户主机下的设备
        $hosts = User::find(Auth::user()->id)->getHostName->toArray();
        $equip = null;
        $id1 = $id2 = null;
        if(count($hosts) != 0){
            foreach($hosts as $host){
                $id2[] = Host::find($host['id'])->equipmentByType->toArray();
            }
        }
        $id1 = $e->getDistributeEquip();
        if(count($id1)>0){
            foreach($id1 as $a){
                foreach($a as $b){
                    $ids[] = $b['id'];
                }
            }
        }
        if(count($id2)>0){
            foreach($id2 as $c){
                foreach($c as $d){
                    $ids[] = $d['id'];
                }
            }
        }
        return $ids;
    }

    //获取设备的设置信息
    protected function getEquipSetInf($id,$type_id)
    {
        if($type_id == 1){//灯
            return Light::where('equipment_id',$id)->get()->toArray();
        }elseif($type_id == 2){//空调
            return AirCondition::where('equipment_id',$id)->get()->toArray();
        }elseif($type_id == 3){//电视
            return TV::where('equipment_id',$id)->get()->toArray();
        }elseif($type_id == 4){//风扇
            return Fan::where('equipment_id',$id)->get()->toArray();
        }
    }
    
    //开启关闭设备
    public function equipOnOff($id)
    {
        //判断合法性
        $ids = $this->getEquipId();
        if(!in_array($id,$ids)){
            return back()->withErrors('设备有误！');
        }
        //获取设备类型
        $typeId = $this->getEquipType($id);
        //获取设备开关情况
        $status = Equipment::where('id',$id)->select('status')->get()->toArray();
        if($status[0]['status'] == 0){
            Equipment::where('id',$id)->update([
                'status'=>'1'
            ]);
        }else{
            Equipment::where('id',$id)->update([
                'status'=>'0'
            ]);
        }
        return redirect("/equipset/set/id/$id/type/".$typeId[0]['type_id']);
    }

    //获取设备类型
    protected function getEquipType($id)
    {
        return Equipment::where('id',$id)->select('type_id')->get()->toArray();
    }
}
