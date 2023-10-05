<template>
  <main>
    <div
      class="py-10 text-secondary mt-10 rounded-md border border-secondary w-[30%] mx-auto space-y-5"
    >
      <h2 class="text-center font-bold text-2xl">Login!</h2>
      <NotifComponent v-if="error" :message="error" />
      <form
        method="post"
        class="flex p-5 gap-3 flex-col"
        @submit.prevent="login"
      >
        <label class="label"
          >Email
          <div class="border border-bucket p-1 rounded-md">
            <input
              v-model="email"
              type="email"
              class="outline-none w-full"
              name="email"
              required
            />
          </div>
        </label>

        <label class="label"
          >Password
          <div class="border border-bucket p-1 rounded-md">
            <input
              v-model="password"
              type="password"
              class="outline-none w-full"
              name="password"
              required
            />
          </div>
        </label>
        <div class="control">
          <button
            type="submit"
            class="px-3 py-2 text-bucket hover:bg-opacity-90 bg-primary font-semibold rounded-md mt-3"
          >
            Login
          </button>
        </div>
      </form>
      <div class="mt-5 text-center">
        Don't have an account? 
        <nuxt-link to="/register" class="text-primary hover:underline"
          >Register</nuxt-link
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
      password: '',
      error: null,
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>