<template>
  <div class="footer">
    <span>
      All:
      <span id="all">{{ todos.length }}</span>
    </span>
    <span>
      Remaining:
      <span id="remaining">{{ remainingTodo.length }}</span>
    </span>
    <button
      class="btn show-all"
      :class="{ active: mode === 'all' }"
      id="show-all"
      @click="changeMode(modes.MODE_ALL)">
      All
    </button>
    <button
      class="btn show-uncomplete"
      :class="{ active: mode === 'remaining' }"
      id="show-uncomplete"
      @click="changeMode(modes.MODE_REMAINING)">
      Uncomplete
    </button>
    <button
      class="btn show-complete"
      :class="{ active: mode === 'completed' }"
      id="show-completed"
      @click="changeMode(modes.MODE_COMPLETED)">
      Complete
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import * as modes from '../mode-types';

export default {
  name: 'Footer',

  data: () => ({
    modes: modes
  }),

  methods: {
    ...mapActions(['changeMode'])
  },

  computed: {
    ...mapState(['todos', 'mode']),
    ...mapGetters(['remainingTodo'])
  }
};
</script>
