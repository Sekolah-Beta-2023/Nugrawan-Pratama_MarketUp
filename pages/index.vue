<template>
  <main id="content">
    <div class="bg-[url('/second.jpg')] bg-cover w-5/6 mx-auto p-10 h-96 m-10 rounded-md flex flex-col justify-center">
      <div class="w-[40%] text-white">
        <h2 class="text-4xl font-bold mb-3">Feel Free To Explore Anywhere!</h2>
        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloremque consequuntur beatae
          ipsum optio,
          quaerat nostrum. Quod laboriosam iste incidunt.</p>
      </div>
    </div>

    <h1 class="text-5xl font-semibold text-white p-5 bg-gray">Find Our Products</h1>
    <CardContainer title="Men's Clothing">
      <CardItem :data="menData" />
    </CardContainer>

    <CardContainer title="Jewelery" :primary="false">
      <CardItem :data="jeweleryData" :is-clothes="false" />
    </CardContainer>

    <CardContainer title="Electronicts">
      <CardItem :data="eletData" :is-clothes="false" />
    </CardContainer>

    <CardContainer title="Women's Clothing" :primary="false">
      <CardItem :data="womenData" />
    </CardContainer>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  layout: 'home',
  computed: {
    ...mapState(['menData', 'womenData', 'jeweleryData', 'eletData']),
  },
  mounted() {
    this.fetchMenProducts()
    this.fetchWomenProducts()
    this.fetchJeweleryProducts()
    this.fetchElectronictsProducts()
  },
  methods: {
    ...mapActions(['fetchMenProducts', 'fetchWomenProducts', 'fetchJeweleryProducts', 'fetchElectronictsProducts'])
  }
}
</script>
