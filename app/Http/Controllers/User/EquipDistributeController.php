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

    //查看为好友分配的设备
    public function getDistribute($email){
        $myId = Auth::user()->id;
        $fd = new FriendController();
        $id = $fd->getIdByEmail($email);
        //获取好友列表
        $friendArr = $fd->getFriends($myId);

        foreach($friendArr as $friend){
            $idArr[] = $friend->userid;
        }
        if(!in_array($id,$idArr)){
            //判断是否在好友列表里
            return redirect("/friend")->withErrors('信息有误');
        }else{
            //查询分配记录
            $equips = EquipDistribute::where('to',$id)->where('from',$myId)->get()->toArray();
//            dd(count($equips));
            if(count($equips) == 0){
                //没有记录,跳转到添加界面
                return redirect("/distribute/showSetEquip/userid/$id");
            }else{
//dd($equips);
                foreach($equips as $a){
                    //获取设备名字和主机id
                    $enames[] = Equipment::select('host_id','name')->where('id',$a['equipments'])->get()->toArray();
                }
                foreach($enames as $b){
                    $equipInfo[$b[0]['host_id']][] = $b[0]['name'];
                }
                $key = array_keys($equipInfo);//获取主机id
                foreach($key as $c) {
                    $name[]= Host::find($c)->toArray();
                }

//                dd($name,$id);
                return view('/distribute/equip',compact(['equipInfo','name','email','id','equips']));
            }
        }
    }


    //为好友添加设备
    public function showSetEquip($id){
        $fd = new FriendController();
        //获取好友列表
        $friendArr = $fd->getFriends(Auth::user()->id);

        foreach($friendArr as $friend){
            $idArr[] = $friend->userid;
        }
        if(!in_array($id,$idArr)){
            return redirect('/friend')->withErrors('信息有误！');
        }

        $equips = null;
        $equips = EquipDistribute::where('to',$id)
            ->where('from',Auth::user()->id)
            ->get()->toArray();

        //获取所有的主机和设备信息
        $equipObj = new EquipController();
        $equip = $equipObj->getHostEquip(Auth::user()->id);
        $fd = new FriendController();
        $femail=$fd->getEmailById($id);
    /*    dd($equip);
                array:2 [▼
          "公司" => array:3 [▼
            0 => array:2 [▼
              "id" => 18
              "name" => "灯2"
            ]
            1 => array:2 [▼
              "id" => 19
              "name" => "灯3"
            ]
            2 => array:2 [▼
              "id" => 20
              "name" => "灯4"
            ]
          ]
          "家" => []
        ]*/
        if($equips == null){ //还未分配过设备

            $equipId = [];
//            dd($femail,$equip);
            return view('distribute.setEquip',compact('equip','equipId','id','femail'));
        }else{
            foreach($equips as $item){
                $equipId[] = $item['equipments'];
            }
        }
//        dd($equips,$equip,$equipId);
        return view('distribute.setEquip',compact('equip','equipId','id','femail'));

    }

    public function setEquip(Request $request){
        $this->validate($request,[
            'equip_id'=>'required'
        ]);
        $to = $request->to;
        $email = User::find($to);
        $equipId = $request->equip_id;
        foreach($equipId as $item){
            $ed = new EquipDistribute();
            $ed->from = Auth::user()->id;
            $ed->to = $to;
            $ed->equipments = $item;
            $ed->save();
        }


        return redirect("/distribute/getDistribute/{$email['email']}")->withSuccess('添加设备成功');

    }

    //为好友删除设备
    public function deleteEquip1($id){
        $fd = new FriendController();
        //获取好友列表

        $friendArr = $fd->getFriends(Auth::user()->id);
        $email = $fd->getEmailById($id);
        foreach($friendArr as $friend){
            $idArr[] = $friend->userid;
        }
        if(!in_array($id,$idArr)){
            return redirect('/friend')->withErrors('信息有误！');
        }

        //获取分配表设备信息
        $equips = EquipDistribute::where('to',$id)
            ->where('from',Auth::user()->id)
            ->select('equipments')
            ->get()->toArray();

        //获取设备id和名称
        foreach($equips as $v){
            $eName[] = Equipment::select('id','name')->where('id',$v['equipments'])->get()->toArray();
        }

        foreach($eName as $a){
            $equip[] = $a[0];
        }
        for($i=0;$i<count($equips);$i++){
            $equipInfo[$i]['host'] = EquipController::getHostByEquipId($equips[$i]['equipments'])[0];
            $equipInfo[$i]['equip'] = $equip[$i];
        }

        for($j=0;$j<count($equipInfo);$j++){
            //以主机名为下标区分设备属于哪个主机
            $equipGroup[$equipInfo[$j]['host']->name][] = $equipInfo[$j]['equip'];
        }

//        dd($equipGroup);
        return view('distribute.deleteEquip',compact(['email','id','equipGroup']));
    }

    public function deleteEquip2(Request $request){
        $this->validate($request,[
            'equip_id'=>'required',
        ]);
        $to = $request->id;
        $email = User::find($to);
        $equipId = $request->equip_id;
        foreach($equipId as $item){
            EquipDistribute::where('from',Auth::user()->id)
                ->where('to',$to)
                ->where('equipments',$item)
                ->delete();
        }
        return redirect("/distribute/getDistribute/{$email['email']}")->withSuccess('删除设备成功');
    }
}
