<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('_districts', function (Blueprint $table) {
            $table->smallIncrements('dis_id');
            $table->string('dis_name', 40);
            $table->unsignedSmallInteger('city_id');
            $table->foreign('city_id')->references('city_id')->on('_cities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('_districts');
    }
};
