<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";

useHead({
  title: 'Perfil',
})
</script>

<template>
  <DefaultLayout
      title="Perfil"
      :grid="false"
  >
    <nuxt-img
        style="width: 800px"
        src="images/mockperfil.png"
    ></nuxt-img>
  </DefaultLayout>
</template>

<style scoped>

</style>