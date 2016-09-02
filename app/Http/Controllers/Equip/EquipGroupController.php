<?php

namespace App\Http\Controllers\Equip;
use Auth;
use Illuminate\Http\Request;
use App\Models\Equipment;
use App\Models\EquipmentGroup;
use App\Http\Requests;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;

class EquipGroupController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct(){
        $this->middleware('auth');
    }

    /*
     * 获取便捷分组组名
     */
    public function getEquipGroup()
    {
        $groupName =  DB::select("select distinct name from equipment_group
                      where user_id = :id",['id'=>Auth::user()->id]);
        if(empty($groupName)){
            return null;
        }

        foreach($groupName as $v){
            $group[] = $v->name;
        }

        return $group;
    }
    /*
     * 便捷分组首页
     */
    public function home(){
        //获取分组名
        $groupName = $this->getEquipGroup();
//        dd($quick,$groupName);
        return view('equipGroups.home',compact(['groupName']));
    }

    /*
     * 添加便捷分组
     */
    public function showAddForm(){
        /*
         * 获取主机设备和别人分配的设备
         */
        $eq = new EquipController();
        $equip = $eq->getHostEquip(Auth::user()->id);
        $equip2 = $eq->getDistributeEquip();
        return view('equipGroups.add',compact(['equip','equip2']));
    }

    public function add(Requests\AddEquipGroupRequest $request){

        $name = $request->name;
        $idArr = $request->equip_id;
        foreach($idArr as $id){
            $group = new EquipmentGroup();
            $group->name = $name;
            $group->equipments = $id;
            $group->user_id = Auth::user()->id;
            $group->save();
        }

        return redirect("/equipGroup")->withSuccess('添加分组成功');
    }
    
    /*
     * 删除分组
     */
    public function showDeleteForm(){
        $group = $this->getEquipGroup();
        if(count($group) == 0){
            return redirect('/equipGroup')->withErrors('您还没有分组');
        }
//        dd($group);
        return view('equipGroups.deleteGroup',compact(['group']));
    }

    public function delete(Request $request){
        $this->validate($request,[
            'groupName'=>'required',
        ]);
        $name = $request->groupName;
        if($name !=null){
            foreach($name as $a){
                EquipmentGroup::where('name',$a)
                    ->where('user_id',Auth::user()->id)
                    ->delete();
            }
        }
        return redirect("/equipGroup")->withSuccess('删除分组成功');
    }

    /*
     * 获取组内设备信息
     */

    public function groupInfo($name){
        //判断组名合法性
        $groupName = $this->getEquipGroup();
//        dd($groupName);
        if(!in_array($name,$groupName)){
            return redirect("/equipGroup")->withErrors('分组名称有误');
        }

        //获取设备信息
        $equips = EquipmentGroup::where('user_id',Auth::user()->id)
            ->where('name',$name)->get()->toArray();
        for($i=0;$i<count($equips);$i++){
            $equips[$i]['equipInfo'] = Equipment::where('id',$equips[$i]['equipments'])
                ->get()->toArray();
        }

        return view('equipGroups.groupDetail',compact(['equips','name']));
    }


    /*
     * 添加设备到分组
     */

    public function addEquip1($name){
        //获取该分组已有设备id
        $e = EquipmentGroup::where('name',$name)
            ->where('user_id',Auth::user()->id)->get()->toArray();
        foreach($e as $v){
            $equipId[] = $v['equipments'];
        }
        //获取用户所有设备信息
        $equipObj = new EquipController();
        $equip = $equipObj->getHostEquip(Auth::user()->id);
//        dd($equip,$equipId);
        $equip2 = $equipObj->getDistributeEquip();

        return view('equipGroups.addEquip',compact('equip','equipId','name','equip2'));
    }

    public function addEquip2(Requests\AddEquipForGroupRequest $request){
        $name = $request->name;
        $equipId = $request->equip_id;
        foreach($equipId as $item){
            $eg = new EquipmentGroup();
            $eg->name = $name;
            $eg->equipments = $item;
            $eg->user_id = Auth::user()->id;
            $eg->save();
        }
        return redirect("/equipGroup")->withSuccess('添加设备成功');

    }

    /*
     * 从分组中删除设备
     */
    public function deleteEquip1($name){
        //获取该分组已有设备id
        $e = EquipmentGroup::where('name',$name)
            ->where('user_id',Auth::user()->id)->get()->toArray();
        foreach($e as $v){
            $equipId[] = $v['equipments'];
        }
        foreach($equipId as $v){
            $eName[] = Equipment::select('name')->where('id',$v)->get()->toArray();
        }
        foreach($eName as $a){
            $equipName[] = $a[0]['name'];
        }

//        dd($equipName);
        return view('equipGroups.deleteEquip',compact(['name','equipId','equipName']));
    }

    public function deleteEquip2(Requests\AddEquipForGroupRequest $request){
        $name = $request->name;
        $equipId = $request->equip_id;

        foreach($equipId as $item){
            EquipmentGroup::where('name',$name)
                ->where('user_id',Auth::user()->id)
                ->where('equipments',$item)
                ->delete();
        }
        return redirect("/equipGroup")->withSuccess('删除成功');

    }


    //开关设备
    public function singleSwitch(Input $input){
        //dd('wtf');
        $data = $input::all();
        $equipId = $data['equip_id'];
        $status = $data['status'];
        //$groupId = $data['group_id'];
        Equipment::where('id',$equipId)
            ->update(['status'=>$status]);
        echo 1;
    }

    public function allSwitch($name,$status){
        //dd(__DIR__);
        $e = EquipmentGroup::select('equipments')->where('name',$name)
            ->where('user_id',Auth::user()->id)->get()->toArray();
        foreach($e as $v){
            Equipment::where('id',$v['equipments'])->update(['status'=>$status]);
        }
        return redirect("/equipGroup/groupInfo/{$name}")->withSuccess('操作成功');
    }



    /*
     * 转换设备的查看方式为便捷分组
     */
    public static function quick(){
        $eg = new EquipGroupController();
        $groupName = $eg->getEquipGroup();
        $equips  = null;
        $equips = EquipmentGroup::where('user_id',Auth::user()->id)->get()->toArray();
        if(count($equips) == 0){
            return redirect("/equip")->withErrors('您还没有便捷分组');

        }

        for($i=0;$i<count($equips);$i++){
            $equips[$i]['equipInfo'] = Equipment::where('id',$equips[$i]['equipments'])
                ->get()->toArray();
        }
//        dd($equips,$groupName);
        return view('equipGroups.quick',compact('equips','groupName'));
    }

}
