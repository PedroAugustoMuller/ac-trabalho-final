<script setup lang="ts">

</script>

<template>
  <div class="w-80 border-2 rounded-2xl items-center flex flex-col p-2 shadow-lg dark:bg-[var(--card-bg-dark)] dark:border-[var(--main-bg-dark)]">
    <div class="w-64 h-64 justify-center m-auto flex items-center">
      <div class="bg-[var(--text-highlight)] m-0 pb-6 text-white rounded-full text-8xl h-20 w-20 flex items-center justify-center" @click="$emit('openTarefaModal',null)">
        <button>
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>