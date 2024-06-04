import { defineStore } from 'pinia';
import { fetchDropDownItem, fetchTodoList } from '@/services/Todo';


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
    currentPage: 1,
    itemsPerPage: 3,
  }),

  actions: {
    addTodo(item) {
      this.todoList.push({ ...item, id: this.id++, completed: false });
      console.log("add todo", this.todoList);
    },

    updateTodo(updatedTask) {
      const index = this.todoList.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        // Update the task at the found index
        this.todoList[index] = updatedTask;
      }
    },


    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((item) => {
        return item.id !== itemId;
      });
      console.log(this.todoList);
    },

    closeConfirmModal() {
      this.isConfirm = !this.isConfirm;
    },

    isDeleted() {
      this.isDeleted = true;
    },

    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      console.log("isModalOpen?", this.isModalOpen);
    },

    toggleDropDown() {
      this.openDropDown = !this.openDropDown;
    },

    sortByTaskNameAZ() {
      console.log('test')
      // this.todoList.sort((a, b) => a.TaskName.localeCompare(b.TaskName));
    },

    sortByTaskNameZA() {
      this.todoList.sort((a, b) => b.TaskName.localeCompare(a.TaskName));
    },

    sortByDateCreatedASC() {
      this.todoList.sort((a, b) => new Date(a.CreatedAt) - new Date(b.CreatedAt));
    },

    sortByDateCreatedDESC() {
      this.todoList.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt));
    },

    async getDropDownList() {
      this.dropDownItem = await fetchDropDownItem();
    },

    async getTodos() {
      this.todoList = await fetchTodoList();
      console.log("test lenght", this.todoList.length);
    },

    setCurrentPage() {
      console.log('testasdasdas')
    }
  },

  getters: {
    totalRows() {
      return this.todoList.length;
    },
  }
});
