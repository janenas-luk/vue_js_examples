<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for='column in columns' :key='column._id'> {{ column }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in data" :key="user._id">
                    <td v-for="element in user" :key="element._id">{{ element }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    props: {
        columns: { required: true, type: Array},
        data: { required: true, type: Array}
    }
}
</script>
