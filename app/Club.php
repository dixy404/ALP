<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\VerifyApiEmail2;

class Club extends Authenticatable implements JWTSubject, MustVerifyEmail
{
    use Notifiable;

    protected $guard = 'api2';

        /**
         * The attributes that are mass assignable.
         *
         * @var array
         */
        protected $fillable = [
            'clubName', 'clubPresident', 'clubSecretary', 'foundedIn', 'vision', 'mission','phoneNumber',  'address', 'email', 'role', 'password'];

        /**
         * The attributes that should be hidden for arrays.
         *
         * @var array
         */
        protected $hidden = [
            'password',  'remember_token',
        ];

        protected $casts = [
            'email_verified_at' => 'timestamp',
        ];

        public function isModerator() {
            if($this->role == "moderator"){
                 return true;
             }
             return false;
         }

        public function getJWTIdentifier()
        {
            return $this->getKey();
        }
        public function getJWTCustomClaims()
        {
            return ['role'=>'moderator'];
        }

        public function sendApiEmailVerificationNotification()
        {
         $this->notify(new VerifyApiEmail2); // my notification
        }
        

}
