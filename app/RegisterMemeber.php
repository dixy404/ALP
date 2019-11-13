<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RegisterMemeber extends Model
{
    
        protected $table = "registermembers";
    
        protected $fillable = [
            'id', 'name', 'address', 'email', 
        ];
}
