<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: 'pageTitle'
  }
})

const openModal = ref(false);

const toggleModal = () => openModal.value = !openModal.value;

</script>

<template>
  <NavigationMenu/>
  <main class="bg-[var(--main-bg)] dark:bg-[var(--main-bg-dark)] w-auto flex justify-center pt-24 overflow-y-scroll h-screen">
    <div class=" h-fit bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg-dark)] p-4 rounded-2xl">
      <div class="h-fit w-full flex justify-between p-4">
        <h1 class="text-3xl dark:text-[var(--text-dark)]">{{title}}</h1>
<!--        <v-tooltip>-->
<!--          <template #activator="{ props }">-->
<!--            <v-btn-->
<!--                v-bind="props"-->
<!--                class="text-white"-->
<!--                size="small"-->
<!--                color="var(&#45;&#45;text-highlight)"-->
<!--                @click="toggleModal()"-->
<!--                icon="mdi-plus"-->
<!--            />-->
<!--          </template>-->
<!--          <span>Adicionar Tarefa</span>-->
<!--        </v-tooltip>-->
      </div>
      <div class="w-auto border-t-2 border-gray-600 dark:border-[var(--text-highlight)] h-auto">
        <div class="m-2 w-auto p-4 grid grid-cols-3 gap-4">
          <slot :passedOpenModal="openModal"></slot>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>