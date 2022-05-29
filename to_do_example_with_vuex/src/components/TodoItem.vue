<template>
    <div>
        <input type="checkbox" :id="id" v-model="isDone" v-bind:checked="isDone"/>
        <label for="id">{{item.name}}</label>
        <input type="button" v-on:click="deleteTask(index)" value="Delete"/>
    </div>
</template>

<script>

import uniqueId from 'lodash.uniqueid';
import { mapActions } from 'vuex'

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
    methods: 
        mapActions([
            'deleteTask',
            'updateTaskStatus'
        ]),
    watch: {
        isDone(status) {
            this.updateTaskStatus([this.index, status])
        }   
    }
}
</script>