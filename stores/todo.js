import { defineStore } from 'pinia'
import { fetchDropDownItem, fetchTodoList } from '@/services/Todo'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 6,
    loading: false,
    isModalOpen: false,
    isConfirm: false,
    isDeleted: false,
    openDropDown: false,
    dropDownItem: [],

    // pagination
    // currentPage: 0,
    // itemsPerPage: 0,
    // totalItems: 0

    currentPage: 1,
    itemsPerPage: 5, // default items per page
  }),

  actions: {
    
    addTodo(item) {
      this.todoList.push({ ...item, id: this.id++, completed: false })
      console.log("add todo", this.todoList)
    },

    updateTodo(updatedTask) {
      const index = this.todoList.findIndex(task => task.id === updatedTask.id)
      if (index !== -1) {
        // Update the task at the found index
        this.todoList[index] = updatedTask
      }
    },
    

    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((item) => {
          return item.id !== itemId
      })
      console.log(this.todoList)
    },

    closeConfirmModal() {
        this.isConfirm = !this.isConfirm
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

    toggleDropDown() {
      this.openDropDown = !this.openDropDown
    },

    sortByTaskNameAZ() {
      this.todoList.sort((a, b) => a.TaskName.localeCompare(b.TaskName))
    },

    sortByTaskNameZA() {
      this.todoList.sort((a, b) => b.TaskName.localeCompare(a.TaskName))
    },

    sortByDateCreatedASC() {
      this.todoList.sort((a, b) => new Date(a.CreatedAt) - new Date(b.CreatedAt))
    },

    sortByDateCreatedDESC() {
      this.todoList.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt))
    },

    setItemsPerPage(itemsPerPage){
      this.itemsPerPage = itemsPerPage;
    },

    setCurrentPage() {
      console.log('store')
      // this.currentPage = page
    },

    async getDropDownList() {
    this.dropDownItem = await fetchDropDownItem()
    },

    async getTodos() {
      this.todoList = await fetchTodoList()
    },

  },

  getters: {
    totalRows() {
      return this.todoList.length
    },

    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage
    },

    endIndex() {
      const end = this.currentPage * this.itemsPerPage
      return Math.min(end, this.totalRows)
    }
  }

})