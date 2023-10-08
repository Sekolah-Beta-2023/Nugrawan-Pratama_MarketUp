<!-- Your existing component -->
<template>
    <main>
        <div class="py-10 text-secondary mt-10 rounded-md border border-secondary w-[30%] mx-auto space-y-5">
            <h2 class="text-center font-bold text-2xl">Add Product</h2>
            <form class="flex p-5 flex-col" @submit.prevent="addProduct">
                <InputField label="Title" v-model="data.title" name="title" type="text" required />
                <InputField label="Price" v-model="data.price" name="price" type="number" required />
                <InputField label="Description" v-model="data.description" name="description" type="text" required />
                <InputField label="Image Link" v-model="data.image" name="image" type="text" required />
                <InputField label="Category" v-model="data.category" name="category" type="text" required />
                <ButtonForm title="Send" type="submit" />
            </form>
        </div>
    </main>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    middleware: 'auth',
    data() {
        return {
            data: {
                title: '',
                price: 0,
                description: '',
                category: '',
                image: '',
                rating: {
                    rate: 0,
                    count: 0,
                },
            },
        };
    },
    methods: {
        ...mapActions(['addMyProducts']),
        async addProduct() {
            await this.addMyProducts(this.data);
            this.$router.push('/products/me');
        },
    },
};
</script>
