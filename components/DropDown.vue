<script setup>
import { defineProps, defineEmits, ref } from "vue";
import { storeToRefs } from "pinia";

import { useTodoListStore } from "@/stores/todo";
const store = useTodoListStore();
const { dropDownItem } = storeToRefs(store);

const props = defineProps({
  dropDown: {
    type: Boolean,
    required: true,
  },
});

store.getDropDownList();

const emit = defineEmits(["click-dropdown"]);

function toggleDropdown() {
  emit("click-dropdown");
}

function handleSort(value) {
  console.log("filter by: ", value);
  switch (value) {
    case "a-z":
      store.sortByTaskNameAZ();
      break;
    case "z-a":
      store.sortByTaskNameZA();
      break;
    case "date_asc":
      store.sortByDateCreatedASC();
      break;
    case "date_desc":
      store.sortByDateCreatedDESC();
      break;

    default:
      break;
  }
}

onMounted(() => {
  document.addEventListener("click", closeDropdownOutside);
});

function closeDropdownOutside(event) {
  if (!event.target.closest("#dropdown") && props.dropDown) {
    toggleDropdown();
  }
}
</script>

<template>
  <div id="dropdown">
    <button
      @click="toggleDropdown"
      data-dropdown-toggle="dropdown"
      class="dropdown dropdown-color bg-white hover:bg-white-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      class="dropdown-content bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 relative"
    >
      <ul
        v-for="item in dropDownItem"
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <a
            @click="handleSort(item.value)"
            href="#"
            class="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >{{ item.label }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-color {
  border: 1px solid #1976d2;
  color: #1976d2;
}
</style>
