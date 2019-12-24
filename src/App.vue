<template>
  <div id="app">
    <!-- <Header /> -->
    <Main title="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Main from './components/Main.vue'
// import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    Main
    // Header
  }
}
</script>

<style lang="less">
@import "./variables.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  color: #2c3e50;
  background-color: @almostwhite;
  min-height: 100vh;
  position: relative;
}
body {
  margin: 0;
}
</style>
