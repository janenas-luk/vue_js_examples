<template>
  <div id="app">
    <h1>This is a router example with navigation guard</h1>
    <router-link to="/">Home page</router-link>
    <router-link to="/rated18">Rated18 page</router-link>
    <router-link to="/rated35">Rated35 page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
