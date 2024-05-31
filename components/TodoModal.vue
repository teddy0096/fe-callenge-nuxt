<script setup>
import { defineEmits, defineProps } from "vue";

import { ref, watch, toRefs } from "vue";
// import { useTodoListStore } from "@/stores/todo";

const props = defineProps({
  openModal: {
    type: Boolean,
    required: true,
  },

  formData: {
    type: Object,
    required: true,
  },
});

const { formData } = toRefs(props);

const todo = ref({
  ...props.formData,
});

watch(formData, (newProps) => {
  todo.value = { ...newProps.formData };
});

const emit = defineEmits(["close", "create-task"]);
function closeModal() {
  emit("close");
}

function createTaskAndClear() {
  if (
    !todo.value.TaskName ||
    !todo.value.Description ||
    !todo.value.StartDate ||
    !todo.value.EndDate
  ) {
    return;
  }

  emit("create-task", { ...todo.value });

  todo.value = {
    TaskName: "",
    Description: "",
    StartDate: "",
    EndDate: "",
  };
}
</script>
<template>
  <div
    v-if="openModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden relative w-full md:max-w-md h-full max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between bg-custom-blue p-4 md:p-5 border-b rounded-t dark:border-gray-600"
            style="height: 54px"
          >
            <!-- <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              supposed ""{{ action name }}
            </h3> -->

            <h3 class="text-lg font-semibold text-white dark:text-white">
              Create Task
            </h3>
            <button
              @click="closeModal"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form class="p-4 md:p-5" @submit.prevent="createTaskAndClear">
            <div class="grid gap-4 mb-4 grid-cols-2">
              <div class="col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Task Name</label
                >
                <input
                  type="text"
                  v-model="todo.TaskName"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div class="col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Description</label
                >
                <textarea
                  v-model="todo.Description"
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="start"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Start Date</label
                >
                <input
                  type="datetime-local"
                  v-model="todo.StartDate"
                  id="start"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="yyyy-mm-dd HH:mm:ss"
                  required=""
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  for="end-date"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >End Date</label
                >
                <input
                  v-model="todo.EndDate"
                  type="datetime-local"
                  name="endtDate"
                  id="end-date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="yyyy-mm-dd HH:mm:ss"
                  required=""
                />
              </div>
            </div>
            <div class="flex justify-between">
              <button
                type="submit"
                class="text-white inline-flex justify-end bg-custom-green hover:green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style="margin-left: auto"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
