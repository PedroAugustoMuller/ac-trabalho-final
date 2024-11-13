<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import { TresCanvas } from "@tresjs/core";
import EnemieCard from "~/components/EnemieCard.vue";

useHead({
  title: 'Dashboard',
})

const tarefas = [
  {
    title: 'Prova de Matemática',
    description: 'Conteúdos: Trigonometria e Retas',
    date: '2019-02-01',
    situacao: 0,
    difficulty: 'very-hard'
  },
  {
    title: 'Trabalho de Português',
    description: 'Pesquisa sobre Dom Casmurro',
    date: '2019-02-01',
    situacao: 1,
    difficulty: 'medium'
  },
  {
    title: 'Seminário de História',
    description: 'Apresentações sobre iluminismo',
    date: '2019-02-01',
    situacao: 2,
    difficulty: 'easy'
  },
  {
    title: 'Relatório da Bolsa',
    description: 'Escrever um relatório sobre todas as atividades descorridas entre janeiro e junho',
    date: '2019-02-01',
    situacao: 2,
    difficulty: 'hard'
  },
]


</script>

<template>
  <DefaultLayout
  title="Dashboard"
  >
              <ProvaCard
                v-for="(tarefa, index) in tarefas"
                :key="index"
                :title="tarefa.title"
                :description="tarefa.description"
                :date="tarefa.date"
                :situacao="tarefa.situacao"
                :difficulty="tarefa.difficulty"
              />
  </DefaultLayout>
</template>

<style scoped>

</style>