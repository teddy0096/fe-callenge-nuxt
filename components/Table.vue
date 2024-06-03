<script setup>
import { useTodoListStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

import TableRow from "@/components/TableRow.vue";
import Footer from "@/components/Footer.vue";
import TodoModal from "@/components/TodoModal.vue";

import { calculateTimeLeft } from "~/utils/todoUtils";
import dayjs from "dayjs";
import DropDown from "@/components/DropDown.vue";

const store = useTodoListStore();
const { todoList, isModalOpen, openDropDown } = storeToRefs(store);
const { toggleModal, toggleDropDown } = store;

onMounted(() => {
  store.getTodos();
});

function handleModalClose() {
  toggleModal();
}

const formData = ref({
  TaskName: "",
  Description: "",
  StartDate: "",
  EndDate: "",
});

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

      <div class="bg-white border border-gray-200 rounded-lg shadow-md mb-5">
        <div class="flex justify-between px-3 py-5">
          <div class="flex">
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
              class="text-white bg-custom-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
              <div
                class="hidden p-5 sm:flex-1 sm:flex sm:items-center sm:justify-end"
              >
                <div>
                  <p class="text-sm text-gray-700">Rows per page:</p>
                </div>
                <div class="mt-2 sm:mt-0 sm:ml-6">
                  <select
                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option selected>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                  </select>
                </div>
                <div>
                  <p class="text-sm text-gray-700 px-5">rows number here</p>
                </div>
                <div class="flex justify-between">
                  <a href="#" class="px-5">
                    <svg
                      class="w-4 h-4 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                      ></path>
                    </svg>
                  </a>
                  <a href="#" class="px-5">
                    <svg
                      class="w-4 h-4 text-gray-400 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>
