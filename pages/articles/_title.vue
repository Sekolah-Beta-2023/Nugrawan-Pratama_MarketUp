<template>
  <div>
    <h1>Detail Artikel</h1>
    <ArticleComponent :article="article" />
  </div>
</template>
  
  <script>
export default {
  async asyncData({ params }) {
    // Ambil data artikel berdasarkan ID dari sumber
    const title = params.title
    const response = await fetch(`https://s.id/sbnews/${title}`)
    const article = await response.json()

    return {
      article,
    }
  },
}
</script>
  