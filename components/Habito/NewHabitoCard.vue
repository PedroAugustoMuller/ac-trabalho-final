<script setup lang="ts">

</script>

<template>
  <div class="w-80 bg-[var(--main-bg)] dark:bg-[var(--main-bg-dark)] rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
    <v-btn
        class="text-white"
        color="var(--text-highlight)"
        large
        @click="$emit('openHabitoModal',null)"
        icon="mdi-plus"
    />
  </div>
</template>