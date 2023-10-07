<template>
  <label class="text-sm p-1 block my-3 font-semibold w-full">{{ title }}
    <div class="rounded-md border p-1">
      <input v-model="dataModel" :type="type" class="outline-none w-full" required />
    </div>
  </label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Field',
    },
    model: {
      type: String,
      default: 'username',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {

      dataModel: ''
    }
  },
  mounted() {
    this.dataModel = this.model
  }

}
</script>