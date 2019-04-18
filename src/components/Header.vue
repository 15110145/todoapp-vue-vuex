<template>
  <div class="header">
    <input
      class="input-new-todo"
      id="input-new-todo"
      placeholder="type something u need to do ..."
      v-model="title"
      @keypress.enter="add"/>
    <button
      class="btn complete-all"
      id="complete-all-todo"
      @click="toggleCompleteAll"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data: function() {
    return {
      title: '',
      isCompleteAll: false
    };
  },
  methods: {
    ...mapActions(['addTodo', 'toggleAll']),

    add() {
      this.addTodo(this.title);
      this.title = '';
    },
    toggleCompleteAll() {
      if (this.isCompleteAll) {
        this.toggleAll(true);
        this.isCompleteAll = false;
      } else {
        this.toggleAll(false);
        this.isCompleteAll = true;
      }
    }
  }
};
</script>
