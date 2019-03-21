<template>
  <div class="header">
    <input
      class="input-new-todo"
      id="input-new-todo"
      placeholder="type something u need to do ..."
      v-model="title"
      @keypress.enter="add"
    >
    <button class="btn complete-all" id="complete-all-todo" @click="toggleCompleteAll"></button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: function() {
    return {
      title: "",
      isCompleteAll: false
    };
  },
  methods: {
    ...mapActions(["addTodo", "completeAll", "uncompleteAll"]),

    add() {
      this.addTodo(this.title);
      this.title = "";
    },
    completeAllTodo() {
      this.completeAllTodo();
    },
    toggleCompleteAll() {
      if (this.isCompleteAll) {
        this.uncompleteAll();
        this.isCompleteAll = false;
      } else {
        this.completeAll();
        this.isCompleteAll = true;
      }
    }
  }
};
</script>
