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
        Schema::create('_subdistricts', function (Blueprint $table) {
            $table->id('subdis_id');
            $table->string('subdis_name', 45);
            $table->string('kode_pos',6)->nullable();
            $table->unsignedSmallInteger('dis_id');
            $table->foreign('dis_id')->references('dis_id')->on('_districts')->onDelete('cascade');
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
        Schema::dropIfExists('_subdistricts');

    }
};
