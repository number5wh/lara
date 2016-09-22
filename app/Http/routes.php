<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'Auth\AuthController@showLoginForm');
Route::group(['prefix'=>'/friend'],function(){
    Route::get('/','User\FriendController@home');
    Route::post('/handle','User\FriendController@handle');
    Route::get('/add','User\FriendController@showAddForm');
    Route::post('/add','User\FriendController@add');
    Route::get('/handleResult/{from}/{to}/{pass}','User\FriendController@handleResult');
    Route::get('/delete','User\FriendController@showDeleteForm');
    Route::post('/delete','User\FriendController@delete');
});
Route::group(['prefix'=>'/friendGroup'],function(){
    Route::get('/add','User\FriendGroupController@showAddForm');
    Route::post('/add','User\FriendGroupController@add');
    Route::get('/delete','User\FriendGroupController@showDeleteForm');
    Route::post('/delete','User\FriendGroupController@delete');
    Route::get('/move','User\FriendGroupController@showMove');
    Route::post('/move','User\FriendGroupController@move');
});

Route::group(['prefix'=>'/host'],function(){
    Route::get('/add','Equip\HostController@showAddForm');
    Route::post('/add','Equip\HostController@add');
});

Route::group(['prefix'=>'/equip'],function(){
    Route::get('/','Equip\EquipController@home');
    Route::get('/changeWatch/{type}','Equip\EquipController@changeWatch');
    Route::get('/add','Equip\EquipController@showAddForm');
    Route::post('/add','Equip\EquipController@add');
    Route::get('/delete','Equip\EquipController@showDeleteForm');
    Route::post('/delete','Equip\EquipController@delete');
});

Route::group(['prefix'=>'/equipset'],function(){
    Route::get('/set/id/{id}/type/{type_id}','Equip\EquipSetController@set');
    Route::get('/onoff/id/{id}','Equip\EquipSetController@equipOnOff');
});

//空调设置
Route::group(['prefix'=>'/air'],function(){
    Route::post('/setModel','Equip\AirConditionController@setModel');
    Route::post('/setSpeed','Equip\AirConditionController@setSpeed');
    Route::post('/setDirection','Equip\AirConditionController@setDirection');
    Route::post('/setTemperature','Equip\AirConditionController@setTemperature');
});
//风扇设置
Route::group(['prefix'=>'/fan'],function(){
    Route::post('/setSpeed','Equip\FanController@setSpeed');
    Route::post('/setSwing','Equip\FanController@setSwing');
});

//灯泡设置
Route::group(['prefix'=>'/light'],function(){
    Route::post('/setLight','Equip\LightController@setLight');
});

//电视设置
Route::group(['prefix'=>'/tv'],function(){
    Route::post('/setChannel','Equip\TVController@setChannel');
    Route::post('/setVolume','Equip\TVController@setVolume');
    Route::post('/setModel','Equip\TVController@setModel');
    Route::post('/setSilent','Equip\TVController@setSilent');
});


Route::group(['prefix'=>'equipGroup'],function(){
    Route::get('/','Equip\EquipGroupController@home');
    Route::get('/add','Equip\EquipGroupController@showAddForm');
    Route::post('/add','Equip\EquipGroupController@add');
    Route::get('/groupInfo/{name}','Equip\EquipGroupController@groupInfo');
    Route::post('/singleSwitch','Equip\EquipGroupController@singleSwitch');
    Route::get('/group/{name}/allSwitch/{status}','Equip\EquipGroupController@allSwitch');
    Route::get('/group/{name}/addEquip','Equip\EquipGroupController@addEquip1');
    Route::post('/addEquip','Equip\EquipGroupController@addEquip2');
    Route::get('/delete','Equip\EquipGroupController@showDeleteForm');
    Route::post('/delete','Equip\EquipGroupController@delete');
    Route::get('/group/{name}/deleteEquip','Equip\EquipGroupController@deleteEquip1');
    Route::post('/deleteEquip2','Equip\EquipGroupController@deleteEquip2');
});

Route::group(['prefix'=>'distribute'],function(){
    Route::get('/getDistribute/{id}','User\EquipDistributeController@getDistribute');
    Route::get('/showSetEquip/userid/{id}','User\EquipDistributeController@showSetEquip');
    Route::post('/setEquip','User\EquipDistributeController@setEquip');
    Route::get('/deleteEquip1/userid/{id}','User\EquipDistributeController@deleteEquip1');
    Route::post('/deleteEquip2','User\EquipDistributeController@deleteEquip2');
});

Route::group(['prefix'=>'self'],function(){
    Route::get('/','Self\SelfController@home');
    Route::get('/getSelf','Self\SelfController@getSelf');
});

Route::auth();

Route::get('/home', 'HomeController@index');
