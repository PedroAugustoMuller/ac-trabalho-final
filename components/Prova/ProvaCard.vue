<script setup lang="ts">
import EnemieCard from "~/components/EnemieCard.vue";

const props = defineProps({
  title: {
    type: String,
    default: 'prova',
  },
  description: {
    type: String,
    default: 'descricao',
  },
  date: {
    type: String,
    default: '12/11/2024',
  },
  situacao: {
    type: Number,
    default: 0,
  },
  difficulty: {
    type: String,
    default: 'dragon'
  }
})

const estados = ['Pendente','Em andamento', 'Concluida'];

</script>

<template>
<div class="w-80 border-2 rounded-2xl items-center flex flex-col p-2 shadow-lg">
  <div class="w-64 border-b h-64 justify-center m-auto">
    <EnemieCard
      :difficulty="difficulty"
    />
  </div>
  <main>
    <h1 class="text-black">🎯{{title}}</h1>
    <p class="text-gray-700">{{description}}</p>
    <p class="text-gray-700">{{date}}</p>
    <p class="text-black">{{estados[situacao]}}</p>
  </main>
</div>
</template>

<style scoped>

</style>