<template>
    <div>
      <h1 class="text-center text-red-800 font-bold text-5xl p-10">FUNNNN</h1>
      <h2>{{ htmlContent }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h1 v-html="htmlContent"></h1>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          htmlContent: '<strong>Ini adalah teks tebal</strong> <em>ini adalah teks miring</em>',
      }
    },
  };
</script>