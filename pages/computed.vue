<template>
  <div class="hello">
    <h1>{{ count }}</h1>

    <p>{{ fullName }}</p>

    <div class="hello">
      <h2 v-if="display">Display conditionally</h2>
      <button @click="displayBoolean = !displayBoolean">Toggle</button>
    </div>
  </div>
</template>
    <script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      shopNumber: 2,

      firstName: 'John',
      lastName: 'Doe',

      displayBoolean: false,
    }
  },
  computed: {
    count: function () {
      return 'The shop number is ' + this.shopNumber * 3
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    display() {
      if (this.displayBoolean) {
        return false
      } else 
        return true
    },
  },
}
</script>
