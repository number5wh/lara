<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','is_admin',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function FriendGroupNames(){
        return $this->hasMany('App\Models\FriendGroup')->select('name');
    }

    //获取主机所有信息
    public function Hosts(){
        return $this->hasMany('App\Models\Host');
    }

    //获取主机id
    public function getHostId(){
        return $this->hasMany('App\Models\Host')->select('id');

    }

    //获取主机id和name
    public function getHostName(){
        return $this->hasMany('App\Models\Host')->select('id','name');

    }

    //获取快捷分组
    public function EquipmentGroup(){
        return $this->hasMany('App\Models\EquipmentGroup');
    }

    //获取快捷分组名
    public function EquipmentGroupName(){
        return $this->hasMany('App\Models\EquipmentGroup')->select('id','name');
    }
}
