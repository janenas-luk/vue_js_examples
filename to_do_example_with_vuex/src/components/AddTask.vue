<template>
    <div>
        <label for="add-task-input">Add task</label>
        <input type="text" v-model="task" id="add-task-input"/>
        <input type="button" v-on:click="addTask(task)" value="Add"/><br>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data () {
        return {
            task: undefined
        }
    },
    methods: 
        mapActions([
            'addTask'
        ])    
}
</script>