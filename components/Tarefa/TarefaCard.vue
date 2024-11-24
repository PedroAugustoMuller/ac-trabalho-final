<script setup lang="ts">
import EnemieCard from "@/components/EnemieCard.vue";
import type {Tarefa} from "@/types/Tarefa.ts";

const props = defineProps({
  tarefa: {
    type: Object as () => Tarefa,
    default: {},
  }
})

const estados = ['Pendente','Em andamento', 'Concluida'];

</script>

<template>
<div class="w-80 border-2 rounded-2xl items-center flex flex-col p-2 shadow-lg dark:bg-[var(--card-bg-dark)] dark:border-[var(--main-bg-dark)]">
  <div class="w-64 border-b h-64 justify-center m-auto">
    <EnemieCard
      :difficulty="tarefa.difficulty"
    />
  </div>
  <main class="flex flex-col text-center">
    <h1 class="text-[var(--text)] dark:text-[var(--text-dark)]">🎯{{tarefa.title}}</h1>
    <p class="text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)]">{{tarefa.description}}</p>
    <p class="text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)]">{{tarefa.date}}</p>
    <p class="text-[var(--text)] dark:text-[var(--text-dark)]">{{estados[tarefa.situacao]}}</p>
  </main>
</div>
</template>

<style scoped>

</style>