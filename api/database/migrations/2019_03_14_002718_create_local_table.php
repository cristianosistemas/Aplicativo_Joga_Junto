<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('local', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome', 100);
            $table->string('descricao')->nullable();
            $table->string('latitude', 20)->nullable();
            $table->string('longitude', 20)->nullable();
            $table->string('imagem')->nullable();
            $table->string('telefone', 14)->nullable();
            $table->string('horarioAtendimento', 12)->nullable();
            $table->integer('usuarioResponsavel_id')->unsigned();
            $table->boolean('valido')->default(false);
            $table->integer('endereco_id')->unsigned();
            $table->string('comoChegar')->nullable();
            $table->timestamps();
        });

        Schema::table('local', function (Blueprint $table) {
            $table->foreign('usuarioResponsavel_id')->references('id')->on('usuario');
            $table->foreign('endereco_id')->references('id')->on('endereco');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('local');
    }
}
