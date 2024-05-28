import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    // state
    state: () => ({
        todoList: [],
        id: 0
    }),

    // actions
    actions: {

        addTodo(item) {
            this.todoList.push({ item, id: this.id ++, completed: false })
            console.log(this.todoList)
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter((item) => {
                return item.id !== itemId
            })
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})