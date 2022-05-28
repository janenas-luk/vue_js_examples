<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                <todo-item :item="item" :index="index" v-on:task-deleted="updateList"></todo-item>
            </li>
        </ul>
    </div>
</template>
<script>

import TodoItem from './TodoItem.vue'

export default {
    name: "TodoList",
    components: { 
        TodoItem
    },
    props: {
        items: { required: true, type: Array}
    },
    data () {
        return {
            
        }
    },
    methods: {
        updateList() {
            this.$emit("update-list")
        }
    }
}
</script>