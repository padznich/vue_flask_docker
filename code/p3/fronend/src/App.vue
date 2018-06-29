<template>
  <div id="app">

    <div>
      <nav>
        <span><router-link to="/hello">Home</router-link></span>
        <span><router-link to="/users">Users</router-link></span>
        <span><router-link to="/list">List</router-link></span>
      </nav>
    </div>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<style scoped>

  a {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
    text-decoration: none;
    color: #2c3e50;
  }
</style>

