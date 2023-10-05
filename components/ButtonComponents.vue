<template>
  <NuxtLink
    :to="target"
    :class="[
      classes,
      'hover:opacity-90 ',
      primary ? 'bg-primary text-bucket' : 'bg-bucket text-secondary',
      rounded
        ? 'rounded-full w-fit font-bold text-lg px-3'
        : 'px-4 py-2 rounded-lg text-sm font-semibold',
    ]"
    @click="
      {
        click
      }
    "
  >
    {{ name }}
  </NuxtLink>
</template>
  
  <script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: true,
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
  