<template>
    <div class="pt-52 h-screen text-center bg-slate-300 w-[50%] mx-auto text-lg rounded-md leading-10 text-gray-800 font-medium">
      <select v-model="selectedCategory" class="bg-slate-400 p-2 rounded-md mb-3">
        <option value="" class="bg-slate-500">Semua Kategori</option>
        <option v-for="category in categories" :key="{ category }" :value="category">{{ category }}</option>
      </select>
      <ul>
        <li v-for="task in filteredTasks" :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, name: 'Task 1', category: 'Sekunder' },
          { id: 2, name: 'Task 2', category: 'Primer' },
          { id: 3, name: 'Task 3', category: 'Tersier' },
          { id: 4, name: 'Task 4', category: 'Promotion' },
          { id: 5, name: 'Task 5', category: 'Sultan' },
          { id: 6, name: 'Task 6', category: 'Crazy' }
        ],
        selectedCategory: '',
      };
    },
    computed: {
      categories() {
        const uniqueCategories = [...new Set(this.tasks.map(task => task.category))];
        return uniqueCategories;
      },
      filteredTasks() {
        if (this.selectedCategory === '') {
          return this.tasks; 
        } else {
          return this.tasks.filter(task => task.category === this.selectedCategory);
        }
      },
    },
  };
</script>
  