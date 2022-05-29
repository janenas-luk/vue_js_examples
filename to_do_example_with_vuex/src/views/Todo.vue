<template>
    <div>
        <h1>To Do example</h1>
        <add-task></add-task>
        <todo-list :items="$store.state.todoList"></todo-list>
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
    beforeCreate() { 
        this.$store.commit('initTodoList');
    }
}
</script>