<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NewTarefaCard from "@/components/Tarefa/NewTarefaCard.vue";
import type {Tarefa} from "~/types/Tarefa/Tarefa";
import {useTarefa} from "@/store/Modules/Tarefa";

useHead({
  title: 'Dashboard',
})

const tarefaStore = useTarefa();

const tarefas = ref<Tarefa[]>([]);

const selectedTarefa = ref(<Tarefa | null>{})

const showTarefaFormModal = ref(false);

const showErrorModal = ref(<Boolean>false);

const errorMessage = ref(<string>'');

const passedOpenModal = ref(false);

const toggleTarefaFormModal = () => showTarefaFormModal.value = !showTarefaFormModal.value;

const toggleErrorModal = () => showErrorModal.value = !showErrorModal.value

async function fetchTarefas() {
  tarefas.value = await tarefaStore.fetchTarefa();
}

function handleOpenTarefaModal(tarefa: Tarefa | null) {
  selectedTarefa.value = tarefa;
  toggleTarefaFormModal()
}

async function atualizaPagina() {
  await fetchTarefas()
}

function handleError(error: Error) {
  errorMessage.value = error.message;
  toggleErrorModal();
}

watch(() => passedOpenModal.value, newValue => {
  console.log(newValue)
  if (newValue) {
    handleOpenTarefaModal(null);
  }
})

onMounted(fetchTarefas);
</script>

<template>
  <DefaultLayout
      title="Dashboard"
  >
    <template #default="{ passedOpenModal: modal }">
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
          @open-tarefa-modal="toggleTarefaFormModal"
      />
      <TarefaModal
          v-if="showTarefaFormModal"
          :tarefa="selectedTarefa"
          @close="toggleTarefaFormModal"
          @atualizou="atualizaPagina"
          @erro="(error: Error) => handleError(error)"
      />
      <!--    <ErroModal/>-->
    </template>
  </DefaultLayout>
</template>