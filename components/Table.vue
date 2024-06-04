<template>
  <div>
    <!-- Modal -->
    <div class="flex flex-col m-10">
      <div class="felx justify-center">
        <TodoModal
          :openModal="isModalOpen"
          :formData="formData"
          @close="handleModalClose"
          @create-task="addItemAndClear"
        />
      </div>

      <div
        class="bg-white border border-gray-200 rounded-lg shadow-md mb-5 subheader-layout"
      >
        <div class="flex justify-between px-3 py-5">
          <div class="flex subheader-typography title-layout">
            <h1 class="text-xl font-semibold">To-Do List</h1>
          </div>

          <div class="flex">
            <!-- dropdown component -->
            <DropDown
              @click-dropdown="toggleDropDown"
              :dropDown="openDropDown"
            />

            <button
              @click="toggleModal"
              type="button"
              class="text-white add-btn bg-custom-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>

      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <!-- Table -->
            <table class="min-w-full divide-y divide-gray-200">
              <!-- Table Header -->
              <thead class="bg-custom-blue text-white">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Task Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Time Left
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Completed
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    End Date
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Created At
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-white-200 tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <!-- Table Body -->
              <tbody class="bg-white divide-y divide-gray-200">
                <TableRow v-for="todo in todoList" :todo="todo" />
              </tbody>
            </table>
            <!-- Table Footer -->
            <div class="mt-4 flex items-center justify-between">
              <div class="flex-1 flex justify-between sm:hidden">
                <!-- Previous Button -->
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <!-- Caret Left Icon (Previous) -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.293 5.293a1 1 0 0 1 1.414 1.414L8.414 11H16a1 1 0 1 1 0 2H8.414l4.293 4.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <!-- Next Button -->
                <a
                  href="#"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <!-- Caret Right Icon (Next) -->
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.707 14.707a1 1 0 0 0 1.414-1.414L11.586 11H4a1 1 0 1 0 0 2h7.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L11.586 9H4a1 1 0 1 0 0 2h7.586l-2.293 2.293a1 1 0 0 0 1.414 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <!-- Rows Per Page Dropdown -->
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script setup>
import { useTodoListStore } from "~/stores/useTodoListStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

import TableRow from "@/components/TableRow.vue";
import Footer from "@/components/Footer.vue";
import TodoModal from "@/components/TodoModal.vue";
import DropDown from "@/components/DropDown.vue";
import Pagination from "@/components/Pagination.vue";

import { calculateTimeLeft } from "~/utils/todoUtils";
import dayjs from "dayjs";

const store = useTodoListStore();
const {
  todoList,
  isModalOpen,
  openDropDown,
  totalItems,
  startIndex,
  endIndex,
} = storeToRefs(store);

const { toggleModal, toggleDropDown } = store;

function handleModalClose() {
  toggleModal();
}

const formData = ref({
  TaskName: "",
  Description: "",
  StartDate: "",
  EndDate: "",
});

store.getTodos();

function addItemAndClear(formData) {
  if (
    !formData.TaskName ||
    !formData.Description ||
    !formData.StartDate ||
    !formData.EndDate
  ) {
    return;
  }

  const TimeLeft = calculateTimeLeft(formData.StartDate, formData.EndDate);
  const CreatedAt = dayjs().format("MMM DD, YYYY hh:mm A");

  const newtask = { ...formData, TimeLeft, CreatedAt };

  store.addTodo(newtask);

  formData.TaskName = "";
  formData.Description = "";
  formData.StartDate = "";
  formData.EndDate = "";

  handleModalClose();
}
</script>
<style>
.subheader-typography {
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
}

.subheader-layout {
  width: 100%;
  height: 81px;
  top: 90px;
  left: 25px;
}

.title-layout {
  width: 141px;
  height: 25px;
  padding-top: 8px;
  padding-left: 8px;
}

.add-btn {
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
}
</style>
