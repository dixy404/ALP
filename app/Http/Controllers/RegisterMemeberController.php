<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\RegisterMemeber as RegisterMemeberResource; 
use App\RegisterMemeber;
class RegisterMemeberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   header("Access-Control-Allow-Origin: *");
        return RegisterMemeber::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        header("Access-Control-Allow-Origin: *");
        //return RegisterMemeber::updateOrCreate($request->all());
       $member = RegisterMemeber::create([
        'name' => request('name'),
        'address' => request('address'),
        'email' =>  request('email'),
        ]);
       // 'email' => $request->email,
        //'password' => bcrypt($request->password),*/
      

      //$token = auth()->login($user);

      //return $this->respondWithToken($token);*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return RegisterMemeber::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $member = RegisterMemeber::find($id)->update(['name' => request('name'),
        'address' => request('address'),
        'email' =>  request('email'),]);
        
        
           /* $data = $request->only(['name', 'address', 'email']);
            
            //dd($data);
            $player=RegisterMemeber::where('id', $id)->first();
            $player->name=$data['name'];
            $player->address=$data['address'];
            $player->email=$data['email'];
            $player->save();*/

        }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $member = RegisterMemeber::find($id);
        $member->delete();
    }
    
}
