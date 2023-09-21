<template>
  <div class="flex gap-10">
    <h1>Daftar Artikel</h1>
    <article v-for="article in articles" :key="article">
      <router-link :to="'/article/' + article.title">
        <h2>{{ article.title }}</h2>
        <img :src="article.img" alt="Gambar Artikel" class="h-20" />
      </router-link>
    </article>
  </div>
</template>
  
<script>
export default {
  props: {
    articles: Array, // Data artikel dari sumber
  },
}
</script>
  