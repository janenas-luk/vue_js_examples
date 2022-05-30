<template>
  <div id="app" class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <router-view></router-view>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
