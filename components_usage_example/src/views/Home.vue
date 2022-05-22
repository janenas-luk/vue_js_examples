<template>
  <div id="home">
    <h2>Home page</h2>
    <Navigation></Navigation>
    <p>There is nothing much to see here. Just a home page</p>
  </div>
</template>

<script>

import Navigation from '../components/Navigation.vue'

export default {
  name: 'home',
  components: {
      Navigation
  }
}
</script>
