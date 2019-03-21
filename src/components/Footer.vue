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
    <button class="btn show-all" :class="{active: currentMode === 'all'}" id="show-all" @click="toModeAll">All</button>
    <button class="btn show-uncomplete" :class="{active: currentMode === 'remaining'}" id="show-uncomplete" @click="toModeRemaining">Uncomplete</button>
    <button class="btn show-complete" :class="{active: currentMode === 'completed'}" id="show-completed" @click="toModeCompleted">Complete</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["todos", "remainingTodo","currentMode"])
  },
  methods: {
    ...mapActions(["toModeRemaining","toModeCompleted","toModeAll"])
  }
};
</script>
