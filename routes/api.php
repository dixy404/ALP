<?php
use App\Http\Middleware\CheckRole;
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

Auth::routes();
Route::post('registeruser', 'UserController@register');
Route::post('registerclub', 'ClubController@register');
Route::post('loginuser', 'UserController@authenticate');
Route::post('loginclub', 'ClubController@authenticate');
Route::get('index', 'ClubController@index');
Route::get('events', 'EventController@index');
Route::get('open', 'DataController@open');
Route::post('createevent', 'EventController@register');
//Route::post('createevent',  'EventController@register')->middleware('auth.role');
//Route::post('createevent', 'EventController@register')->middleware('role');
//Route::post('createevent', 'EventController@register')->middleware('can:isModerator');
//Route::post('createevent',  'EventController@register');
Route::get('closed', 'DataController@closed');
Route::get('/showuser/{id}', 'UserController@show');
Route::get('/edituser/{id}', 'UserController@edit');
Route::put('/updateuser/{id}', 'UserController@update');
Route::delete('/deleteuser/{id}', 'UserController@destroy');
Route::group(['middleware' => ['jwt.verify']], function () {
    
    Route::get('user', 'UserController@getAuthenticatedUser');
Route::group(['middleware' => ['role:moderator']], function () {
    //Route::post('createevent', 'EventController@register');
    
    });   
    //Route::get('user', 'UserController@index');

    //Route::get('/showuser/{id}', 'RegisterMemeberController@show');
    //Route::get('/members', 'RegisterMemeberController@index');
});
/*Route::middleware('auth:api')->post('createevent', function (Request $request) {
    return $request->club();
});*/
//Route::post('createevent', ['as'=>'createevent','uses'=>'EventController@register','middleware' => 'jwt.verify']); 
//Route::post('createevent', ['middleware' => 'auth.role:moderator,club', 'uses' => 'EventController@register', 'as' => 'createevent']);
/*Route::group(['prefix' => 'club','middleware' => ['auth.role:clubs', 'jwt.verify']],function ()
{
    Route::post('createevent', 'EventController@register');
});*/
//Route::post('createevent', ['middleware' => 'auth.role:moderator,user', 'uses' => 'EventController@register', 'as' => 'createevent']);