<template>
  <main>
    <div class="py-10 text-secondary mt-10 rounded-md border border-secondary w-[30%] mx-auto space-y-5">
      <h2 class="text-center font-bold text-2xl">Login!</h2>
      <NotifComponent v-if="error" :message="error" />
      <form method="post" class="flex p-5 flex-col" @submit.prevent="login">
        <InputField type="text" title="Username" :model="username" />
        <InputField type="text" title="Password" :model="password" />
        <ButtonForm title="Login" type="submit" />
      </form>
      <div class="mt-5 text-center">
        Don't have an account?
        <nuxt-link to="/register" class="text-gray hover:underline">Register</nuxt-link>
      </div>
    </div>
  </main>
</template>
  
<script>
export default {
  middleware: 'guest',
  data() {
    return {
      username: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: "mor_2314",
            password: "83r5^_",
          },
        })

        // this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>