<template>
    <main id="content">
        <h1 class="text-5xl font-semibold text-white p-5 bg-gray">My Products</h1>
        <CardContainer title="My Products">
            <CardItem :data="myProducts" />
        </CardContainer>
    </main>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
export default {
    middleware: 'auth',
    computed: {
        ...mapState(['myProducts']),
    },
    mounted() {
        this.fetchMyProducts()
    },
    methods: {
        ...mapActions(['fetchMyProducts'])
    }
}
</script>
