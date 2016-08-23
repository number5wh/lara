<?php

namespace App\Http\Controllers\Equip;
use Auth;
use Illuminate\Http\Request;
use App\Models\Equipment;
use App\Models\EquipmentGroup;
use App\Http\Requests;
use App\User;
use App\Http\Controllers\Controller;
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
     * 便捷分组首页
     */
    public function home(){
        $quick = User::find(Auth::user()->id)->EquipmentGroupName->toArray();
//        dd($quick[0]['name']);
//        dd($quick);
        return view('equipGroups.home',compact(['quick']));
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

    public function add(Input $input){

        $data = $input::all();

        $name = $data['name'];
        $equipments = '';
        foreach($data['equip_id'] as $id){
            $equipments.=$id.',';
        }
        $group = new EquipmentGroup();
        $group->name = $name;
        $group->equipments = $equipments;
        $group->user_id = Auth::user()->id;
        $group->save();
        $url = url("/equipGroup");
        echo "<script>alert('添加分组成功！');window.location.href='{$url}';</script>";
    }
    
    /*
     * 删除分组
     */
    public function showDeleteForm(){
        $group = EquipmentGroup::where('user_id',Auth::user()->id)->get()->toArray();
        return view('equipGroups.delete',compact(['group']));
    }

    public function delete(Input $input){
        $data = $input::all();
        $id = $data['groupId'];
        if($id !=null){
            foreach($id as $a){
                EquipmentGroup::where('id',$a)->delete();
            }
        }
        $url = url("/equipGroup");
        echo "<script>alert('删除分组成功！');window.location.href='{$url}';</script>";
    }

    /*
     * 获取组内设备信息
     */

    public function groupInfo($id){
        $uid = EquipmentGroup::select('user_id')->where('id',$id)->get()->toArray();
        if(Auth::user()->id != $uid[0]['user_id']){
            $url = url("/equipGroup");
            echo "<script>alert('你没有这个权限！');window.location.href='{$url}';</script>";
        }

        $groupName = EquipmentGroup::select('name')->where('id',$id)->get()->toArray();
        $e = EquipmentGroup::select('equipments')->where('id',$id)->get()->toArray();
//        dd($e[0]['equipments']);
        if($e[0]['equipments'] == null){
            $equip = null;
            $equipInfo = null;

        }else{
            $a[] = explode(',',$e[0]['equipments']);
            foreach($a as $b)
                $equip = array_filter($b);
            foreach($equip as $c){
                $equipInfo[] = Equipment::find($c)->toArray();
            }

//            dd($equipInfo);
            return view('equipGroups.groupDetail',compact(['equipInfo','groupName','id']));
        }
    }

    /*
     * 添加设备到分组
     */

    public function addEquip1($id){
        $group = EquipmentGroup::where('id',$id)->where('user_id',Auth::user()->id)->get()->toArray();
//        dd($group);
        $equipId = array_filter(explode(',',$group[0]['equipments']));//去除逗号再去除最后一个null
//        dd($e);

        $equipObj = new EquipController();
        $equip = $equipObj->getHostEquip(Auth::user()->id);
//        dd($equip,$equipId);
        $equip2 = $equipObj->getDistributeEquip();

        return view('equipGroups.addEquip',compact('equip','equipId','group','equip2'));
    }

    public function addEquip2(Input $input){
        $data = $input::all();
        $groupId = $data['group_id'];
        $equipId = $data['equip_id'];

        $newEquip = EquipmentGroup::select('equipments')->where('id',$groupId)->where('user_id',Auth::user()->id)
            ->get()->toArray();

        foreach($equipId as $v){
            $newEquip[0]['equipments'].=$v.',';
        }
        //  $newEquip = $oldEquip.$equipId;

//        dd($newEquip);

        EquipmentGroup::where('id',$groupId)->where('user_id',Auth::user()->id)
            ->update(['equipments'=>$newEquip[0]['equipments']]);
        $url = url("/equipGroup");
        echo "<script>alert('添加设备成功！');window.location.href='{$url}';</script>";

    }

    //从分组中删除设备
    public function deleteEquip1($id){
        $group = EquipmentGroup::where('id',$id)->where('user_id',Auth::user()->id)->get()->toArray();
//        dd($group);
        $equipId = array_filter(explode(',',$group[0]['equipments']));//去除逗号再去除最后一个null
        foreach($equipId as $v){
            $eName[] = Equipment::select('name')->where('id',$v)->get()->toArray();
        }
        foreach($eName as $a){
            $equipName[] = $a[0]['name'];
        }

//        dd($equipName);
        return view('equipGroups.deleteEquip',compact(['group','equipId','equipName']));
    }

    public function deleteEquip2(Input $input){
        $data = $input::all();
        $id = $data['group_id'];
        $equipId = $data['equip_id'];

        $e = implode(',',$equipId).",";

        $group = EquipmentGroup::where('id',$id)->where('user_id',Auth::user()->id)->get()->toArray();
        //将要删除的id串替换为空
        $newEquipId = str_replace($e,'',$group[0]['equipments']);
        EquipmentGroup::where('id',$id)->where('user_id',Auth::user()->id)
            ->update(['equipments'=>$newEquipId]);
        $url = url("/equipGroup");
        echo "<script>alert('删除成功！');window.location.href='{$url}';</script>";

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

    public function allSwitch($id,$status){
        //dd(__DIR__);
        $e = EquipmentGroup::select('equipments')->where('id',$id)->where('user_id',Auth::user()->id)->get()->toArray();
        $equip = array_filter(explode(',',$e[0]['equipments']));
        foreach($equip as $v){
            Equipment::where('id',$v)->update(['status'=>$status]);
        }
        $url = url("/equipGroup/groupInfo/{$id}");
        echo "<script>alert('操作成功！');window.location.href='{$url}';</script>";
    }



    /*
     * 转换设备的查看方式为便捷分组
     */
    public static function quick(){
        $equips  = null;
        $equips = EquipmentGroup::where('user_id',Auth::user()->id)->get()->toArray();
        if($equips == null){
            $url = url("/equip");
            echo "<script>alert('您还没有便捷分组！');window.location.href='{$url}';</script>";
            die;
        }
        foreach($equips as $v){
            $eid[] = array_filter(explode(',',$v['equipments']));
        }
//        dd($eid);
        for($i=0;$i<count($eid);$i++){
            for($j=0;$j<count($eid[$i]);$j++){
                $ename[$i][] = Equipment::select('name')->where('id',$eid[$i][$j])->get()->toArray();
            }
        }
//dd($ename);
        for($k=0;$k<count($ename);$k++){
            for($a=0;$a<count($ename[$k]);$a++){
                $equipName[$k][] = $ename[$k][$a][0]['name'];
            }
        }
//        dd($equipName);

        for($i=0;$i<count($equips);$i++){
            $equips[$i]['equip_name'] = $equipName[$i];
            unset($equips[$i]['equipments'],$equips[$i]['created_at'],$equips[$i]['updated_at']);
        }
//        dd($equips);
        return view('equipGroups.quick',compact('equips'));
    }

}
