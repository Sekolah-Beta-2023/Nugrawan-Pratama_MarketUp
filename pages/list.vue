<template>
  <div class="pt-24">
    <input v-model="todo.name" type="text" class="border mb-5" placeholder="Input todolist & enter" @keyup.enter="ADD_TODO">
    <button type="button" class="rounded-md p-2 bg-primary" aria-label="Close" @click="TOGGLE_TODO">ADD</button>
    <div class="text-center space-y-5">
      <!-- Menampilkan daftar todo-items -->
      <div v-for="item, index in todos" :key="index">
        {{ item.name }}
        <button class= "p-2 bg-primary" @click="DELETE_TODO(item.name)">DELETE</button>
      </div>

      <!-- Menambahkan tombol untuk menambahkan todo -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        name: '',
        done: false,
      },
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos
    },
  },
  methods: {
    TOGGLE_TODO() {
      this.$store.commit('ADD_TODO', this.todo)
    },
    ADD_TODO() {
      this.$store.commit('news/ADD_TODO', { name: this.todo.name, done: this.todo.done })
      this.todo.name = '' // Clear the input field
    },
    DELETE_TODO(item) {
      this.$store.commit('news/DELETE_TODO', item)
    },
  },
}
</script>
