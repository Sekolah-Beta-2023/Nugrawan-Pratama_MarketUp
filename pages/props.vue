<template>
    <div>
      <h1>Selamat datang di Nuxt.js!</h1>
      
      <!-- Jika prop "name" tidak diberikan, maka akan menggunakan nilai default "Tombol" -->
      <ButtonComponents :name="'Sign In'" bg-color="yellow" text="text-blue-900"/>

      <!-- Ternary operator di data selection  -->
      <ButtonComponents :name=" SignUp ? 'succes' : 'failed' " bg-color="green" text="text-red-500" />

      <!-- Tanpa impor -->
      <ButtonComponents name='Logout dan sebarkan' :text="newFunction" />
    </div>
  </template>
  
  <script>  
  export default {
    data() {
      return {
        SignUp: false,
        name: 'Button',
        methods: {
          newFunction() {
            'text-yellow-300'
          }
        }
      };
    },
  };
  </script>
  