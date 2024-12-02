<script setup lang="ts">

</script>

<template>
  <div class="w-80 border-2 rounded-2xl items-center flex flex-col p-2 shadow-lg dark:bg-[var(--card-bg-dark)] dark:border-[var(--main-bg-dark)]">
    <div class="w-64 h-64 justify-center m-auto flex items-center">
        <v-btn
            class="text-white"
            color="var(--text-highlight)"
            large
            @click="$emit('openTarefaModal')"
        icon="mdi-plus"
        />
    </div>
  </div>
</template>

<style scoped>

</style>