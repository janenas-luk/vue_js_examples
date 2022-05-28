<template>
    <div>
        <label for="add-task-input">Add task</label>
        <input type="text" v-model="task" id="add-task-input"/>
        <input type="button" v-on:click="addTask" value="Add"/><br>
    </div>
</template>

<script>

export default {
    data () {
        return {
            task: undefined
        }
    },
    methods: {
        addTask() {
            if (!this.task) {
                return 
            }
            let todoList = this.parseTodoList();
            if (todoList == null) {
                todoList = []
            }
            todoList.push({name: this.task, done: false})
            localStorage.setItem("todoList",JSON.stringify(todoList))
            this.$emit("added")
            this.task = undefined
        }
    }
}
</script>