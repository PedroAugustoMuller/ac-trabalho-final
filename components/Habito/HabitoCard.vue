<script setup lang="ts">
const propsCard = defineProps({
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
    <!-- Adiciona o efeito de hover com transição suave -->
    <div class="w-80 bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
      <p class="text-sm text-gray-500">Duração: {{ duration }}</p>
      <p class="text-sm text-green-600">Prêmio: {{ award }} pontos</p>
    </div>
  </template>
  
  <style scoped>
  /* Aqui podemos adicionar estilos extras, mas o hover é gerenciado pelas classes do Tailwind */
  </style>