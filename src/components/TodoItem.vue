<template>
  <li :id="todo.id" class="todo">
    <input
      class="todo__input"
      :class="{ 'has-completed': todo.completed }"
      id="input-todo"
      :value="todo.title"
      :readonly="isReadonly"
      @dblclick="isReadonly = false"
      @keypress.enter="edit"
      @blur="edit"
    >
    <button class="btn todo__remove" id="remove-todo" @click="removeTodo(todo.id)"></button>
    <button
      class="btn todo__completed"
      :class="{ 'has-completed': todo.completed }"
      id="complete-todo"
      @click="toggleTodo(todo.id)"
    ></button>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",

  props: {
    todo: Object
  },

  data: () => ({
    isReadonly: true
  }),

  methods: {
    ...mapActions(["removeTodo", "toggleTodo", "editTodo"]),

    edit(event) {
      this.editTodo({ id: this.todo.id, title: event.target.value });
      this.isReadonly = true;
    }
  }
};
</script>
