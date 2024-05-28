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
    <div v-if="isOpen" class="dropdown-menu">
      <a href="#" class="dropdown-item">Option 1</a>
      <a href="#" class="dropdown-item">Option 2</a>
      <a href="#" class="dropdown-item">Option 3</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

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
