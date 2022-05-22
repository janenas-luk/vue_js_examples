<template>
  <div id="os">
    <h2>Operating systems page</h2>
    <Navigation></Navigation>
    <Table :columns="columns" :data="os"></Table>
  </div>
</template>

<script>

import Table from '../components/Table.vue'
import Navigation from '../components/Navigation.vue'

export default {
  components: {
      Table,
      Navigation
  },
  data () {
      return {
          os: [{name: "Windows", type: "Closed source"}, 
          {name: "Linux", type: "Open source"},
          {name: "Mac OS", type: "Closed source"}],
          columns: ["Name", "Type"]
      }
  }
}
</script>
