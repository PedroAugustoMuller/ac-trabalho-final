<script setup lang="ts">
useHead({
  title: 'The tools'
})
import DefaultLayout from "~/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout
      title="The tools"
      :grid="false"
  >
    <nuxt-img
        style="width: 800px"
        src="images/mocktools.png"
    ></nuxt-img>
  </DefaultLayout>
</template>

<style scoped>

</style>