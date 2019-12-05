<?php
 namespace App\Http\Middleware;

 use Closure;
 use JWTAuth;
 use Exception;
 use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;


use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class CheckRole
    {
public function handle($request, Closure $next, ...$roles)
{
    try {
        //Access token from the request        
        $token = JWTAuth::parseToken();
        //Try authenticating user       
        $clubs = $token->authenticate();
        
    } catch (TokenExpiredException $e) {
        //Thrown if token has expired        
        return $this->unauthorized('Your token has expired. Please, login again.');
    } catch (TokenInvalidException $e) {
        //Thrown if token invalid
        return $this->unauthorized('Your token is invalid. Please, login again.');
    }catch (JWTException $e) {
        //Thrown if token was not found in the request.
        return $this->unauthorized('Please, attach a Bearer Token to your request');
    }
    
    //If user was authenticated successfully and user is in one of the acceptable roles, send to next request.
    /*$clubs= JWTAuth::getToken();
    dd(JWTAuth::decode($clubs));
    $clubs1 = json_decode($clubs);*/
   
        $token = $token ?? JWTAuth::getToken();

        if ($token) {
            $token = list($header, $claims, $signature) = explode('.', $token);

            $header = self::decodeFragment($header);
            $claims = self::decodeFragment($claims);
            $signature = (string) base64_decode($signature);

            return dd([
                'header' => $header,
                'claims' => $claims,
                'signature' => $signature
            ]);
        }

        
    

    
    
        
    
    /*if ($clubs1 && in_array($clubs1->role, $roles)) {
        return $next($request);
    }

    return $this->unauthorized();*/
}

private function unauthorized($message = null){
    return response()->json([
        'message' => $message ? $message : 'You are unauthorized to access this resource',
        'success' => false
    ], 401);
}
    }