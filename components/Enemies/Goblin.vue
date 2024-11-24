<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";

const {scene} = await useGLTF('models/goblin/source/goblin.gltf', {draco: true})

</script>

<template>
  <primitive :object="scene"
             :rotation="[0, Math.PI, 0]"
             :position="[0, -.4, 0]"
  />
</template>

<style scoped>

</style>