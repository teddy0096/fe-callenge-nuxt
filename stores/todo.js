import { defineStore } from 'pinia'
import { fetchTodoList } from '@/services/Todo'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
      todoList: [],
      id: 6,
      loading: false,
      isModalOpen: false,
      isConfirm: false,
  }),

   actions: {

    addTodo(item) {
        this.todoList.push({ ...item, id: this.id++, completed: false })
        console.log("add todo", this.todoList)
    },
    deleteTodo(itemId) {
        this.isConfirm = true

        // console.log(this.isConfirm); debugger

        // this.todoList = this.todoList.filter((item) => {
        //     return item.id !== itemId
        // })
    },

    closeConfirmModal() {
        this.isConfirm = false
    },

    toggleCompleted(idToFind) {
        const todo = this.todoList.find((obj) => obj.id === idToFind)
        if (todo) {
            todo.completed = !todo.completed
        }
    },

    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      console.log("isModalOpen?", this.isModalOpen)
    },

   async getTodos() {
    this.todoList = await fetchTodoList()
  }
    
},

})