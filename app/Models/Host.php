<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Host extends Model
{
    protected $table='host';

    //获取该主机下的所有设备
    public function equipments(){
        return $this->hasMany('App\Models\Equipment');
    }

    //获取该主机下的所有设备id
    public function equipmentId(){
        return $this->hasMany('App\Models\Equipment')->select('id');
    }

    //获取该主机下设备id和name
    public function equipmentIdAndName(){
        return $this->hasMany('App\Models\Equipment')->select('id','name');
    }

    //获取该主机下设备id,name,type_id,
    public function equipmentByType(){
        return $this->hasMany('App\Models\Equipment')->select('id','name','type_id');
    }

}
