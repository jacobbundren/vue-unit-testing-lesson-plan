<template>
  <div id="app">
    <NavBar v-if="$route.name !== 'login'"></NavBar>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from "@/components/NavBar";
  export default {
    name: "App",
    components: { NavBar }
  }
</script>
<style>
  /*272727*/
  /*F1D302*/
  /*449DD1*/
  /*7A8B99*/
body {
  margin: 0;
  color: #272727;
  background-color: #FBF5F3;
}
a {
  color: #272727;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
