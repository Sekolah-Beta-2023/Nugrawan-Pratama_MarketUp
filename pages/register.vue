<template>
  <main>
    <div
      class="py-10 text-secondary my-10 rounded-md w-3/4 border border-secondary mx-auto space-y-5"
    >
      <h2 class="text-center font-bold text-2xl">Register!</h2>
      <NotifComponent v-if="error" :message="error" />

      <form method="post" class="p-5" @submit.prevent="register">
        <div class="flex gap-10">
          <div class="flex-1">
            <div class="flex gap-3">
              <InputField type="text" title="Username" :model="username" />
              <InputField
                type="text"
                title="Firstname"
                :model="name.firstname"
              />
              <InputField type="text" title="Lastname" :model="name.lastname" />
            </div>

            <InputField type="email" title="Email" :model="email" />
            <InputField type="password" title="Password" :model="password" />
            <InputField type="number" title="Phone" :model="phone" />
          </div>
          
          <div class="flex-1 pt-10">
            <h3 class="text-lg font-bold">Address</h3>
            <InputField type="text" title="City" :model="address.city" />
            <InputField type="text" title="Street" :model="address.street" />
            <div class="flex gap-3">
              <InputField
              type="number"
              title="Number"
              :model="address.number"
              />
              <InputField
                type="number"
                title="Post code"
                :model="address.zipcode"
              />
            </div>
          </div>
        </div>

        <ButtonForm title="Register" type="submit" />
      </form>

      <div class="mt-5 text-center">
        Already got an account?
        <nuxt-link to="/login" class="text-primary hover:underline"
          >Login</nuxt-link
        >
      </div>
    </div>
  </main>
</template>
  
  <script>
export default {
  middleware: 'guest',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      name: {
        firstname: '',
        lastname: '',
      },
      address: {
        city: '',
        street: '',
        number: 0,
        zipcode: '',
        geolocation: {
          lat: '',
          long: '',
        },
      },
      phone: '',
      error: null,
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('/users', {
          email: this.email,
          username: this.username,
          password: this.password,
          name: this.name,
          address: this.address,
          phone: this.phone
        })
        await this.$auth.loginWith('local', {
            username: this.username,
            password: this.password,
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>