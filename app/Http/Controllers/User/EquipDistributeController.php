<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Models\EquipDistribute;
use App\User;
use App\Http\Controllers\User\FriendController;
use Auth;
use App\Models\Equipment;
use App\Models\Host;
use Illuminate\Support\Facades\Input;
use App\Http\Controllers\Equip\EquipController;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;

/*
 * 设备分配
 */
class EquipDistributeController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct(){
        $this->middleware('auth');
    }

    //为好友分配设备
    public function getDistribute($email){
        $myId = Auth::user()->id;
        $fd = new FriendController();
        $id = $fd->getIdByEmail($email);
        //获取好友列表
        $friendArr = DB::select("select userid1 as friendId from friend where userid2='{$myId}'
                                  union select userid2 as friendId from friend where userid1='{$myId}'");
        foreach($friendArr as $friend){
            $idArr[] = $friend->friendId;
        }

        if(!in_array($id,$idArr)){
            //判断是否在好友列表里
            $url=url('/friend');
            echo "<script>alert('信息有误！');window.location.href='{$url}';</script>";
        }else{
            $equips = EquipDistribute::where('to',$id)->where('from',$myId)->get()->toArray();
//            dd($equips);
            if($equips == null || $equips[0]['equipments']==null ){
                $ed = new EquipDistribute;
                $ed->from = $myId;
                $ed->to = $id;
                $ed->save();

                $groupId = EquipDistribute::where('from',$myId)->where('to',$id)->select('id')->get()->toArray();
                $url=url("/distribute/showSetEquip/{$groupId[0]['id']}");
                echo "<script>alert('还未分配设备！');window.location.href='{$url}';</script>";
            }else{
                $disId = $equips[0]['id'];
                $eid = $equips[0]['equipments'];
                $eids = array_filter(explode(',',$eid));
                foreach($eids as $a){
                    $enames[] = Equipment::select('host_id','name')->where('id',$a)->get()->toArray();
                }
//dd($enames);
                foreach($enames as $b){
                    $equipInfo[$b[0]['host_id']][] = $b[0]['name'];
                }
                $key = array_keys($equipInfo);//获取主机id
                foreach($key as $c) {
                    $name[]= Host::find($c)->toArray();
                }
//            dd($name);

//            dd($equipInfo);
//            array:2 [▼
                //      1 => array:3 [▼
                //    0 => "厨房灯"
                //    1 => "卫生间灯"
                //    2 => "大厅灯6666666"
                //  ]
                //  2 => array:2 [▼
                //    0 => "公司前台"
                //    1 => "办公室"
                //  ]
                //主机1有3个，主机2有2个
                return view('/distribute/equip',compact(['equipInfo','name','email','disId']));
            }
        }
    }


    //为好友添加设备
    public function showSetEquip($id){
        $group = EquipDistribute::where('id',$id)->where('from',Auth::user()->id)->get()->toArray();
//        dd($group);
        $equipId = array_filter(explode(',',$group[0]['equipments']));//去除逗号再去除最后一个null

//        dd($equipId);
        //获取当前用户所有主机的所有设备
        $equipObj = new EquipController();
        $equip = $equipObj->getHostEquip(Auth::user()->id);
        return view('distribute.setEquip',compact('equip','equipId','group'));
    }

    public function setEquip(Input $input){
        $data = $input::all();
        $groupId = $data['group_id'];
        $equipId = $data['equip_id'];
        $to = EquipDistribute::select('to')->where('id',$groupId)->where('from',Auth::user()->id)
            ->get()->toArray();
        $email = User::find($to[0]['to']);

        $newEquip = EquipDistribute::select('equipments')->where('id',$groupId)->where('from',Auth::user()->id)
            ->get()->toArray();

        foreach($equipId as $v){
            $newEquip[0]['equipments'].=$v.',';
        }
        //  $newEquip = $oldEquip.$equipId;

//        dd($newEquip);

        EquipDistribute::where('id',$groupId)->where('from',Auth::user()->id)
            ->update(['equipments'=>$newEquip[0]['equipments']]);
        $url=url("/distribute/getDistribute/{$email['email']}");
        echo "<script>alert('添加设备成功！');window.location.href='{$url}';</script>";

    }

    //为好友删除设备
    public function deleteEquip1($id){
        $group = EquipDistribute::where('id',$id)->where('from',Auth::user()->id)->get()->toArray();
//        dd($group);
        $equipId = array_filter(explode(',',$group[0]['equipments']));//去除逗号再去除最后一个null
        foreach($equipId as $v){
            $eName[] = Equipment::select('name')->where('id',$v)->get()->toArray();
        }
        foreach($eName as $a){
            $equipName[] = $a[0]['name'];
        }

//        dd($equipName);
        return view('distribute.deleteEquip',compact(['group','equipId','equipName']));
    }

    public function deleteEquip2(Input $input){
        $data = $input::all();
        $id = $data['group_id'];
        $equipId = $data['equip_id'];

        $to = EquipDistribute::select('to')->where('id',$id)->where('from',Auth::user()->id)
            ->get()->toArray();
        $email = User::find($to[0]['to']);
        $e = implode(',',$equipId).",";

        $group = EquipDistribute::where('id',$id)->where('from',Auth::user()->id)->get()->toArray();
        //将要删除的id串替换为空
        $newEquipId = str_replace($e,'',$group[0]['equipments']);
        EquipDistribute::where('id',$id)->where('from',Auth::user()->id)
            ->update(['equipments'=>$newEquipId]);
        $url=url("/distribute/getDistribute/{$email['email']}");
        echo "<script>alert('删除设备成功！');window.location.href='{$url}';</script>";
    }
}
