<?php

namespace App\Http\Controllers\Equip;

use Illuminate\Http\Request;
use Auth;
use App\User;
use App\Models\Equipment;
use App\Models\EquipmentGroup;
use App\Models\Host;
use App\Http\Controllers\Equip\EquipGroupController;
use App\Models\EquipDistribute;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class EquipController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct(){
        // $this->middleware('auth');
    }
    /*
     * 首页
     */
    public function home()
    {
        //主机部分
        $equip = $this->getHostEquip(Auth::user()->id);
//        dd($equip);
        //被分配的部分
        $equip2 = $this->getDistributeEquip();
//        dd($equip);

        return view('equips.home',compact(['equip','equip2']));

    }

    /*
     * 主机和设备关联信息
     */
    public function getHostEquip($id){
        $hosts = User::find($id)->getHostName->toArray();
        //dd($hosts);
        $c=null;$equip=null;
        foreach($hosts as $host){
            $equip[$host['name']] = Host::find($host['id'])->equipmentIdNotDeleted->toArray();
        }
        return $equip;
    }

    //获取被分配的设备信息
    public function getDistributeEquip(){
        $group = EquipDistribute::where('to',session('user_id'))->select('id','from','to','equipments')->get()->toArray();
        if($group == null){
            return null;
        }
        $equipId = array_filter(explode(',',$group[0]['equipments']));

        $equip = null;
        foreach($equipId as $a){
            $equip[] = Equipment::find($a)->toArray();
        }
        return $equip;
    }

    /*
     * 切换查看方式
     */
    public function changeWatch($type = 1){
        if($type == 1){
            return $this->home();
        }else{
            return EquipGroupController::quick();
        }
    }

}
