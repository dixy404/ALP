<?php


namespace App\Http\Middleware;
use Closure;
class Cors
{
  public function handle($request, Closure $next)
  {
      
      header('Access-Control-Allow-Credentials', true);
      header('Access-Control-Allow-Origin', 'http://localhost:8000');
      header('Access-Control-Allow-Methods', '*');
      header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Authorization, Content-Type, Accept');

      return $next($request);        
}

}