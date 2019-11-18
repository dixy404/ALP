<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddManyColumnsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('placeOfBirth')->after('dateOfBirth')->nullable();
            $table->string( 'bloodType' )->after('placeOfBirth')->nullable();
            $table->string('passportId')->after('bloodType')->nullable();
            $table->string( 'idNumber' )->after('passportId')->nullable();
            $table->string( 'ssn' )->after('idNumber')->nullable();
            $table->string( 'nationality' )->after('ssn')->nullable();
            $table->string( 'occupation' )->after('nationality')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string(['placeOfBirth', 'bloodType', 'passportId', 'idNumber', 'ssn', 'nationality', 'occupation' ]);
        });
    }
}
