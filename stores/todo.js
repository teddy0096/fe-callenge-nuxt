import { defineStore } from 'pinia'
import { fetchTodoList } from '@/services/Todo'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
      todoList: [],
      id: 6,
      loading: false,
      isModalOpen: false,
      isConfirm: false,
      isDeleted: false,
  }),

   actions: {

    addTodo(item) {
        this.todoList.push({ ...item, id: this.id++, completed: false })
        console.log("add todo", this.todoList)
    },

    closeConfirmModal() {
        this.isConfirm = !this.isConfirm
    },

    deleteTodo(itemId) {
        this.todoList = this.todoList.filter((item) => {
            return item.id !== itemId
        })
        console.log(this.todoList)
    },

    isDeleted() {
        this.isDeleted = true;
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