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
        Schema::create('_cities', function (Blueprint $table) {
            $table->smallIncrements('city_id');
            $table->string('city_name', 41);
            $table->unsignedSmallInteger('prov_id');
            $table->foreign('prov_id')->references('prov_id')->on('_provinces')->onDelete('cascade');
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
        Schema::dropIfExists('_cities');
    }
};
