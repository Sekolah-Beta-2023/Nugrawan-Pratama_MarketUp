<template>
  <div class="flex justify-between">
    <section
      class="w-[80%] p-10 h-screen bg-slate-300 text-lg my-10 rounded-md text-gray-800"
    >
      <select
        v-model="selectedCategory"
        class="bg-slate-400 p-2 rounded-md mb-3"
      >
        <option value="" class="bg-slate-500">Semua Kategori</option>
        <option
          v-for="category in categories"
          :key="{ category }"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <div class="flex gap-5 text-left text-sm">
        <div
          v-for="task in filteredTasks"
          :key="task.id"
          class="border rounded-md p-2"
        >
          <p>Nama : {{ task.name }}</p>
          <p>Pesan : {{ task.message }}</p>
          <p>Makanan : {{ task.foods }}</p>
          <p>Hobby : {{ task.hobby }}</p>
          <p>Kategori : {{ task.category }}</p>
          <p>Jenis kelamin : {{ task.jenis_kelamin }}</p>
        </div>
      </div>
    </section>

    <form
      class="text-sm p-5 border rounded-md h-fit bg-secondary mt-5"
      @submit.prevent="addTask"
    >
      <div class="mb-3">
        <label for="taskName" class="mr-2 text-bucket">Nama Tugas:</label>
        <input
          id="taskName"
          v-model="newTaskName"
          type="text"
          class="bg-slate-400 p-2 rounded-md"
        />
      </div>
      <div class="mb-3">
        <label for="taskHobby" class="mr-2 text-bucket">Hobi:</label>
        <input
          id="taskHobby"
          v-model="newTaskHobby"
          type="text"
          class="bg-slate-400 p-2 rounded-md"
        />
      </div>
      <div class="mb-3">
        <label for="taskFoods" class="mr-2 text-bucket">Makanan Favorit:</label>
        <input
          id="taskFoods"
          v-model="newTaskFoods"
          type="text"
          class="bg-slate-400 p-2 rounded-md"
        />
      </div>
      <div class="mb-3 text-bucket">
        <div class="mr-2">Jenis Kelamin:</div>
        <input
          id="jenisKelaminPria"
          v-model="newTaskJenisKelamin"
          type="radio"
          value="pria"
          class="bg-slate-400 p-2 rounded-md mr-2"
        />
        <label for="jenisKelaminPria" class="mr-2">Pria</label>
        <input
          id="jenisKelaminWanita"
          v-model="newTaskJenisKelamin"
          type="radio"
          value="wanita"
          class="bg-slate-400 p-2 rounded-md"
        />
        <label for="jenisKelaminWanita">Wanita</label>
      </div>

      <div class="mb-3">
        <label for="taskCategory" class="mr-2 text-bucket">Kategori:</label>
        <select
          id="taskCategory"
          v-model="newTaskCategory"
          class="bg-slate-400 p-2 rounded-md"
        >
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <textarea
          id="taskMessage"
          v-model="newTaskMessage"
          class="bg-slate-400 p-2 rounded-md"
          placeholder="Tambahkan pesan"
        ></textarea>
      </div>
      <div class="mb-3">
        <input
          id="taskTerms"
          v-model="newTaskTerms"
          type="checkbox"
          class="bg-slate-400 p-2 rounded-md"
        />
        <label for="taskTerms" class="mr-2 text-bucket"
          >I egree with the rule</label
        >
      </div>
      <button type="submit" class="bg-primary p-2 rounded-md">
        Tambah Tugas
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: 'Task 1',
          message: 'HEllo',
          hobby: 'playing',
          foods: 'pizza',
          jenis_kelamin: 'pria',
          category: 'siswa',
          terms: true,
        },
        {
          name: 'Task 2',
          message: 'Byebye',
          hobby: 'learning',
          foods: 'burger',
          jenis_kelamin: 'wanita',
          category: 'karyawan',
          terms: true,
        },
        {
          name: 'Task 3',
          message: 'Thankyou',
          hobby: 'music',
          foods: 'nuts',
          jenis_kelamin: 'pria',
          category: 'dokter',
          terms: true,
        },
      ],
      selectedCategory: '',
      form: {
        name: '',
        message: '',
        hobby: '',
        terms: true,
        foods: [],
        jenis_kelamin: '',
      },
      options: {
        inquiry: [{ value: 'playing game', text: 'Playing game' }],
      },
    }
  },
  computed: {
    categories() {
      const uniqueCategories = [
        ...new Set(this.tasks.map((task) => task.category)),
      ]
      return uniqueCategories
    },
    filteredTasks() {
      if (this.selectedCategory === '') {
        return this.tasks
      } else {
        return this.tasks.filter(
          (task) => task.category === this.selectedCategory
        )
      }
    },
  },
  methods: {
    addTask() {
      if (this.newTaskName && this.newTaskCategory) {
        const newTask = {
          id: this.tasks.length + 1,
          name: this.newTaskName,
          message: this.newTaskMessage,
          hobby: this.newTaskHobby,
          foods: this.newTaskFoods,
          jenis_kelamin: this.newTaskJenisKelamin,
          category: this.newTaskCategory,
          terms: this.newTaskTerms,
        }
        this.tasks.push(newTask)

        // Reset input fields
        this.newTaskName = ''
        this.newTaskMessage = ''
        this.newTaskHobby = ''
        this.newTaskFoods = ''
        this.newTaskJenisKelamin = ''
        this.newTaskCategory = ''
        this.newTaskTerms = false
      }
    },
  },
}
</script>