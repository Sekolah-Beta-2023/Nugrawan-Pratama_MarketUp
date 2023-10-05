<template>
  <div
    class="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
  >
    <div
      v-for="p in data"
      :key="p.id"
      class="p-3 font-bold text-secondary bg-white shadow-lg rounded-md flex flex-col justify-between"
    >
      <NuxtLink :to="'/products/' + p.id">
        <div class="-mb-3">
          <p class="opacity-30 line-through text-right">
            ${{ p.price + 11.1 }}
          </p>
          <p class="text-xl text-right">${{ p.price }}</p>
        </div>
        <img
          :src="p.image"
          alt="Image"
          :class="[isClothes ? 'h-52' : 'h-40', 'mx-auto py-3']"
        />
        <p>
          ⭐<span class="opacity-70 font-medium text-sm"
            >{{ p.rating.rate }} | {{ p.rating.count }} products</span
          >
        </p>
        <h3>{{ p.title }}</h3>
      </NuxtLink>
      <div v-if="isCart">
        <button
          class="bg-secondary p-2 font-semibold text-bucket rounded-md w-full hover:opacity-80 mt-5"
          @click="deleteProduct(p.title)"
        >
          REMOVE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: function () {},
    },
    isClothes: {
      type: Boolean,
      default: true,
    },
    target: {
      type: String,
      default: '#',
    },
    isCart: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async deleteProduct(product) {
      await this.$localForage.removeItem(product)
    },
  },
}
</script>