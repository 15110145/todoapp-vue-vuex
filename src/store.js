import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import * as types from './mutation-types'

const vuexPersist = new VuexPersist({
  key: 'todoapp',
  storage: localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: 'all',
    todos: []
  },

  getters: {
    remainingTodo: (state) => (state.todos.filter((todo) => (todo.completed === false))),
    completetedTodo: (state) => (state.todos.filter((todo) => (todo.completed === true)))
  },

  mutations: {
    [types.ADD_TODO](state, title) {
      state.todos = [...state.todos, {
        id: state.todos.reduce((a, b) => ((a.id > b.id) ? a.id : b.id), 0) + 1,
        title: title,
        completed: false
      }]
    },
    [types.REMOVE_TODO](state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    [types.EDIT_TODO](state, { id, title }) {
      let temp = [...state.todos]
      temp[temp.findIndex((todo) => (todo.id === id))].title = title
      state.todos = temp
    },
    [types.TOGGLE_TODO](state, id) {
      let temp = [...state.todos]
      let i = temp.findIndex((todo) => (todo.id === id))
      temp[i].completed = !temp[i].completed
      state.todos = temp
    },
    [types.TOGGLE_ALL](state, truthy) {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: Boolean(truthy) }))
    },
    [types.CHANGE_MODE](state, mode) {
      state.mode = mode
    }
  },

  actions: {
    addTodo(context, title) {
      context.commit(types.ADD_TODO, title)
    },
    editTodo(context, { id, title }) {
      context.commit(types.EDIT_TODO, { id, title })
    },
    removeTodo(context, id) {
      context.commit(types.REMOVE_TODO, id)
    },
    toggleTodo(context, id) {
      context.commit(types.TOGGLE_TODO, id)
    },
    toggleAll(context, truthy) {
      context.commit(types.TOGGLE_ALL, truthy)
    },
    changeMode(context, mode) {
      context.commit(types.CHANGE_MODE, mode)
    }
  },

  plugins: [vuexPersist.plugin]
})
