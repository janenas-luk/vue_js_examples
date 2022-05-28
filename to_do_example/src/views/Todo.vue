<template>
    <div>
        <h1>To Do example</h1>
        <add-task v-on:added="reloadData"></add-task>
        <todo-list v-on:update-list="reloadData" :items="todoList"></todo-list>
    </div>
</template>
<script>

import TodoList from "../components/TodoList.vue"
import AddTask from "../components/AddTask.vue"

export default {
    components: {
        TodoList,
        AddTask
    },
    data () {
        return {
            todoList: []
        }
    },
    methods: {
        reloadData() {
            this.todoList = this.parseTodoList();
        }
    },
    created() {
            this.todoList = this.parseTodoList();
    }
}
</script>