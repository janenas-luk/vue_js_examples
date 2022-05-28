const storageMixin = {
    name: "storageMixin",
    methods: {
        parseTodoList() {
            return localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
        }
    }
}

export default storageMixin