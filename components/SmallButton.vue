<template>
    <NuxtLink :to="target" :class="[classes ,'hover:text-primary']">
        <slot></slot>
    </NuxtLink>
</template>
<script>
export default {
  props: {
    classes: {
      type:String,
      default: ''
    },
    target: {
      type: String,
      default: '#'
    }
  },
}
</script>