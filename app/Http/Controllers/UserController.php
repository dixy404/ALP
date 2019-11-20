<?php

    namespace App\Http\Controllers;

    use App\User;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Validator;
    use JWTAuth;
    use Tymon\JWTAuth\Exceptions\JWTException;

    class UserController extends Controller
    {
        public function authenticate(Request $request)
        {     header("Access-Control-Allow-Origin: *");
            $credentials = $request->only('email', 'password');

            try {
                if (! $token = JWTAuth::attempt($credentials)) {
                    return response()->json(['error' => 'invalid_credentials'], 400);
                }
            } catch (JWTException $e) {
                return response()->json(['error' => 'could_not_create_token'], 500);
            }

            return response()->json($token);
        }

        public function register(Request $request)
        {        header("Access-Control-Allow-Origin: *");
            $messages = ['required' => 'The :attribute field is required.',
                         'unique' => 'The :attribute field already exist.',
                         'confirmed' => 'The :attribute does not match.',
                         'max:255' => 'The :attribute max 255 characters.',];
            $validator = Validator::make($request->all(),  [
             'name' => 'required|string|max:255',
             'lastName' => 'required|string|max:255',
             'dateOfBirth' => 'required|string|max:255',
             'address' => 'required|string|max:255',
             'ssn' => 'max:255|unique:users',
             'email' => 'required|string|email|max:255|unique:users',
             'password' => 'required|string|min:8|confirmed',
            ], $messages);
         if($validator->fails()){
                 return response()->json($validator->errors()->toJson(), 400);
         }
            $user = User::create([
                'name' => $request->get('name'),
                'lastName' => $request->get('lastName'),
                'address' => $request->get('address'),
                'dateOfBirth' => $request->get('dateOfBirth'),
                'placeOfBirth' => $request->get('placeOfBirth'),
                'passportId' => $request->get('passportId'),
                'idNumber' => $request->get('idNumber'),
                'ssn' => $request->get('ssn'),
                'bloodType' => $request->get('bloodType'),
                'nationality' => $request->get('nationality'),
                'occupation' => $request->get('occupation'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json(compact('user','token'),201);
        }
        public function show($id){ 
          header("Access-Control-Allow-Origin: *");
         $user = User::find($id);
         return response()->json(compact('user'),201);




}
        public function edit($id){ 
        header("Access-Control-Allow-Origin: *");
        $user = User::find($id)->where('id', $id)->select(['name','lastName',"address","dateOfBirth","placeOfBirth","bloodType","passportId","idNumber","ssn","nationality","occupation","email"])->get();
         return response()->json(compact('user'),201);




}
public function update(Request $request, $id)
{        header("Access-Control-Allow-Origin: *");
        if (User::where('id', $id)->exists()) {
    $user = User::find($id)->update(['name' => request('name'),
    'lastName' => request('lastName'),
    'address' => request('address'),
    'dateOfBirth' => request('dateOfBirth'),
    'placeOfBirth' => request('placeOfBirth'),
    'bloodType' => request('bloodType'),
    'passportId' => request('passportId'),
    'idNumber' => request('idNumber'),
    'ssn' => request('ssn'),
    'nationality' => request('nationality'),
    'occupation' => request('occupation'),
    'email' =>  request('email'),]);
    
    
    return response()->json([
        "message" => "Korisnik uspješno apdejtovan"
    ], 200);
    } else {
    return response()->json([
        "message" => "Korisnik ne postoji"
    ], 404);
    
}
    
    
    

    }
        public function getAuthenticatedUser()
            {   header("Access-Control-Allow-Origin: *");
                    try {

                            if (! $user = JWTAuth::parseToken()->authenticate()) {
                                    return response()->json(['user_not_found'], 404);
                            }

                    } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                            return response()->json(['token_expired'], $e->getStatusCode());

                    } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                            return response()->json(['token_invalid'], $e->getStatusCode());

                    } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                            return response()->json(['token_absent'], $e->getStatusCode());

                    }

                    return response()->json(compact('user'));
            }
            public function destroy(Request $request, $id)
            {
                $member = User::find($id);
                $member->delete();
            }
        }
