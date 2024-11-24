<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
import {Primitive} from "radix-vue";

const {scene} = await useGLTF('models/source/goblin.gltf', {draco: true})

onMounted(()=> console.log(teste))

</script>

<template>
  <primitive :object="scene"/>
</template>

<style scoped>

</style>