<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";

useHead({
  title: 'Dashboard',
})

const provas = [
  {
    title: 'testeTitulo',
    description: 'testeDescricao',
    date: '2019-02-01',
    enemie: 'dragao'
  }
]


</script>

<template>
  <DefaultLayout
  title="Dashboard"
  >
              <ProvaCard
                v-for="(prova, index) in provas"
                :key="index"
                :title="prova.title"
                :description="prova.description"
                :date="prova.date"
                :enemie="prova.enemie"
              />
  </DefaultLayout>
</template>

<style scoped>

</style>