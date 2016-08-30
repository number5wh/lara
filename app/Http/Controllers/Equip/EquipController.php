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
    public function home(Request $request)
    {
        //主机部分
       // dd($request->cookie());
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

    //添加设备(添加那些已被移除的设备)
    public function addEquip1(){
        //
        $hosts = User::find(Auth::user()->id)->getHostId->toArray();
//        dd($hosts);
        $c = null;

        $deleted =null;
        foreach($hosts as $host){
            $deleted[] = Host::find($host['id'])->equipmentIdDeleted->toArray();

        }
        //        dd($deleted);

        /*
         * deleted格式
          array:2 [▼
          0 => array:4 [▼
            "id" => 2
            "name" => "卫生间灯"
            "host_id" => 1
            "host_name" => "host1"
          ]
          1 => array:4 [▼
            "id" => 3
            "name" => "公司前台"
            "host_id" => 2
            "host_name" => "host2"
          ]
        ]
         *
         * */
        foreach($deleted as $a){
//            dd($a);
            foreach($a as $b){
                $res =  DB::select("select a.host_id host_id,b.name host_name from equipment a left join host b on a.host_id=b.id where a.id=?",[$b['id']]);
                $b['host_id'] =$res[0]->host_id;
                $b['host_name'] = $res[0]->host_name;
                $c[] = $b;
            }
        }
//        dd($c);
        if($c == null){
            $url = url("/equip");
            echo "<script>alert('没有可添加的设备！');window.location.href='{$url}';</script>";
        }else{

            return view('equips.addEquip')->with('deleted',$c);
        }


    }

    public function addEquip2($id)
    {
        Equipment::where('id',$id)->update([
            'is_deleted'=>0
        ]);
        $url = url("/equip/addEquip1");
        echo "<script>alert('添加成功！');window.location.href='{$url}';</script>";
    }

    //移除设备
    public function deleteEquip1(){
        $equip = $this->getHostEquip(Auth::user()->id);
        return view('equips.deleteEquip')->with('equip',$equip);
    }

    public function deleteEquip2(Input $input){
        $deleteId = $input::all()['equip_id'];
        foreach($deleteId as $id){
            Equipment::where('id',$id)->update(['is_deleted'=>1]);
        }
        $url = url("/equip");
        echo "<script>alert('移除成功！');window.location.href='{$url}';</script>";
    }

}
