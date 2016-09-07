<?php

namespace App\Http\Controllers\User;
use App\Models\FriendGroup;
use App\Models\FriendGroupDetail;
use App\User;
use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\AddFriendGroupRequest;

class FriendGroupController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct(){
       $this->middleware('auth');
    }

    /**
     * 根据用户id获取好友分组id和名字
     */
    public function getFriendGroupById($id){
        $friends = FriendGroup::select('id','name')
            ->where('user_id',$id)
            ->get()
            ->toArray();
        return $friends;
    }

    /*
     * 获取所有分组的所有好友
     */
    public function getFriendList()
    {
        return FriendGroupDetail::where('user_id',Auth::user()->id)
            ->get()->toArray();
    }

    /**
     * 获取某组已有好友列表
     */
    public function getUsers($userid,$groupId){
        $friendList1 = FriendGroupDetail::select('users')
            ->where('user_id',$userid)
            ->where('group_id',$groupId)
            ->get()
            ->toArray();
        return $friendList1;
    }

    //添加好友分组
    public function showAddForm(){
        return view('friendGroups.add');
    }

    public function add(AddFriendGroupRequest $request){
        $friendGroup = new FriendGroup();
        $friendGroup->user_id = Auth::user()->id;
        $friendGroup->name = $request->name;
        $friendGroup->save();
        return redirect("/friend")->withSuccess('添加成功');
    }
    
    /*
     * 删除好友分组
     */
    public function showDeleteForm()
    {
        $fg = $this->getFriendGroupById(Auth::user()->id);
        if(count($fg) == 1 && $fg[0]['name'] == '默认'){
            return redirect('/friend')->withErrors('默认分组不能删除');
        }
        return view('friendGroups.delete',compact('fg'));
    }

    public function delete(Request $request)
    {
        $this->validate($request,[
           'groupId'=>'required'
        ]);

        //获取默认分组id
        $defaultGroupId = FriendGroup::where('name','默认')
            ->where('user_id',Auth::user()->id)
            ->select('id')
            ->get()->toArray();

        $groupId = $request->groupId;
        //以，数组传递过来的
//        dd($groupId);
        $idArr = array_filter(explode(',',$groupId));

//        dd($idArr);
        foreach($idArr as $gid){
            //将里面的好友转移到默认分组
            FriendGroupDetail::where('user_id',Auth::user()->id)
                ->where('group_id',$gid)
                ->update([
                    'group_id'=>$defaultGroupId[0]['id']
                ]);
            //删除分组
            FriendGroup::where('user_id',Auth::user()->id)
                ->where('id',$gid)
                ->delete();
        }
       return redirect('/friend')->withSuccess('删除分组成功');
    }
    
    /*
     * 移动好友到别的分组
     */
    public function showMove()
    {
        $friend = new FriendController();
        $fg = $this->getFriendGroupById(Auth::user()->id);
        $friends = $this->getFriendList();

        if(count($fg) == 1){
            return redirect('/friend')->withErrors('只有一个分组，不能进行好友移动');
        }
        //获取好友email
        foreach($friends as $k=>$v){
            $friends[$k]['friend_email'] = $friend->getEmailById($v['users']);
        }
//        dd($fg,$friends);
        return view('friendGroups.showMove',compact(['friends','fg']));
    }

    public function move(Request $request)
    {
        $this->validate($request,[
            'id'=>'required',
            'group'=>'required'
        ]);
        $group = $request->group;
        $idArr = $request->id;
        foreach($idArr as $id){
            //更新好友分组详情表
            FriendGroupDetail::where('user_id',Auth::user()->id)
                ->where('users',$id)
                ->update([
                    'group_id'=>$group
                ]);
        }
        return redirect('/friend')->withSuccess('移动好友成功');
    }
    
}
