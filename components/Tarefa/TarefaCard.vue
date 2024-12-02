<script setup lang="ts">
import EnemieCard from "@/components/EnemieCard.vue";
import type {Tarefa} from "~/types/Tarefa/Tarefa.ts";
import {useTarefa} from "~/store/Modules/Tarefa";

const tarefaStore = useTarefa()

const emit = defineEmits(['atualizou', 'close', 'erro','openTarefaModal'])

const props = defineProps({
  tarefa: {
    type: Object as () => Tarefa,
    default: {},
  }
})

const estados = ['Pendente','Em andamento', 'Concluida'];
const dificuldades = ['Facil','Médio','Difícil','Muito Difícil']

async function deleteTarefa(id: number) {
  try {
    await tarefaStore.deleteTarefa(id)
  } catch (error) {
    emit('erro', error)
  } finally {
    emit('atualizou')
    emit('close')
  }
}

</script>

<template>
<div class="w-80 border-2 rounded-2xl items-center flex flex-col p-2 shadow-lg dark:bg-[var(--card-bg-dark)] dark:border-[var(--main-bg-dark)]" @dblclick="$emit('openTarefaModal',tarefa)">
  <div class="w-64 border-b h-64 justify-center m-auto relative">
    <button class="absolute z-10 top-2 right-2" @click="$emit('openTarefaModal',tarefa)">
      <v-tooltip>
        <template #activator="{ props }">
          <Icon
              v-bind="props"
              name="uil:edit"
              class="text-[var(--text)] dark:text-[var(--text-dark)]"
          />
        </template>
        <span>Editar Tarefa</span>
      </v-tooltip>

    </button>
    <button class="absolute z-10 top-2 left-2" @click="deleteTarefa(tarefa.id)">
      <v-tooltip>
        <template #activator="{ props }">
          <Icon
              v-bind="props"
              name="mdi-delete"
              class="text-[var(--text)] dark:text-[var(--text-dark)]"
          />
        </template>
        <span>Deletar Tarefa</span>
      </v-tooltip>
    </button>
    <EnemieCard
      :key="tarefa.difficulty"
      :difficulty="tarefa.difficulty"
    />
  </div>
  <main class="flex flex-col text-center">
    <h1 class="text-[var(--text)] dark:text-[var(--text-dark)]">🎯{{tarefa.title}}</h1>
    <p class="text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)]">{{tarefa.description}}</p>
    <p class="text-[var(--text-secondary)] dark:text-[var(--text-secondary-dark)]">{{tarefa.date}}</p>
    <p class="text-[var(--text)] dark:text-[var(--text-dark)]">{{estados[tarefa.situacao]}}</p>
    <p class="text-[var(--text)] dark:text-[var(--text-dark)]">{{dificuldades[tarefa.difficulty]}}</p>
  </main>
</div>
</template>

<style scoped>

</style>