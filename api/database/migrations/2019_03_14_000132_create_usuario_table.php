<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('endereco_id')->nullable();
            $table->string('nome', 50)->nullable();
            $table->string('sobrenome', 150)->nullable();
            $table->string('email');
            $table->date('dataNascimento');
            $table->string('login', 30);
            $table->string('senha');
            $table->string('idFacebook', 100)->nullable();
            $table->string('idGoogle', 100)->nullable();
            $table->decimal('score', 2, 2)->default("5.0");
            $table->string('telefone', 14)->nullable();
            $table->string('latitude', 20)->nullable();
            $table->string('longitude', 20)->nullable();
            $table->timestamps();

            $table->foreign('endereco_id')->references('id')->on('enderecos');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
