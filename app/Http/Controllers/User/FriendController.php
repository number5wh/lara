<?php

namespace App\Http\Controllers\User;

use App\Models\EquipDistribute;
use App\Models\EquipmentGroup;
use App\Models\Friend;
use App\Models\FriendGroup;
use App\Models\FriendGroupDetail;
use App\Models\FriendRequest;
use App\User;

use Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
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
        //获取好友分组和列表

        $friendGroup = new FriendGroupController();
        $fg = $friendGroup->getFriendGroupById(Auth::user()->id);
        $friends = $friendGroup->getFriendList();

        //获取好友email
        foreach($friends as $k=>$v){
            $friends[$k]['friend_email'] = $this->getEmailById($v['users']);
        }
//        dd($fg,$friends);
        return view('friends.home',compact(['friends','fg','fremailAdd','fremailPass','fremailDeny']));

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
                    $fremail[] = $this->getEmailById($v['from']);
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

            //主动添加人
            //获取添加人要添加的分组
            $groupFrom = FriendRequest::select('group')
                ->where('from',$from)
                ->where('to',$to)
                ->where('pass',2)
                ->get()
                ->toArray();


            //添加到分组里
            $fd = new FriendGroupDetail();
            $fd->user_id = $from;
            $fd->group_id = $groupFrom[0]['group'];
            $fd->users = $to;
            $fd->save();

            //被添加人
            $groupTo = $data['group'];
            $fd = new FriendGroupDetail();
            $fd->user_id = $to;
            $fd->group_id = $groupTo;
            $fd->users = $from;
            $fd->save();

            //friend_request表的更新

            DB::table('friend_request')
                ->where('from',$from)
                ->where('to',$to)
                ->update(['pass'=>$pass]);
            return redirect('/friend')->withSuccess('添加成功!');


        }elseif($pass == 0){//拒绝
            //friend_request表的更新

            DB::table('friend_request')
                ->where('from',$from)
                ->where('to',$to)
                ->update(['pass'=>$pass]);
            return redirect('/friend')->withErrors('已拒绝');

        }elseif($pass == 3){//忽略
            //friend_request表的更新

            DB::table('friend_request')
                ->where('from',$from)
                ->where('to',$to)
                ->where(['pass'=>2])
                ->delete();
            return redirect('/friend')->withSuccess('已忽略');
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
        $friendGroup = new FriendGroupController();
        $groups = $friendGroup->getFriendGroupById(Auth::user()->id);
        return view('friends.add', compact('groups', $groups));
    }

    public function add(Requests\AddFriendRequest $request){

        if($request->email == Auth::user()->email){//是自身账号？
            echo "self";
            die;
        }
        $emails = User::getEmails();
        foreach($emails as $email){
            $validateEmail[] = $email->email;
        }

//        dd($request->email,$validateEmail);
//        dd(in_array($request->email,$validateEmail));
        if( in_array($request->email,$validateEmail) === FALSE){//账号不存在？
            echo "not exist";
            die;
        }

        //获取已有的好友
        $friends = $this->getFriends(Auth::user()->id);
        if($friends!=null){
            $emails2 = null;
            foreach($friends as $friend){
                $emails2[] = $this->getEmailById($friend->userid);
            }
            // dd($emails2,$request->email);
            if( in_array($request->email,$emails2)){//已在好友列表里
                echo "existed";
                die;
            }
        }

//        dd(666);
        $fq = FriendRequest::where('from',Auth::user()->id)
            ->where('to',$this->getIdByEmail($request->email))->get()->toArray();
        $fq2 = FriendRequest::where('to',Auth::user()->id)
            ->where('from',$this->getIdByEmail($request->email))->get()->toArray();
        if(count($fq)!=0 || count($fq2)!=0){//好友请求还未处理，不能再发起另一次请求
            echo "can't send twice";
            die;
        }
        //添加到好友请求表

        //dd($request->group);
        $to = $this->getIdByEmail($request->email);
        $fr = new FriendRequest;
        $fr->from = Auth::user()->id;
        $fr->to = $to;
        $fr->group = $request->group;
        $fr->save();
        echo "success";
        die;
    }


    /*
     * 获取已有好友列表
     */
    public function getFriends($id){
        $friend1 = DB::select("select userid2 userid from friend where userid1 = :userid1
            UNION select userid1 userid from friend where userid2 = :userid2",
            ['userid1'=>$id,'userid2'=>$id]);
        return $friend1;
    }


    //好友处理反馈信息
    public function handleResult($from,$to,$pass){
        $toId = $this->getIdByEmail($to);
        FriendRequest::where('from',$from)->where('to',$toId)->where('pass',$pass)->delete();
        return redirect('/friend')->withSuccess('已处理');
    }

    /*
     * 批量删除好友
     */
    public function showDeleteForm(){
        //获取好友分组和列表
        $friendGroup = new FriendGroupController();
        $fg = $friendGroup->getFriendGroupById(Auth::user()->id);
        $friends = $friendGroup->getFriendList();

        //获取好友email
        foreach($friends as $k=>$v){
            $friends[$k]['friend_email'] = $this->getEmailById($v['users']);
        }
//        dd($fg,$friends);
        return view('friends.delete',compact(['friends','fg']));
    }

    public function delete(Request $request)
    {
        $myId = Auth::user()->id;
        $this->validate($request,[
            'id'=>'required',
        ]);
        $idArr = $request->id;

        foreach($idArr as $id){
            $friendInfo = User::find($id)->toArray();
            if(Auth::user()->is_admin == 1){
                //获取分配给好友的设备
                $equipDistribute1 = EquipDistribute::where('from',$myId)->where('to',$id)->select('equipments')->get()->toArray();
                if(count($equipDistribute1)!= 0){
                    //先删除好友便捷分组里所分配的设备
                    foreach($equipDistribute1 as $a){
                        EquipmentGroup::where('user_id',$id)
                            ->where('equipments',$a['equipments'])
                            ->delete();
                    }
                    //删除分配给好友的设备
                    EquipDistribute::where('from',$myId)->where('to',$id)->delete();
                }
             }

            if($friendInfo['is_admin'] == 1){
                //获取好友分配的设备
                $equipDistribute2 = EquipDistribute::where('from',$id)->where('to',$myId)->select('equipments')->get()->toArray();
                if(count($equipDistribute2)!= 0){
                    //先删除便捷分组里对应的设备
                    foreach($equipDistribute2 as $b){
                        EquipmentGroup::where('user_id',$myId)
                            ->where('equipments',$b['equipments'])
                            ->delete();
                    }
                    //删除好友分配的设备
                    EquipDistribute::where('from',$id)->where('to',$myId)->delete();
                }
            }
            //删除双方好友分组里的好友信息
            FriendGroupDetail::where('user_id',$myId)->where('users',$id)->delete();
            FriendGroupDetail::where('user_id',$id)->where('users',$myId)->delete();
            //删除好友列表里的信息
            Friend::where('userid1',$myId)->where('userid2',$id)->delete();
            Friend::where('userid1',$id)->where('userid2',$myId)->delete();
        }

        return redirect('/friend')->withSuccess('删除好友成功');
    }

}
