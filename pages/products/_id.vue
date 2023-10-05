<template>
  <div>
    <a
      class="text-secondary my-20 hover:bg-bucket opacity-90 text-lg font-semibold cursor-pointer p-1 ml-3 border rounded-md"
      @click="$router.go(-1)"
      >Kembali</a
    >
    <section class="mx-auto mb-20 container flex items-center justify-between">
      <div class="w-[20%]">
        <img :src="product.image" alt="product" class="w-80 p-3 shadow-lg" />
      </div>
      <div class="font-bold space-y-7 w-[50%]">
        <h2 class="text-2xl">{{ product.title }}</h2>
        <ul class="space-y-5 pl-5">
          <li class="text-lg">Original Price : ${{ product.price + 11.1 }}</li>
          <li class="text-lg">Discount Price : ${{ product.price }}</li>
          <li class="text-lg">Category : {{ product.category }}</li>
          <li class="font-semibold">{{ product.description }}</li>
        </ul>
      </div>
      <section
        class="bg-secondary w-[20%] p-5 flex flex-col justify-between rounded-md text-bucket"
      >
        <h3 class="text-xl font-bold">Payment</h3>
        <div class="p-3 space-y-5 text-primary">
          <p class="">Price : ${{ product.price }}</p>
          <p class="">Transport : $1.2</p>
          <p class="">Tax : $2.4</p>
          <p class="">Etc : $1.3</p>
          <p class="">Total : ${{ product.price + 4.9 }}</p>
        </div>
        <button
          class="flex border-bucket border justify-center rounded-md p-1 hover:border-primary hover:text-primary"
          @click="saveToCart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
          </svg>
          <p class="font-semibold text-lg">Add To Cart</p>
        </button>
      </section>
    </section>
    <CardContainer title="Recomended for you">
      <CardItem :data="recomended" />
    </CardContainer>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  middleware: 'auth',
  data() {
    return {
      product: {},
      recomended: [],
    }
  },
  async fetch() {
    this.product = await fetch(
      `https://fakestoreapi.com/products/${this.$route.params.id}`
    ).then((res) => res.json())

    this.recomended = await fetch(
      `https://fakestoreapi.com/products/category/${this.product.category}?limit=4`
    ).then((res) => res.json())

    // Setelah menerima data recomended, mengacaknya menggunakan Lodash
    this.recomended = _.shuffle(this.recomended)
  },
  methods: {
    async saveToCart() {
      await this.$localForage.setItem(this.product.title, this.product)
    },
  },
}
</script>