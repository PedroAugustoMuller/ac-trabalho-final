<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NewTarefaCard from "@/components/Tarefa/NewTarefaCard.vue";
import type {Tarefa} from "@/types/Tarefa";
import { useTarefa } from "@/store/Modules/Tarefa";
const tarefaStore = useTarefa();

useHead({
  title: 'Dashboard',
})

const tarefas: Array<Tarefa> = await tarefaStore.fetchTarefa();

function handleOpenTarefaModal(tarefa: Tarefa){
  console.log(tarefa)
}
</script>

<template>
  <DefaultLayout
  title="Dashboard"
  >
              <TarefaCard
                v-for="(tarefa, index) in tarefas"
                :key="index"
                :tarefa="tarefa"
                :title="tarefa.title"
                :description="tarefa.description"
                :date="tarefa.date"
                :situacao="tarefa.situacao"
                :difficulty="tarefa.difficulty"
                @open-tarefa-modal="handleOpenTarefaModal(tarefa)"
              />
              <NewTarefaCard
                @open-tarefa-modal="(tarefa) => handleOpenTarefaModal(tarefa)"
              />
  </DefaultLayout>
</template>