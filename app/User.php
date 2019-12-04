<?php

    namespace App;

    use Illuminate\Notifications\Notifiable;
    use Illuminate\Foundation\Auth\User as Authenticatable;
    use Tymon\JWTAuth\Contracts\JWTSubject;
    use Illuminate\Contracts\Auth\MustVerifyEmail;
    use App\Notifications\VerifyApiEmail;

    class User extends Authenticatable implements JWTSubject, MustVerifyEmail
    {
        use Notifiable;
        protected $guard = 'api';

        /**
         * The attributes that are mass assignable.
         *
         * @var array
         */
        protected $fillable = [
            'thumbnail', 'name', 'lastName', 'address', 'dateOfBirth', 'placeOfBirth', 'bloodType', 'passportId', 'idNumber', 'ssn', 'nationality', 'occupation', 'phoneNumber', 'email', 'password'  
        ];

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

        public function getJWTIdentifier()
        {
            return $this->getKey();
        }
        public function getJWTCustomClaims()
        {
            return [];
        }
        public function sendApiEmailVerificationNotification()
        {
         $this->notify(new VerifyApiEmail); // my notification
        }
    }

    
