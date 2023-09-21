<template>
  <div>
    <h2>{{ article[0] }}</h2>
  </div>
</template>
  
  <script>
export default {
  props: {
    article: {
      type: Object,
    },
  },
}
</script>