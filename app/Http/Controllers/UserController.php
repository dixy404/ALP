<?php

    namespace App\Http\Controllers;

    use App\User;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Validator;
    use JWTAuth;
    use Tymon\JWTAuth\Exceptions\JWTException;
    use JWTFactory;
    use Config;
    use Illuminate\Foundation\Auth\VerifiesEmails;
    use Illuminate\Auth\Events\Verified;
    use Auth;
    use Intervention\Image\ImageManagerStatic as Image;
    use File;

    class UserController extends Controller
    { 
        function __construct()
        {  header("Access-Control-Allow-Origin: *");
            /*Config::set('jwt.user', User::class);
            Config::set('auth.providers', ['users' => [
                    'driver' => 'eloquent',
                    'model' => User::class,
                ]]);*/
                //$this->middleware(['JWTAuth', 'verified']);
        }

use VerifiesEmails;
public $successStatus = 200;
/**
* login api
*
* @return \Illuminate\Http\Response
*/
public function login(){
    if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){
    $user = Auth::user();
    if($user->email_verified_at !== NULL){
    $success['message'] = 'Login successfull';
    return response()->json(['success' => $success], $this-> successStatus);
    }else{
    return response()->json(['error'=>'Please Verify Email'], 401);
    }
    }
    else{
    return response()->json(['error'=>'Unauthorised'], 401);
    }
    }
    /**
    * Register api
    *
    * @return \Illuminate\Http\Response
    */

   
    public function authenticate(Request $request)
    {
        
             header("Access-Control-Allow-Origin: *");
             auth()->shouldUse('api');
             if(Auth::guard('api')->attempt(['email' => request('email'), 'password' => request('password')])){
                $user = Auth::user();
                if($user->email_verified_at !== NULL){
                $success['message'] = 'Login successfull';
                 response()->json(['success' => $success], $this-> successStatus);
                }else{  $user->sendApiEmailVerificationNotification();
                return response()->json(['error'=>'Please Verify Email'], 401);
                }
                }
                else{
                return response()->json(['error'=>'Unauthorised'], 401);
                }
            
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
        {       header("Access-Control-Allow-Origin: http://127.0.0.1:4200");
            header("Access-Control-Allow-Credentials: true");
            $messages = ['required' => 'The :attribute field is required.',
                         'unique' => 'The :attribute field already exist.',
                         'confirmed' => 'The :attribute does not match.',
                         'max:255' => 'The :attribute max 255 characters.',];
            $validator = Validator::make($request->all(),  [
             'name' => 'required|string|max:255',
             'lastName' => 'required|string|max:255',
             'dateOfBirth' => 'required|string|max:255',
             'address' => 'required|string|max:255',
             'ssn' => 'max:255',
             'checkbox' => 'required|in:1',
             'phoneNumber' => 'required|numeric|digits_between:1,25|unique:users',
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
                'checkbox' => $request->get('checkbox'),
                'phoneNumber' => $request->get('phoneNumber'),
                'password' => Hash::make($request->get('password')),
            ]);
            if ($request->hasFile('thumbnail')) {
               /* $fileName = time().'.'.$request->file->getClientOriginalExtension();

                $request->file->move(public_path('assets/photo'), $fileName);
        
                      
        
                return response()->json(['success'=>'You have successfully upload file.']);}*/
               $file      = $request->file('thumbnail');
                $filename  = $file->getClientOriginalName();
                $extension = $file->getClientOriginalExtension();
                $picture   = date('His').'-'.$filename;
                $file->move(public_path('assets/photo'), $picture);
                return response()->json(["message" => "Image Uploaded Succesfully"]);
          } 
          else
          {
                return response()->json(["message" => "Select image first."]);
          }
       
  
              
            
               /* $thumbnail      = $request->file('avatar');
                
                $filename = $user->name.time().'.'.$request->thumbnail->extension();
                $image_resize = Image::make($thumbnail->getRealPath());              
                $image_resize->resize(300, null, function ($constraint) {
                    $constraint->aspectRatio();
                }); 
                 $image_resize->save(public_path('assets/photo/' .$filename));
                 $folder = 'assets/photo/';
                 
                 $user->thumbnail=$folder.$filename;
                 $user->move(public_path('assets/photo/'), $thumbnail);
                 $user->save();}*/
                
            $token = JWTAuth::fromUser($user);
            $user->sendApiEmailVerificationNotification();
            $success['message'] = 'Please confirm yourself by clicking on verify user button sent to you on your email';
            return response()->json(compact('user','token'),201);
        }
        public function show($id){ 
          header("Access-Control-Allow-Origin: *");
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
          $user = User::find($id);
         return response()->json(compact('user'),201);




}
        public function edit($id){ 
        header("Access-Control-Allow-Origin: *");
        $user = User::find($id)->where('id', $id)->select(['name','lastName',"address","dateOfBirth","placeOfBirth","bloodType","passportId","idNumber","ssn","nationality","occupation", 'phoneNumber',"email"])->get();
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
    'phoneNumber' => request('phoneNumber'),
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
                    if($user->email_verified_at !== NULL){
                       
                        return response()->json(compact('user'));
                        }else{
                            return response()->json(['error'=>'Unauthorised'], 401);
                            }
                  
                   //return response()->json($user);
            }
            public function index(Request $request)
            {   header("Access-Control-Allow-Origin: *");
               /* $credentials = $request->only('token');
                $token = JWTAuth::fromUser($user);*/
                $user = User::all();
                return response()->json(compact('user'),201);
                //return response()->json($user);
               // return response()->json(auth()->user());

            }
            public function destroy(Request $request, $id)
            {
                $member = User::find($id);
                $member->delete();
            }
        }
