<?php


namespace App\Http\Middleware;
use Closure;
class Cors
{
  public function handle($request, Closure $next)
  {
      header('Access-Control-Allow-Credentials', false);
      header('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
      header('Access-Control-Allow-Methods', '*');
      header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Authorization, Content-Type, Accept');
      return $next($request);    
}

}