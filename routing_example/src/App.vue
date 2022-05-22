<template>
  <div id="app">
    <h1>This is a simple router example</h1>
    <router-link to="/">Home page</router-link>
    <router-link to="/about">About page</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
