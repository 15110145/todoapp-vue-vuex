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
    todos: (state) => (state.todos),
    remainingTodo: (state) => (state.todos.filter((todo) => (todo.completed === false))),
    completetedTodo: (state) => (state.todos.filter((todo) => (todo.completed === true))),
    currentMode: (state) => (state.mode)
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
    [types.COMPLETE_ALL](state) {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: true }))
    },
    [types.UNCOMPLETE_ALL](state) {
      state.todos = state.todos.map((todo) => ({ ...todo, completed: false }))
    },
    [types.MODE_REMAINING](state) {
      state.mode = 'remaining'
    },
    [types.MODE_COMPLETED](state) {
      state.mode = 'completed'
    },
    [types.MODE_ALL](state){
      state.mode = 'all'
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
    completeAll(context) {
      context.commit(types.COMPLETE_ALL)
    },
    uncompleteAll(context) {
      context.commit(types.UNCOMPLETE_ALL)
    },
    toModeRemaining(context) {
      context.commit(types.MODE_REMAINING)
    },
    toModeCompleted(context) {
      context.commit(types.MODE_COMPLETED)
    },
    toModeAll(context) {
      context.commit(types.MODE_ALL)
    }
  },

  plugins: [vuexPersist.plugin]
})
