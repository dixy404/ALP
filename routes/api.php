<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/members', 'RegisterMemeberController@index');
Route::get('/showuser/{id}', 'RegisterMemeberController@show');
 
Route::post('/register',  'RegisterMemeberController@register');
Route::delete('/deleteuser/{id}', 'RegisterMemeberController@destroy');
Route::put('/updateuser/{id}', 'RegisterMemeberController@update');
//Route::middleware('auth:api')->get('/user', function (Request $request) {
    //return $request->user();
//});
