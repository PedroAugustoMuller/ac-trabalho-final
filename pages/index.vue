<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NewTarefaCard from "@/components/Tarefa/NewTarefaCard.vue";
import type {Tarefa} from "~/types/Tarefa/Tarefa";
import {useTarefa} from "@/store/Modules/Tarefa";
import type {Habit} from "~/types/Habit";

useHead({
  title: 'Dashboard',
})

const tarefaStore = useTarefa();

const tarefas = ref<Tarefa[]>([]);

const showFormTarefaModal = ref(<Boolean>false);

const selectedTarefa = ref(<Tarefa | null>{})

const showErrorModal = ref(<Boolean>false);

const errorMessage = ref(<string>'');

const toggleFormTarefaModal = () => showFormTarefaModal.value = !showFormTarefaModal.value;

const toggleErrorModal = () => showErrorModal.value = !showErrorModal.value

async function fetchTarefas() {
  tarefas.value = await tarefaStore.fetchTarefa();
}

function handleOpenTarefaModal(tarefa: Tarefa | null) {
  selectedTarefa.value = tarefa;
  toggleFormTarefaModal()
}

async function atualizaPagina() {
  await fetchTarefas()
}

function handleError(error: Error) {
  showFormTarefaModal.value = false;
  errorMessage.value = error.message;
  toggleErrorModal();
}

onMounted(fetchTarefas);
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
        :difficulty="tarefa.difficulty"
        @open-tarefa-modal="handleOpenTarefaModal(tarefa)"
        @atualizou="atualizaPagina"
        @erro="(error: Error) => handleError(error)"
    />
    <NewTarefaCard
        @open-tarefa-modal="(tarefa) => handleOpenTarefaModal(tarefa)"
    />
    <TarefaModal
        v-if="showFormTarefaModal"
        :tarefa="selectedTarefa"
        @close="toggleFormTarefaModal"
        @atualizou="atualizaPagina"
        @erro="(error: Error) => handleError(error)"
    />
    <!--    <ErroModal/>-->
  </DefaultLayout>
</template>