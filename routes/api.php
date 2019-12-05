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





Auth::routes(['verify' => true]);
Route::post('registeruser', 'UserController@register');
Route::post('registerclub', 'ClubController@register');
Route::get('email/verify/{id}', 'VerificationApiController@verify')->name('verificationapi.verify');
Route::get('email/verifyClub/{id}', 'VerificationApiController@verifyClub')->name('verificationapi.verifyClub');
Route::get('email/resend', 'VerificationApiController@resend')->name('verificationapi.resend');
Route::post('loginuser', 'UserController@authenticate');
Route::post('loginclub', 'ClubController@authenticate');

Route::get('events', 'EventController@index');
Route::get('showevent/{id}', 'EventController@show');
Route::post('login', 'UserController@login');

Route::get('index', 'ClubController@index');

Route::get('open', 'DataController@open');

Route::get('closed', 'DataController@closed');
Route::get('/showuser/{id}', 'UserController@show');
Route::get('/edituser/{id}', 'UserController@edit');
Route::get('/editclub/{id}', 'ClubController@edit');
Route::put('/updateuser/{id}', 'UserController@update');
Route::put('/updateclub/{id}', 'ClubController@update');
Route::delete('/deleteuser/{id}', 'UserController@destroy');
Route::group(['middleware' => 'auth:api'], function () {
    
    Route::get('user', 'UserController@getAuthenticatedUser');

   
});
Route::group(['middleware' => 'auth:api2'], function () {
    Route::post('createevent', 'EventController@register');
    Route::get('club', 'ClubController@getAuthenticatedClub');
   
});
Route::group(['middleware' => ['role:moderator']], function () {
    //Route::post('createevent', 'EventController@register');
    
    });   
    