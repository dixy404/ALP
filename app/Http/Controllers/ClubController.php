<?php

namespace App\Http\Controllers;

use App\Club;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ClubController extends Controller
{
    public function authenticate(Request $request)
    {
        header("Access-Control-Allow-Origin: *");
        $credentials = $request->only('email', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json($token);
    }

    public function register(Request $request)
    {
        header("Access-Control-Allow-Origin: *");
        $messages = [
            'required' => 'The :attribute field is required.',
            'unique' => 'The :attribute field already exist.',
            'confirmed' => 'The :attribute does not match.',
            'max:255' => 'The :attribute max 255 characters.',
        ];
        $validator = Validator::make($request->all(),  [
            'clubName' => 'required|string|max:255|unique:clubs',
            'clubPresident' => 'required|string|max:255',
            'clubSecretary' => 'required|string|max:255',
            'foundedIn' => 'required|string|max:255',
            'vision' => 'required|string|max:255',
            'mission' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:clubs',
            'phoneNumber' => 'required|integer|max:255|unique:clubs',
            'password' => 'required|string|min:8|confirmed',
        ], $messages);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $club = Club::create([
            'clubName' => $request->get('clubName'),
            'clubPresident' => $request->get('clubPresident'),
            'clubSecretary' => $request->get('clubSecretary'),
            'foundedIn' => $request->get('foundedIn'),
            'vision' => $request->get('vision'),
            'mission' => $request->get('mission'),
            'address' => $request->get('address'),
            'email' => $request->get('email'),
            'phoneNumber' => $request->get('phoneNumber'),
            'password' => Hash::make($request->get('password')),
        ]);

        $token = JWTAuth::fromUser($club);

        return response()->json(compact('club', 'token'), 201);
    }
    public function show($id)
    {
        header("Access-Control-Allow-Origin: *");
        $club = Club::find($id);
        return response()->json(compact('club'), 201);
    }
    public function edit($id)
    {
        header("Access-Control-Allow-Origin: *");
        $club = Club::find($id)->where('id', $id)->select(['clubName', 'clubPresident', "address", 'clubSecretary', 'foundedIn', 'vision', 'mission', 'phoneNumber', "email"])->get();
        return response()->json(compact('club'), 201);
    }
    public function update(Request $request, $id)
    {
        header("Access-Control-Allow-Origin: *");
        if (Club::where('id', $id)->exists()) {
            $club = Club::find($id)->update([
                'clubName' => request('clubName'),
                'clubPresident' => request('clubPresident'),
                'address' => request('address'),
                'clubSecretary' => request('clubSecretary'),
                'foundedIn' => request('foundedIn'),
                'vision' => request('vision'),
                'mission' => request('mission'),
                'phoneNumber' => request('phoneNumber'),
                'email' =>  request('email'),
            ]);


            return response()->json([
                "message" => "Korisnik uspješno apdejtovan"
            ], 200);
        } else {
            return response()->json([
                "message" => "Korisnik ne postoji"
            ], 404);
        }
    }
    public function getAuthenticatedClub()
    {
        header("Access-Control-Allow-Origin: *");
        try {

            if (!$club = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return response()->json(compact('club'));
    }
    public function destroy(Request $request, $id)
    {
        $member = Club::find($id);
        $member->delete();
    }
}
