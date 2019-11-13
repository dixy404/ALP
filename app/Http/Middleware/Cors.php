<?php


namespace App\Http\Middleware;
use Closure;
class Cors
{
  public function handle($request, Closure $next)
  {
    return [
        /*
        |--------------------------------------------------------------------------
        | Laravel CORS
        |--------------------------------------------------------------------------
        |
        | allowedOrigins, allowedHeaders and allowedMethods can be set to array('*')
        | to accept any value.
        |
        */
       'supportsCredentials' => false,
       'allowedOrigins' => ['*'],
       'allowedHeaders' => ['Content-Type', 'X-Requested-With'],
       'allowedMethods' => ['*'], // ex: ['GET', 'POST', 'PUT',  'DELETE']
       'exposedHeaders' => [],
       'maxAge' => 0,
   ];
}
}