<template>
  <div>
    <div
      class="text-blue-500 font-bold text-xl text-center p-10"
      :class="{ hover: data.isActive, 'text-red-600': data.hasError }"
    >INI CLASSES</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        isActive: false,
        hasError: true,
      },
    }
  },
}
</script>