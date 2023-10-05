<template>
  <div class="text-right w-full">
    <button
      :type="{type}"
      class="shadow-md px-3 py-2 mt-3 text-bucket hover:bg-opacity-90 bg-primary font-semibold rounded-md w-full"
    >
      {{ title }}
    </button>
  </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Submit'
            },
            type: {
                type: String,
                default: 'submit'
            }
        }
    }
</script>