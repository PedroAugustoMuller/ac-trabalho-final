<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import HabitoCard from "~/components/Habito/HabitoCard.vue"; // Importando o componente

useHead({
  title: "Habits",
});

// Dados dos hábitos com todas as propriedades
const habitos = [
  {
    title: "Exercitar diariamente",
    description: "Fazer 30 minutos de exercícios físicos",
    duration: "30 dias",
    award: 10,
  },
  {
    title: "Beber mais água",
    description: "Beber 2 litros de água por dia",
    duration: "7 dias",
    award: 5,
  },
  {
    title: "Ler um livro",
    description: "Ler 20 páginas por dia",
    duration: "15 dias",
    award: 8,
  },
  {
    title: "Meditar",
    description: "Meditar por 15 minutos",
    duration: "10 dias",
    award: 6,
  },
  {
    title: "Estudar programação",
    description: "Estudar 1 hora de programação por dia",
    duration: "20 dias",
    award: 12,
  },
  {
    title: "Fazer refeições saudáveis",
    description: "Comer ao menos 3 refeições saudáveis por dia",
    duration: "15 dias",
    award: 7,
  },
  {
    title: "Dormir 8 horas",
    description: "Dormir pelo menos 8 horas por noite",
    duration: "30 dias",
    award: 15,
  },
  {
    title: "Caminhar",
    description: "Caminhar 30 minutos por dia",
    duration: "5 dias",
    award: 4,
  },
  {
    title: "Ler notícias",
    description: "Ler as principais notícias do dia",
    duration: "7 dias",
    award: 3,
  }
];
</script>

<template>
  <DefaultLayout title="Lista de Hábitos">
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold text-center mb-6">Meus Hábitos</h1>
      <!-- Aplique uma classe de fundo neutro ou remova o fundo -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <HabitoCard
          v-for="(habito, index) in habitos"
          :key="index"
          :title="habito.title"
          :description="habito.description"
          :duration="habito.duration"
          :award="habito.award"
        />
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.container {
  max-width: 1200px;
  background-color: white; /* Garantindo fundo branco */
}
</style>
