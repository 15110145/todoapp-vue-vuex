<template>
  <ul class="todo-list" id="todo-list">
    <todo-item v-for="t in todoList()" :key="t.id" :todo="t"/>
  </ul>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import TodoItem from "./TodoItem.vue";
import * as modes from "../mode-types"

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  computed: {
    ...mapState(["todos", "mode"]),
    ...mapGetters(["remainingTodo", "completetedTodo"])
  },
  methods: {
    todoList() {
      switch (this.mode) {
        case modes.MODE_COMPLETED:
          return this.completetedTodo;
        case modes.MODE_REMAINING:
          return this.remainingTodo;
        default:
          return this.todos;
      }
    }
  }
};
</script>
