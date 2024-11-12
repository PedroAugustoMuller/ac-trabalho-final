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
    <div class="w-full h-auto mx-24 bg-white p-2 rounded-2xl">
      <h1 class="text-3xl">{{title}}</h1>
      <div class="w-auto border-t-2 border-gray-600 dark:border-[#0f0] h-auto">
        <div class="m-2 p-4 bg-purple-400 h-auto">
          <slot></slot>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>