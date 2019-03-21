<template>
  <div class="todoapp">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <Header/>
    <div class="main">
      <Todos/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "todoapp",
  components: {
    Todos,
    Header,
    Footer
  }
};
</script>

<style scooped>
.logo {
  display: block;
  margin: 0 auto 20px;
}
</style>
