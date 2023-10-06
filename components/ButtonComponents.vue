<template>
  <NuxtLink :to="target" :class="[
    classes,
    'hover:shadow-md font-semibold w-auto',
    primary ? 'bg-primary text-secondary' : 'bg-secondary text-primary',
    rounded
      ? 'rounded-full w-fit font-bold text-lg px-3'
      : 'px-4 py-2 rounded-full text-sm',
  ]" @click="
      {
  click
}
  ">
    {{ name }}
  </NuxtLink>
</template>
  
<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
  },
}
</script>
  