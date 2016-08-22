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

$this->get('/', 'Auth\AuthController@showLoginForm');
Route::group(['prefix'=>'/friend'],function(){
    Route::get('/','User\FriendController@home');
    Route::post('/handle','User\FriendController@handle');
    Route::get('/add','User\FriendController@showAddForm');
    Route::post('/add','User\FriendController@add');
    Route::get('/handleResult/{from}/{to}/{pass}','User\FriendController@handleResult');
});
Route::group(['prefix'=>'/friendGroup'],function(){
    Route::get('/add','User\FriendGroupController@showAddForm');
    Route::post('/add','User\FriendGroupController@add');
});

Route::group(['prefix'=>'/host'],function(){
    Route::get('/add','Equip\HostController@showAddForm');
    Route::post('/add','Equip\HostController@add');
});

Route::group(['prefix'=>'/equip'],function(){
    Route::get('/','Equip\EquipController@home');
    Route::get('/changeWatch/{type}','Equip\EquipController@changeWatch');
});

Route::group(['prefix'=>'equipGroup'],function(){
    Route::get('/','Equip\EquipGroupController@home');
    Route::get('/add','Equip\EquipGroupController@showAddForm');
    Route::post('/add','Equip\EquipGroupController@add');
});

Route::auth();

Route::get('/home', 'HomeController@index');
