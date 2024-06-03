<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  dropDown: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["click-dropdown"]);

function toggleDropdown() {
  console.log("click");
  emit("click-dropdown");
  event.stopPropagation();
}
</script>

<template>
  <div>
    <button
      @click="toggleDropdown"
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      class="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Sort By
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="dropDown"
      id="dropdown"
      class="z-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 float"
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
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Settings</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Earnings</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Sign out</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
/* Add your styles for the dropdown button and menu here */
.dropdown-button {
  /* Button styles */
}
.dropdown-menu {
  /* Dropdown menu styles */
  display: none; /* Initially hidden */
}
.dropdown-menu.active {
  display: block; /* Show when active */
}
</style>
