<?php

namespace App\Http\Controllers\User;

use App\Models\EquipDistribute;
use App\Models\Equipment;
use App\Models\Friend;
use App\Models\FriendGroup;
use App\Models\FriendRequest;
use App\Models\Host;
use App\User;

use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;

class FriendController extends Controller
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
    public function home(){
        //查看好友请求

        $fremailAdd = $this->getRequestInfo(2);
        $fremailPass = $this->getRequestInfo(1);
        $fremailDeny = $this->getRequestInfo(0);

        //获取好友列表
        $friendGroup = new FriendGroupController();
        $fg = $friendGroup->getFriendGroupById(Auth::user()->id);
        //dd($fg);
        if(count($fg) ==1 && $fg[0]['users'] == null){
            $tmp[]=$fg[0]['name'];
            $data['name'] = $tmp;
            $data['email'] = null;
        }
        else {
            foreach ($fg as $v) {
                $name[] = $v['name'];
                $friends[] = $v['users'];
            }
            foreach ($friends as $a) {
                if ($a != null) {
                    $friends1[] = explode(',', $a);//以,分组取出
                } else {
                    $friends1[] = $a;
                }

            }
//            dd($friends1);
            foreach ($friends1 as $b) {
//                dd($b);
                if ($b != null) {
                    $friends2[] = array_filter($b);//去除最后一个null值
//                    dd($friends2);
                } else {
//                    dd($b);
                    $friends2[] = $b;
//
                }
            }
//            dd($friends2);
            for($i=0;$i<count($friends2);$i++){
                if($friends2[$i]!=null){
                    for($j=0;$j<count($friends2[$i]);$j++){
                        $emails[$i][] = $this->getEmailById($friends2[$i][$j]);
                    }
                }else {
                    $emails[][] = null;
                }
            }
//            foreach ($friends2 as $c) {
//                if ($c != null) {
//
//                    foreach ($c as $d) {
//
//                    }
//                } else {
//                    $emails[][] = null;
//                }
//            }
            //dd($friends2);
//dd($emails);
            $data = [
                'name' => $name,
                'email' => $emails,
            ];
        }
//dd($data);
        $group = $friendGroup->getGroupNameById(Auth::user()->id);
        return view('friends.home',compact(['data','fremailAdd','fremailPass','fremailDeny','group']));

    }

    //获取好友请求信息
    public function getRequestInfo($type){
        if($type == 2){
            $fromId = FriendRequest::select('from')
                ->where('to',Auth::user()->id)
                ->where('pass',2)//未处理
                ->get()
                ->toArray();
//        dd($fromId);
            if($fromId == null){
                $fremail = null;
            }else{
                foreach($fromId as $v){
                    $fremail[] = $this->getemailById($v['from']);
                }
            }
        }else{
            $fromId = FriendRequest::select('to')
                ->where('from',Auth::user()->id)
                ->where('pass',$type)//1通过 0未通过
                ->get()
                ->toArray();
//        dd($fromId);
            if($fromId == null){
                $fremail = null;
            }else{
                foreach($fromId as $v){
                    $fremail[] = $this->getEmailById($v['to']);
                }
            }
        }
        return $fremail==null?null:$fremail;
    }

    //通过id得到邮箱
    public function getEmailById($id){
        $email = User::select('email')->where('id',$id)->get();
        return $email[0]->email!=null?$email[0]->email:null;
    }


    //处理好友请求
    public function handle(){
        $data = Input::all();
//        dd($data);
        $pass = $data['pass'];
        $to = $data['to'];
        $fromemail = $data['from'];
        $from = $this->getIdByEmail($fromemail);
//        dd($from);
        if($pass == 1){//通过请求
            //添加到friend表
            $friend = new Friend();
            $friend->userid1 = $from;
            $friend->userid2 = $to;
            $friend->save();


            //friend_group表的更新(添加人和被添加人)

            //添加人
            //获取添加人要添加的分组
            $groupFrom = FriendRequest::select('group')
                ->where('from',$from)
                ->where('to',$to)
                ->where('pass',2)
                ->get()
                ->toArray();



            //获取这组已有好友列表
            $friendGroup = new FriendGroupController();
            $friendList1 = $friendGroup->getUsers($from,$groupFrom[0]['group']);

            //再把to加上
            $list1 = $friendList1[0]['users'].$to.",";
            DB::table('friend_group')
                ->where('user_id',$from)
                ->where('name',$groupFrom[0]['group'])
                ->update(['users'=>$list1]);


            //被添加人
            //获取这组已有好友列表
            $groupTo = $data['group'];
            $friendList2 = $friendGroup->getUsers($to,$groupTo);
            //加上from
            $list2 = $friendList2[0]['users'].$from.",";
            DB::table('friend_group')
                ->where('user_id',$to)
                ->where('name',$groupTo)
                ->update(['users'=>$list2]);



            //friend_request表的更新

            DB::table('friend_request')
                ->where('from',$from)
                ->where('to',$to)
                ->update(['pass'=>$pass]);
            $url=url("/friend");
            echo "<script>alert('添加成功！');window.location.href='{$url}';</script>";
           // return Redirect::action('User\FriendController@home');
            //return redirect()->action('UserController@home');

        }elseif($pass == 0){//拒绝
            //friend_request表的更新

            DB::table('friend_request')
                ->where('from',$from)
                ->where('to',$to)
                ->update(['pass'=>$pass]);

            $url=url("/friend");
            echo "<script>alert('操作成功！');window.location.href='{$url}';</script>";
        }elseif($pass == 3){//忽略
            //friend_request表的更新

            DB::table('friend_request')
                ->where('from',$from)
                ->where('to',$to)
                ->where(['pass'=>2])
                ->delete();

            $url=url("/friend");
            echo "<script>alert('操作成功！');window.location.href='{$url}';</script>";
        }
    }

    //通过email得到id
    public function getIdByEmail($email){
        $id = User::select('id')->where('email',$email)->get();
        return $id[0]->id;
    }

    //添加好友
    public function showAddForm()
    {
//            dd(123);
        $friendGroup = new FriendGroupController();
        $groups = $friendGroup->getGroupNameById(Auth::user()->id);
        return view('friends.add', compact('groups', $groups));
    }

    public function add(Requests\AddFriendRequest $request){

       // dd($request);
        $emails = User::getEmails();
        foreach($emails as $email){
            $validateEmail[] = $email->email;
        }
        if( !in_array($request->email,$validateEmail)){
            $url = url('/friend/add');
            echo "<script>alert('用户不存在！');window.location.href='{$url}';</script>";
        }

        //添加到好友请求表
        $to = $this->getIdByEmail($request->email);
//            dd($to);
        $fr = new FriendRequest;
        $fr->from = Auth::user()->id;
        $fr->to = $to;
        $fr->group = $request->group;
        $fr->save();
        $url = url('/friend');
        echo "<script>alert('请求已发出！');window.location.href='{$url}';</script>";
    }


    //好友处理反馈信息
    public function handleResult($from,$to,$pass){
        $toId = $this->getIdByEmail($to);
        FriendRequest::where('from',$from)->where('to',$toId)->where('pass',$pass)->delete();
        $url = url('/friend');
        echo "<script>alert('确定');window.location.href='{$url}';</script>";
    }
}
