<template>
  <div>
    <h1 class="text-center text-red-800 font-bold text-5xl p-10">Hello Nuxt</h1>
    <div class="p-5 mx-auto" >
      <h3 class="text-center text-lg">{{ tasks[0].title }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Daftar task
      tasks: [
        {
          title: 'Task 1',
          description: 'ini deskripsi',
          isDone: false,
        },
      ],
    }
  },
}
</script>