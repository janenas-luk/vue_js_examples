<template>
  <div id="home">
    <h2>Home page</h2>
    <div>
        <p>Your age is: {{ageSaved}}</p>
        <p>Enter your age:</p>
        <input v-model="age" type="number"/>
        <input type="button" v-on:click="saveAge" value="Save"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
      return {
        age: undefined,
        ageSaved: undefined
      }
  },
  methods: {
      saveAge() {
          localStorage.age = this.age
          this.ageSaved = this.age
      }
  },
  mounted() {
      if (localStorage.age) {
          this.ageSaved = localStorage.age
      }
  }
}
</script>
