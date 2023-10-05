<template>
    <div>
        <h1>This is lifecycle</h1>
        <hr><br>

        <button @click="msg='LAST'">Ubah pesan</button>
        <p>{{ msg }}</p>
        <hr><br>

        <div>{{  propertyComputed }}</div>
        <hr><br>

        <div ref="button-element">{{ counter }}</div>
         <hr><br>

         <h3>{{  exampleLeakyProperty }}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'FIRST',
                property: 'Example property',
                counter: 0,
                exampleLeakyProperty: 'This represent a property that will leak memory if not clean up'
            }
        },

        computed: {
            propertyComputed() {
                return this.property
            }
        },

        created() {
            this.msg = 'SECOND'
            this.property = 'Example property updated'
            setInterval(() => {
                this.counter++
            }, 1000)
        },
        beforeMount() {
            this.msg =  'THIRD'
        },
        mounted() {
            this.msg = 'FOURTH'
        },
        beforeUpdate() {
            console.log(this.counter)
        },
        updated() {
            console.log(+this.$refs['button-element'].textContent === this.counter);
        },
        beforeDestroy() {
            console.log('Watchers child components and evnet listeners have not been teared down yet');
            this.exampleLeakyProperty = null
            delete this.exampleLeakyProperty
        }
    }
</script>