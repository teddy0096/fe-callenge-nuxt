<script setup>
import { useTodoListStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>

<template>
  <div>
    <div class="flex flex-col m-10">
      <div class="bg-white border border-gray-200 rounded-lg shadow-md mb-5">
        <div class="flex justify-between px-3 py-5">
          <div class="flex">
            <h1 class="text-xl font-semibold">To-Do List</h1>
          </div>

          <div class="flex">
            <!-- dropdown component -->
            <DropDown />

            <!-- Dropdown Menu -->
            <div
              class="dropdown-content absolute hidden bg-white rounded-md shadow-lg w-40 z-10 mt-2"
            >
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >Option 1</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >Option 2</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >Option 3</a
              >
            </div>

            <!-- Dropdown menu -->
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Dashboard</a
                  >
                </li>
              </ul>
            </div>

            <button
              type="button"
              class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
              <thead class="bg-blue-800 text-white">
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
                <!-- Dummy Rows -->
                <!-- Replace these rows with your actual data -->
                <!-- Dummy Row 1 -->
                <tr v-for="todo in todoList" :key="todo.id">
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ todo.TaskName }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">Description 1</td>
                  <td class="px-6 py-4 whitespace-nowrap">1 day</td>
                  <td class="px-6 py-4 whitespace-nowrap">2024-05-01</td>
                  <td class="px-6 py-4 whitespace-nowrap">2024-05-07</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    2024-05-01 10:00 AM
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <!-- Delete and Edit Icons -->
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800"
                    >
                      <svg
                        class="h-8 w-8 text-neutral-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path
                          d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                        />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </span>
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800"
                    >
                      <svg
                        class="h-8 w-8 text-neutral-500"
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 20h9" />
                        <path
                          d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                        />
                      </svg>
                    </span>
                  </td>
                </tr>
                <!-- Dummy Row 2 -->
                <!-- Add more dummy rows as needed -->
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
    <footer class="bg-blue-800 dark:bg-gray-900 text-white">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <img
                src="@/assets/logo/ecv_logo.png"
                class="h-12 me-3"
                alt="FlowBite Logo"
              />
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
              >
                Resources
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://flowbite.com/" class="hover:underline"
                    >Flowbite</a
                  >
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline"
                    >Tailwind CSS</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Follow us
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                    >Discord</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                Legal
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import DropDown from "@/components/DropDown.vue";

export default {
  components: {
    DropDown,
  },
};
</script>
