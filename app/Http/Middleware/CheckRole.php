<?php

namespace App\Http\Middleware;
use Illuminate\Http\Request;
use App\Club;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use App\Http\Middleware\Authenticate;
use Auth;
use Closure;

class CheckRole
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    

    /*public function handle($request, Closure $next)
    {
        /*if( JWTAuth::user()->role != 'moderator'){
            return response()->json([
                "message" => "Korisnik ne postoji"
            ], 404);
        }
        return $next($request);*/
        
    //}

    public function handle($request, Closure $next, $guard = null)
    {
        if($guard != null)
            auth()->shouldUse($guard);
        return $next($request);
    }
    

}