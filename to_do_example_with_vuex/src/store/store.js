import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: []
    },
    getters: {
        getListCount(state) {
            return state.todoList.length
        }
    },
    mutations: {
        initTodoList(state) {
            state.todoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
        },
        addTask(state, task) {
            state.todoList.push({name: task, done: false})
            localStorage.setItem("todoList",JSON.stringify(state.todoList))
        },
        deleteTask(state, index) {
            state.todoList.splice(index, 1)
            localStorage.setItem("todoList",JSON.stringify(state.todoList))
        },
        updateTaskStatus(state, data) {
            state.todoList[data[0]].done = data[1]
            localStorage.setItem("todoList",JSON.stringify(state.todoList))
        }
    },
    actions: {
        addTask(context, task) {
            context.commit('addTask', task)
        },
        deleteTask(context, index) {
            context.commit('deleteTask', index)
        },
        updateTaskStatus(context, data) {
            context.commit('updateTaskStatus', data)
        }
    }
})