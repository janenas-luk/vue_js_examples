<template>
  <div id="users">
    <h2>Users page</h2>
    <Navigation></Navigation>
    <user-create v-on:created="addUser"></user-create>
    <Table :columns="columns" :data="users"></Table>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script>

import Table from '../components/Table.vue'
import Navigation from '../components/Navigation.vue'
import Counter from '../components/Counter.vue'
import UserCreate from '../components/UserCreate.vue'

export default {
  components: {
      Table,
      Navigation,
      Counter,
      UserCreate
  },
  data () {
      return {
          users : [{name: "Tester", surname: "Testing", age: 25}, 
          {name: "Developer", surname: "Programming", age: 33}],
          columns: ["Name", "Surname", "Age"]
      }
  },
  methods: {
      addUser (user) {
          this.users.push(user)
      }
  }
}
</script>
