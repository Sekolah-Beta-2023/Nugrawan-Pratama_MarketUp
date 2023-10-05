<template>
  <main class="px-10 mb-32">
    <h2 class="mx-auto text-4xl font-semibold">NEWS</h2>
    <section class="mx-auto pt-10 grid grid-cols-4 gap-5">
      <div v-for="(a, i) in newsData" :key="i">
        <div class="p-3 shadow-lg">
          <img :src="a.image.small" alt="image" />
          <h2 class="line-clamp-2 font-semibold overflow-ellipsis">
            {{ a.title }}
          </h2>
          <a class="text-sm underline" :href="a.link" target="_blank">Source</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  middleware: 'auth',
  computed: {
    ...mapState(['newsData']),
  },
  mounted() {
    this.fetchNewsData()
  },
  methods: {
    ...mapActions(['fetchNewsData']),
  },
}
</script>