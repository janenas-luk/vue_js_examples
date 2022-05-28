<template>
    <div>
        <input type="checkbox" :id="id" v-model="isDone" v-bind:checked="isDone"/>
        <label for="id">{{item.name}}</label>
        <input type="button" v-on:click="deleteTask(index)" value="Delete"/>
    </div>
</template>

<script>

import uniqueId from 'lodash.uniqueid';

export default {
    name: "TodoItem",
    props: {
        item: {required: true, type: Object},
        index: {required: true}
    },
    data () {
        return {
            id: uniqueId('todo-'),
            isDone: this.item.done
        }
    },
    methods: {
        deleteTask(index) {
            let todoList = this.parseTodoList();
            todoList.splice(index, 1)
            localStorage.setItem("todoList",JSON.stringify(todoList))
            this.$emit("task-deleted")
        },
        updateTask(index, value) {
            let todoList = this.parseTodoList();
            todoList[index].done = value
            localStorage.setItem("todoList",JSON.stringify(todoList))
        }
    },
    watch: {
        isDone(value) {
            this.updateTask(this.index, value)
        }   
    }
}
</script>