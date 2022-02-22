<template>
<div id="app">
  <h1>Hello App!</h1>
  
    <router-link to="/">Go to Home</router-link> <br> <br>
    <router-link to="/contact">Contact us</router-link> <br> <br>
    <router-link to="/about">About us</router-link>
  
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
