<template>
    <div class="container p-10 mx-auto text-center">
        <h1 v-if="error.statusCode === 404" class="text-5xl font-bold p-10 opacity-90">
            🤷‍♂️ Page Not Found
        </h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/" class="text-blue-700 text-lg underline hover:opacity-80">Back to Home</NuxtLink>
    </div>
</template>
<script>
export default {
    props: ['error'],
    // layout: 'none', // Anda dapat membuat custom page untuk halaman error
}
</script>