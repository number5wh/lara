<?php

namespace App\Http\Controllers\Equip;

use App\Models\AirCondition;
use App\Models\Fan;
use App\Models\Light;
use App\Models\TV;
use Illuminate\Http\Request;
use Auth;
use App\User;
use App\Models\Equipment;
use App\Models\EquipmentGroup;
use App\Models\Host;
use App\Models\EquipDistribute;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
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
     * 首页,按设备类型分组显示
     */

    public function home()
    {
        //获取用户主机下的设备
        $hosts = User::find(Auth::user()->id)->getHostName->toArray();
        $equip = null;
        if(count($hosts != 0)){
            foreach($hosts as $host){
                $equip[] = Host::find($host['id'])->equipmentByType->toArray();
            }
        }
        if($equip != null){
            foreach($equip as $a){
                foreach($a as $b){
                    if($b != null){
                        $equips[] = $b;
                    }
                }
            }
        }

        //别人分配的设备
        $equip2 = $this->getDistributeEquip();
        if(count($equip2)!=0){
            foreach($equip2 as $c){
                foreach($c as $d){
                    $equips[] = $d;
                }
            }
        }

        //设备类型
        $light = $fan = $tv = $air = null;
        foreach($equips as $e){
            if($e['type_id'] == 1){
                $light[] = $e;
            }elseif($e['type_id'] == 2){
                $air[] = $e;
            }elseif($e['type_id'] == 3){
                $tv[] = $e;
            }elseif($e['type_id'] == 4){
                $fan[] = $e;
            }
        }
       // dd($light,$fan,$tv,$air);

        return view('equips.home',compact(['light','fan','tv','air']));

    }
    /*
     * 按主机分组显示
     */
    public function hostGroup()
    {
        //主机部分
        $equip = $this->getHostEquip(Auth::user()->id);
        //被分配的部分
        $equip2 = $this->getDistributeEquip();
        return view('equips.hostGroup',compact(['equip','equip2']));

    }

    /*
     * 主机和设备关联信息
     */
    public function getHostEquip($id){
        $hosts = User::find($id)->getHostName->toArray();
        //dd($hosts);
        $c=null;$equip=null;
        foreach($hosts as $host){
            $equip[$host['name']] = Host::find($host['id'])->equipmentByType->toArray();
        }
        return $equip;
    }

    //获取被分配的设备信息
    public function getDistributeEquip(){
        $group = EquipDistribute::where('to',Auth::user()->id)->select('id','from','to','equipments')->get()->toArray();
        if($group == null){
            return null;
        }
        for($i=0;$i<count($group);$i++){
            $equipId[] = array_filter(explode(',',$group[$i]['equipments']));
        }

        $equip = null;
        foreach($equipId as $a){
            foreach($a as $b){
                $equip[] = Equipment::select('id','name','type_id')->where('id',$b)->get()->toArray();
            }

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
            return $this->hostGroup();
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
        //添加到设备表
        $equip = new Equipment();
        $equip->name = $request->name;
        $equip->type_id = $request->type_id;
        $equip->host_id = $request->host_id;
        $equip->save();

        $equipid = DB::select("
        select `id` from `equipment` where `name`=:name AND `host_id`=:host order by `created_at` desc LIMIT 0,1",
            ['name'=>$request->name,'host'=>$request->host_id]
        );
        //给设备添加默认设置信息
        if($request->type_id == 1){//灯
            $set = new Light();
            $set->equipment_id = $equipid[0]->id;
            $set->light = 1;
            $set->save();
        }elseif($request->type_id == 2) {//空调
            $set = new AirCondition();
            $set->equipment_id = $equipid[0]->id;
            $set->save();
        }elseif($request->type_id == 3) {//电视
            $set = new TV();
            $set->equipment_id = $equipid[0]->id;
            $set->save();
        }elseif($request->type_id == 4) {//风扇
            $set = new Fan();
            $set->equipment_id = $equipid[0]->id;
            $set->save();
        }
        return redirect('/equip')->withSuccess('添加设备成功');
    }

    //移除设备
    public function showDeleteForm(){
        $equip = $this->getHostEquip(Auth::user()->id);
        return view('equips.deleteEquip')->with('equip',$equip);
    }

    public function delete(Request $request){
        $this->validate($request,[
            'equip_id'=>'required',
        ]);
        $deleteId = $request->equip_id;
        foreach($deleteId as $id){
            //删除设备设置表上的数据
            $type = $this->getTypeById($id);
            if($type[0]['type_id'] == 1){
                Light::where('equipment_id',$id)->delete();
            }elseif($type[0]['type_id'] == 2){
                AirCondition::where('equipment_id',$id)->delete();
            }elseif($type[0]['type_id'] == 3){
                TV::where('equipment_id',$id)->delete();
            }elseif($type[0]['type_id'] == 4){
                Fan::where('equipment_id',$id)->delete();
            }
            //删除设备表上的数据
            Equipment::where('id',$id)
                ->delete();
            //删除便捷分组的数据
            EquipDistribute::where('equipments',$id)->delete();
            //删除分配给别人的数据
            EquipmentGroup::where('equipments',$id)->delete();
        }
        return redirect('/equip')->withSuccess('移除成功');
    }

    public static function getHostByEquipId($id)
    {
       return DB::select("select b.host_id,a.name from host a left join  equipment b on a.id=b.host_id
                  where b.id=:id",['id'=>$id]);
    }

    //根据设备id获取其类型
    protected function getTypeById($id)
    {
        return Equipment::where('id',$id)->select('type_id')->get()->toArray();
    }

}
