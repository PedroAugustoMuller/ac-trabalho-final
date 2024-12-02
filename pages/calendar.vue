<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";

useHead({
  title: 'Calendar',
})
</script>

<template>
  <DefaultLayout
      title="Calendar"
      :grid="false"
  >
    <nuxt-img
        style="width: 800px"
        src="images/Calendar.png"
    ></nuxt-img>
  </DefaultLayout>
</template>

<style scoped>

</style>