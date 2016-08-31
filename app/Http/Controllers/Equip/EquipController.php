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
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Controller;

class EquipController extends Controller
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
    public function home()
    {
        //主机部分
        $equip = $this->getHostEquip(Auth::user()->id);
        //被分配的部分
        $equip2 = $this->getDistributeEquip();
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
        $group = EquipDistribute::where('to',Auth::user()->id)->select('id','from','to','equipments')->get()->toArray();
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

    //添加设备
    public function showAddForm(){
        $hosts = User::find(Auth::user()->id)->getHostId->toArray();
//        dd($hosts);
        for($i=0;$i<count($hosts);$i++){
            $hostInf[$i]['id'] = $hosts[$i]['id'];
            $hostInf[$i]['name'] =  HostController::getNameById($hosts[$i]['id']);
        }
//dd($hostInf);
        if($hosts == null){
            return redirect('/equip')->withErrors('请先添加主机');
        }else{
            return view('equips.addEquip')->with(['hostInf'=>$hostInf]);
        }


    }

    public function add(Requests\AddEquipRequest $request)
    {
        $equip = new Equipment();
        $equip->name = $request->name;
        $equip->host_id = $request->host_id;
        $equip->save();
        return redirect('/equip')->withSuccess('添加设备成功');
    }

    //移除设备
    public function showDeleteForm(){
        $equip = $this->getHostEquip(Auth::user()->id);
        return view('equips.deleteEquip')->with('equip',$equip);
    }

    public function delete(Input $input){
        $deleteId = $input::all()['equip_id'];
        foreach($deleteId as $id){
            Equipment::where('id',$id)->update(['is_deleted'=>1]);
        }
        return redirect('/equip')->withSuccess('移除成功');
    }

}
