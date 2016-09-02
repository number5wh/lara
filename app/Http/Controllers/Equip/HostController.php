<?php

namespace App\Http\Controllers\Equip;
use App\Models\Host;
use App\Models\HostType;
use App\User;
use Illuminate\Http\Request;
use Auth;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HostController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct(){
        $this->middleware('auth');
    }

    //添加主机
    public function showAddForm(){
        $hostType = HostType::get()->toArray();

        return view('hosts.add',compact('hostType'));
    }

    public function add(Requests\AddHostRequest $request){

//        echo 1;
        $type = $request->type;
        $name = $request->name;
        $password = $request->password;
        $res = '';
       // $res  =  $this->checkHost($id,$password);
//        dd($res);
//        if($res!='right'){
//            echo $res;
//        }else{

            //添加到主机表
        $host  = new Host();
        $host->name = $name;
        $host->type_id = $type;
        $host->password = $password;
        $host->user_id = Auth::user()->id;
        $host->save();
        //更新user表
        User::where('id',Auth::user()->id)->update(['is_admin'=>1]);
        //更新Auth

        Auth::user()->admin_id = 1;

        return redirect('/equip')->withSuccess('添加主机成功');
        //输出到ajax
//        echo 'success';
    }
    //验证主机名
    public function checkHost($id,$password){
        $hostId = Host::select('id')->get()->toArray();
//        dd($names);
        foreach($hostId as $a){
            $b[] = $a['id'];
        }

        //主机名不对
        if(!in_array($id,$b)){
            return 'wrong host name';
        }else{
            $u = Host::select('user_id')->where('id',$id)->get();
            if($u[0]['user_id']!=0){
                //主机已经登录过了
                return 'already login';
            }

            $correctPass = Host::select('password')->where('id',$id)->get();
            if($password!=$correctPass[0]->password){
                //密码不对
                return 'wrong password';
            }else{
                //信息正确
                return 'success';
            }
        }
    }
    /*
     * 根据主机id获取主机名
     */
    public static function getNameById($id){
       return Host::where('id',$id)->select('name')->first()->toArray();
    }

}
