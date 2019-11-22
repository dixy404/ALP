<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('tripDate')->nullable();
            $table->time('tripTime')->nullable();
            $table->string('tripName')->nullable();
            $table->string('location')->nullable();
            $table->string('description')->nullable();
            $table->string('tripDuration')->nullable();
            $table->time('departureTime')->nullable();
            $table->string('accommodation')->nullable();
            $table->string('season')->nullable();
            $table->string('difficultyLevel')->nullable();
            $table->string('equipment')->nullable();
            $table->string('elevation')->nullable();
            $table->string('hours')->nullable();
            $table->string('trailLength')->nullable();
            $table->string('trailType')->nullable();
            $table->string('terrainType')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
