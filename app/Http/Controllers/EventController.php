<?php

namespace App\Http\Controllers;

    use App\Event;
    use App\Club;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Validator;
    use JWTAuth;
    use Tymon\JWTAuth\Exceptions\JWTException;
    use App\Http\Middleware\CheckRole;

class EventController extends Controller
{
    public function register(Request $request) 
    {
        
        
        $event = Event::create([
            'organizer' => $request->get('organizer'),
            'tripDate' => $request->get('tripDate'),
            'tripTime' => $request->get('tripTime'),
            'tripName' => $request->get('tripName'),
            'location' => $request->get('location'),
            'price' => $request->get('price'),
            'description' => $request->get('description'),
            'tripDuration' => $request->get('tripDuration'),
            'departureTime' => $request->get('departureTime'),
            'accommodation' => $request->get('accommodation'),
            'season' => $request->get('season'),
            'difficultyLevel' => $request->get('difficultyLevel'),
            'equipment' => $request->get('equipment'),
            'elevation' => $request->get('elevation'),
            'hours' => $request->get('hours'),
            'trailLength' => $request->get('trailLength'),
            'trailType' => $request->get('trailType'),
            'terrainType' => $request->get('terrainType'),
            
        ]);

        $token = JWTAuth::fromUser($event);

        return response()->json(compact('event', 'token'), 201);
    
    }

    public function index(Request $request)
            {  
                
                
                $event = Event::orderBy('tripDate', 'desc')->get();
                return response()->json(compact('event'),201);
                

            }
            public function show($id)
            {
               
                $event = Event::find($id);
                return response()->json($event);  
            }     
 }


