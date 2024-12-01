<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'pageTitle'
  }
})
</script>

<template>
  <NavigationMenu/>
  <main class="bg-[var(--main-bg)] dark:bg-[var(--main-bg-dark)] w-auto flex justify-center pt-24 overflow-y-scroll h-screen">
    <div class=" h-fit bg-white dark:bg-[var(--secondary-bg-dark)] p-4 rounded-2xl">
      <h1 class="text-3xl dark:text-[var(--text-dark)]">{{title}}</h1>
      <div class="w-auto border-t-2 border-gray-600 dark:border-[var(--text-highlight)] h-auto">
        <div class="m-2 w-auto p-4 grid grid-cols-3 gap-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>