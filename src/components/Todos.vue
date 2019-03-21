<template>
  <ul class="todo-list" id="todo-list">
    <TodoItem v-for="t in todoList()" :key="t.id" :todo="t"/>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  computed: {
    ...mapGetters(["todos", "remainingTodo", "completetedTodo", "currentMode"])
  },
  components: {
    TodoItem
  },
  methods: {
    todoList() {
      switch (this.currentMode) {
        case "completed":
          return this.completetedTodo;
        case "remaining":
          return this.remainingTodo;
        default:
          return this.todos;
      }
    }
  }
};
</script>
