<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ todo.TaskName }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.Description }}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.TimeLeft }}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ todo.completed }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.StartDate }}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.EndDate }}</td>
    <td class="px-6 py-4 whitespace-nowrap">{{ todo.CreatedAt }}</td>
    <td class="px-6 py-4 whitespace-nowrap">
      <!-- Delete and Edit Icons -->
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800"
      >
        <svg
          class="h-6 w-6 text-neutral-500"
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
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800"
      >
        <svg
          class="h-6 w-6 text-neutral-500"
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
