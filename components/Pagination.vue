<template>
  <div class="hidden p-5 sm:flex-1 sm:flex sm:items-center sm:justify-end">
    <div>
      <p class="text-sm text-gray-700">Rows per page:</p>
    </div>
    <div class="mt-2 sm:mt-0 sm:ml-6">
      <select
        v-model="itemsPerPage"
        @change="updateItemsPerPage"
        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
    <div>
      <p class="text-sm text-black px-5">
        <!-- {{ startIndex + 1 }}-{{ endIndex }} of {{ totalItems }} -->
        {{ itemsPerPage }}
      </p>
      <!-- <p class="text-sm text-black px-5">rows per page: 5 1-5 of 10 <></p> -->
    </div>
    <div class="flex justify-between">
      <a href="#" class="px-5" @click="prevPage">
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
      <a href="#" class="px-5" @click="nextPage">
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
</template>

<script setup>
import { useTodoListStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import { defineEmits, ref, computed } from "vue";

const store = useTodoListStore();
const {
  currentPage,
  totalPages,
  itemsPerPage,
  totalRows,
  todoList,
  start,
  end,
} = storeToRefs(store);

const emit = defineEmits(["change-row-per-page"]);

// const currentPage = computed(() => store.currentPage);
// const totalPages = computed(() => store.totalPages);

const prevPage = () => {
  store.setCurrentPage(currentPage.value - 1);
  console.log("testing prev page: ", currentPage.value);
};

const nextPage = () => {
  store.setTotalPages(totalPages.value + 1);
  console.log("testing next page: ", totalPages.value);
};

// calculate startindex and endindex
// const startIndex = computed(() => {
//   return (currentPage.value - 1) * itemsPerPage.value;
// });

// const endIndex = computed(() => {
//   return Math.min(startIndex.value + itemsPerPage.value, totalRows.value);
// });

// const paginateTodoList = () => {
//   itemsPerPage.value = itemsPerPage.value;
//   todoList.value = todoList.value.slice(startIndex.value, endIndex.value);
// };

function updateItemsPerPage() {
  store.getTodos();
  // paginateTodoList();
}

// const totalItems = computed(() => {
//   return totalRows.value;
// });
</script>
