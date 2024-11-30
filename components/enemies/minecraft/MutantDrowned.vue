<script setup lang="ts">
import { useGLTF } from "@tresjs/cientos";
import {AnimationMixer, Clock} from "three";

const { scene, animations } = await useGLTF("models/enemies/minecraft/mutant-drowned/source/mutant-drowned.gltf", { draco: true });

let mixer : AnimationMixer;
const clock = new Clock();

onMounted(() => {
  if (animations.length > 0) {
    mixer = new AnimationMixer(scene);

    const action = mixer.clipAction(animations[0]);
    action.play();
  }

  animate();
});

function animate() {
  requestAnimationFrame(animate);

  if (mixer) {
    mixer.update(clock.getDelta());
  }
}
</script>

<template>
  <TresPerspectiveCamera :position="[2, 1, 6]"/>
  <primitive :object="scene"
             :rotation="[0, Math.PI, 0]"
             :position="[0, -1, 0]"
  />
</template>

<style scoped>

</style>