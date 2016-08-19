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

Route::auth();

Route::get('/home', 'HomeController@index');
