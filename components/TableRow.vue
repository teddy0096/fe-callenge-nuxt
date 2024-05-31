<script setup>
import { newDateFormat } from "@/utils/todoUtils";

import { defineEmits, defineProps } from "vue";
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todo";
import DeleteModal from "@/components/modals/DeleteModal.vue";
import EditModal from "@/components/modals/EditModal.vue";

const store = useTodoListStore();

const { deleteTodo } = store;

defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete-item"]);

function deleteItem(itemId) {
  console.log(itemId);
  emit("delete-item", { itemId });
}

const openModal = ref(false);
const openEditModal = ref(false);
const todoId = ref(null);

function openDeleteModal(id) {
  todoId.value = id;
  openModal.value = true;
}

function closeDeleteModal() {
  openModal.value = false;
}

function confirmDeletion(todoId) {
  deleteTodo(todoId);
  closeDeleteModal();
}

function handleOpenEditModal(id) {
  todoId.value = id;
  openEditModal.value = true;
}

function handleCloseEditModal() {
  openEditModal.value = false;
}
</script>

<template>
  <DeleteModal
    :openModal="openModal"
    @openDeleteModal="openDeleteModal"
    @delete-confirm="confirmDeletion(todo.id)"
    @close-confirm-modal="closeDeleteModal"
  />
  <EditModal
    :openEditModal="openEditModal"
    :formData="todo"
    @openDeleteModal="openDeleteModal"
    @close-edit-modal="handleCloseEditModal"
  />
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ todo.TaskName }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.Description }}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.TimeLeft }}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ todo.completed }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ newDateFormat(todo.StartDate) }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ newDateFormat(todo.EndDate) }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ newDateFormat(todo.CreatedAt) }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <!-- Delete and Edit Icons -->
      <!-- @click="deleteItem(todo.id)" -->
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full hover:text-red-800 cursor-pointer"
        @click="openDeleteModal(todo.id)"
      >
        <svg
          class="h-6 w-6 text-neutral-500 hover:text-red-500"
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
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </span>
      <span
        @click="handleOpenEditModal(todo.id)"
        class="px-2 inline-flex text-xs leading-5 font-semibold hover:text-yellow-800 rounded-full cursor-pointer"
      >
        <svg
          class="h-6 w-6 text-neutral-500 hover:text-yellow-500"
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
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      </span>
    </td>
  </tr>
</template>

<style scoped></style>
