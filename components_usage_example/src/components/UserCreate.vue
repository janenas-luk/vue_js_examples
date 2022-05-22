<template>
    <div>
        <p>Create a new user</p>
        <p>Name: <input v-model="name" type="text"/></p>
        <p>Surname: <input v-model="surname" type="text"/></p>
        <p>Age: <input v-model="age" type="number"/></p>
        <p><input v-on:click="createUser" type="button" value="Create"/></p>
    </div>
</template>

<script>

export default {
    data () {
        return {
            name: undefined,
            surname: undefined,
            age: undefined
        }
    },
    methods: {
        resetFields() {
            this.name = undefined
            this.surname = undefined
            this.age = undefined
        },
        createUser () {
            let user = {}
            user.name = this.name
            user.surname = this.surname
            user.age = this.age
            this.$emit('created', user)
            this.resetFields()
        }
    }
}
</script>
