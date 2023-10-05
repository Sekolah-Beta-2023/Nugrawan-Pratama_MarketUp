// store/api.js

// variabel berisi objek untuk menampung data
export const state = () => ({
  apiData: [],
  todos: [
    {
      name: 'Todo 1',
      done: false,
    },
    {
      name: 'Todo 2',
      done: false,
    },
    {
      name: 'Todo 3',
      done: false,
    },
  ],
});

// export const getter = (data) => {
//   return data.map((item) => ({
//     id: item.id,
//     name: item.name.toUpperCase(),
//   }));
// };


export const mutations = {
  // parameter pertama, data yang akan di modif
  ADD_TODO(state, payload) {
    state.todos.push(payload)
  },

  DELETE_TODO(state, payload) {
    const index = state.todos.indexOf(payload);
    state.todos.splice(index)
  },

  TOGGLE_TODO(state, payload) {
    const index = state.todos.indexOf(payload);
    state.todos[index].done = !state.todos[index].done
  }
};
