<?php

namespace App\Http\Controllers\User;
use App\Models\FriendGroup;
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
     * 根据id获取好友分组及列表
     */
    public function getFriendGroupById($id){
        $friends = FriendGroup::select('name','users')
            ->where('user_id',$id)
            ->get()
            ->toArray();
        return $friends;
    }

    /**
     * 获取好友分组名
     */
    public function getGroupNameById($id){
        //关联关系查询
        $fg = User::find($id)->FriendGroupNames;
        foreach($fg as $v){
            $g[] = $v['name'];
        }
        return $g;
    }

    /**
     * 获取某组已有好友列表
     */
    public function getUsers($id,$name){
        $friendList1 = FriendGroup::select('users')
            ->where('user_id',$id)
            ->where('name',$name)
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
}
