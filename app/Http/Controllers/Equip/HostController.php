<?php

namespace App\Http\Controllers\Equip;
use App\Models\Host;
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
        // $this->middleware('auth');
    }

    //添加主机
    public function showAddForm(){
        return view('hosts.add');
    }

    public function add(Request $request){

//        echo 1;
        $name = $request->name;
        $password = $request->password;
        $res = '';
        $res  =  $this->checkHost($name,$password);
//        dd($res);
        if($res!='right'){
            echo $res;
        }else{

            //更新主机表
            Host::where('name',$name)
                ->where('password',$password)
                ->update([
                    'user_id'=>Auth::user()->id
                ]);
            //更新user表
            User::where('id',Auth::user()->id)->update(['is_admin'=>1]);
            //更新Auth
            Auth::user()->admin_id = 1;

            //输出到ajax
            echo $res;
        }
    }
    //验证主机名
    public function checkHost($name,$password){
        $names = Host::select('name')->get()->toArray();
//        dd($names);
        foreach($names as $a){
            $b[] = $a['name'];
        }

        //主机名不对
        if(!in_array($name,$b)){
            return 'wrong host name';
        }else{
            $u = Host::select('user_id')->where('name',$name)->get();
            if($u[0]['user_id']!=0){
                //主机已经登录过了
                return 'already login';
            }

            $correctPass = Host::select('password')->where('name',$name)->get();
            if($password!=$correctPass[0]->password){
                //密码不对
                return 'wrong password';
            }else{
                //信息正确
                return 'right';
            }
        }
    }
}
