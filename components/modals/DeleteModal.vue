<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  openModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close-confirm-modal", "delete-confirm"]);

function closeModal() {
  emit("close-confirm-modal");
}

function confirmDeletion() {
  emit("delete-confirm");
}
</script>
<template>
  <div
    v-if="openModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
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
              Delete Task
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
          <form class="p-4 md:p-5" @submit.prevent="confirmDeletion">
            <div class="delete-content">
              <!-- Your content here -->
              <p>Are you sure you want to delete this task?</p>
            </div>
            <div class="flex justify-end">
              <button
                @click="closeModal"
                class="text-white cancel-btn focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="text-white delete-btn focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.cancel-btn {
  color: gray;
  text-decoration: underline;
}
.delete-btn {
  background-color: #c10015;
}

.delete-content {
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  margin-bottom: 20px;
}
</style>
