<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
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
    {   if (RegisterMemeber::where('id', $id)->exists()) {
        $member = RegisterMemeber::find($id)->update(['name' => request('name'),
        'address' => request('address'),
        'email' =>  request('email'),]);
        
        /*$student = RegisterMemeber::find($id);
        $student->name = is_null($request->name) ? $student->name : $request->name;
        $student->address = is_null($request->address) ? $student->address : $request->address;
        $student->email = is_null($request->email) ? $student->email : $request->email;
        $student->save();
        //return $member->toArray();*/
        return response()->json([
            "message" => "Korisnik uspješno apdejtovan"
        ], 200);
        } else {
        return response()->json([
            "message" => "Korisnik ne postoji"
        ], 404);
        
    }
        
        
        

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
