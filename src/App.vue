<template>
  <div id="app">
    <index-vue />
  </div>
</template>

<script>
import IndexVue from "./components/Index.vue";

export default {
  name: "App",
  components: {
    IndexVue,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dosis&family=Roboto:wght@300&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Dosis", sans-serif !important;
  color: #2c3e50;
}
</style>
