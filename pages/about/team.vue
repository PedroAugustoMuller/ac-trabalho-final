<script setup lang="ts">
useHead({
  title: 'The team'
})
import DefaultLayout from "~/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout
      title="The team"
      :grid="false"
  >
    <nuxt-img
        style="width: 800px"
        src="images/theteammock.png"
    ></nuxt-img>
  </DefaultLayout>
</template>

<style scoped>

</style>