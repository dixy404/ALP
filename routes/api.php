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


//Route::put('/updateuser/{id}', 'RegisterMemeberController@update');
//Route::post('/register',  'RegisterMemeberController@register');
//Route::get('/shoowuser/{id}', 'UserController@show');
//Route::delete('/deleteuser/{id}', 'RegisterMemeberController@destroy');

Route::post('registeruser', 'UserController@register');
Route::post('registerclub', 'ClubController@register');
    Route::post('loginuser', 'UserController@authenticate');
    Route::post('loginclub', 'ClubController@authenticate');
    Route::get('open', 'DataController@open');
    
        
        Route::get('closed', 'DataController@closed');
        Route::get('/showuser/{id}', 'UserController@show');
        Route::get('/edituser/{id}', 'UserController@edit');
        Route::put('/updateuser/{id}', 'UserController@update');
        Route::delete('/deleteuser/{id}', 'UserController@destroy');
    Route::group(['middleware' => ['jwt.verify']], function() {
        //Route::get('user', 'UserController@getAuthenticatedUser');
        Route::get('user', 'UserController@index');
        
        //Route::get('/showuser/{id}', 'RegisterMemeberController@show');
        //Route::get('/members', 'RegisterMemeberController@index');
        });
//Route::middleware('auth:api')->get('/user', function (Request $request) {
    //return $request->user();
//});
