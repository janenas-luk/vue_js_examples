<template>
    <div>
        <p>Counter: {{ counter }} </p>
        <input type="button" v-on:click="increment" value="Increment"/>
    </div>
</template>

<script>

export default {
    data () {
        return {
            counter: 0
        }
    },
    methods: {
        increment () {
            this.counter++
        }
    }
}
</script>
