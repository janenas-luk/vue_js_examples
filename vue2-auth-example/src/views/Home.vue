<template>
  <div>
    <h2>Welcome Home!</h2>
    <div>You are logged in</div>
    <button @click="logout">Logout</button>
  </div>
</template>
  
  <script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
  created() {
    if (!this.$store.state.auth.token) {
      this.$router.push("/login");
    }
  },
};
</script>