<template>
    <div>
        <div>
            <p>There is {{ getListCount }} items in the list</p>
        </div>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                <todo-item :item="item" :index="index"></todo-item>
            </li>
        </ul>
    </div>
</template>
<script>

import TodoItem from './TodoItem.vue'
import { mapGetters } from 'vuex'

export default {
    name: "TodoList",
    components: { 
        TodoItem
    },
    props: {
        items: { required: true, type: Array}
    },
    computed: mapGetters([
        'getListCount'
    ])
}
</script>