<template>
    <section class="container bg-white mx-auto px-10 pt-20 h-screen flex gap-10 items-center">
        <div class="space-x-3">
            <h1 class="text-secondary text-5xl mx-auto font-bold">Found the product with premium quality</h1>
            <p class="text-lg font-semibold font-mono my-5">We offers your all of our best products, from the best quality of material and good process</p>
            <ButtonComponents target="/register" :primary="false" name="Get Started" />
            <ButtonComponents target="/products" name="Products List" />
        </div>
        <img class="p-5 w-[50%]" src="/hero.jpg" alt="hero image">
    </section>
</template>