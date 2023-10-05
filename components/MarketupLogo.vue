<template>
    <div :class="[container, 'flex gap-3 content-center items-center px-3 rounded-sm cursor-pointer']">
        <h1 class="text-bucket text-2xl font-bold mx-auto" :class="text">
          MARKET<span class="text-primary">CUB</span>
        </h1>
      </div>
</template>

<script>
    export default {
        props: {
            container: {
                default: '',
                type: String
            },
            text: {
                default: '',
                type: String
            }
        }
    }
</script>