import { defineStore } from 'pinia'
import TodoService from '@/services/Todo'

export const useTodoListStore = defineStore('todoList', {
    // state
    state: () => ({
      todoList: [],
      id: 0,
      loading: false
  }),

   // actions
   actions: {

    addTodo(item) {
        this.todoList.push({ item, id: this.id++, completed: false })
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
    },

   async getTodos() {
    this.loading = true
    try {
      const response = await TodoService.getTodoList()
      console.log(response)
      this.todoList = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false
    };
  }
    

},

})