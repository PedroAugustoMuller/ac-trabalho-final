<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Hábito",
  },
  description: {
    type: String,
    default: "Objetivo do hábito",
  },
  duration: {
    type: String,
    default: "12/11/2024",
  },
  award: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
    <div class="w-80 bg-[var(--main-bg)] dark:bg-[var(--main-bg-dark)] rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex items-center">
      <v-checkbox
        class="pr-2 dark:text-[var(--text-dark)]"
      />
      <div>
        <h3 class="text-xl font-bold dark:text-[var(--text-dark)]">{{ title }}</h3>
        <p class="text-gray-600 dark:text-[var(--text-secondary-dark)]">{{ description }}</p>
        <p class="text-sm text-gray-500 dark:text-[var(--text-secondary-dark)]">Duração: {{ duration }}</p>
        <p class="text-sm text-green-600 dark:text-[var(--text-highlight)]">Prêmio: {{ award }} pontos</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  </style>