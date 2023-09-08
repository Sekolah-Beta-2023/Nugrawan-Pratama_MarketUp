<template>
  <div>

    <!-- INTERPOLATIONS  -->
    <!-- cetak ke text  -->
    <p>Menggunakan kurung kurawal: {{ data.raw }}</p>

    <!-- isi dari span akan dicetak ke html -->
    <p>Menggunakan v-html directive: <span v-html="object"></span></p> 

    <!-- attributes, mengisi atribut dgn data  -->
    <div v-bind:id="dynamicId"></div>
    <!-- untuk boolean, yg akan bernilai false tidak akan ditampilkan  -->
    <button v-bind:disabled="isButtonDisabled">Button</button>

    <!-- javascript expressions  -->
    {{ number + 1 }}
    {{ ok ? 'YES' : 'NO' }}
    {{ message.split('').reverse().join('') }}
    <div v-bind:id="'list-' + id"></div>


    <!-- DIRECTIVE  -->
    <!-- arguments  -->
    <a v-bind:href="url"> ... </a>
    <a v-on:click="doSomething"> ... </a>

    <!-- Dynamic arguments  -->
    <a v-bind:[attributeName]="url"> ... </a>
    <a v-on:[eventName]="doSomething"> ... </a>

    <!-- modifiers -->
    <form v-on:submit.prevent="onSubmit"> ... </form>

    <!-- SHORTHANDS  -->
    <!-- full syntax -->
    <a v-bind:href="url"> ... </a>
    <!-- shorthand -->
    <a :href="url"> ... </a>
    <!-- shorthand dengan argumen dinamis (2.6.0+) -->
    <a :[key]="url"> ... </a>
  </div>
</template>