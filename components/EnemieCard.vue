<script setup lang="ts">
import {TresCanvas} from "@tresjs/core";
import {OrbitControls} from "@tresjs/cientos";

const enemieRef = shallowRef()

const props = {
  difficulty:{
    type: Number,
    required: false,
    default: 0
  }
}

</script>

<template>
    <TresCanvas render-mode="on-demand">
      <TresPerspectiveCamera :args="[75,1,0.1,1000]" :position="[3,1,4]" :look-at="[0,0,0]"/>
      <OrbitControls/>
      <TresMesh ref="enemieRef">
        <TresTorusGeometry :args="[1, 0.4, 32,32]"/>
        <TresMeshToonMaterial color="pink"/>
      </TresMesh>
      <TresAmbientLight/>
      <TresDirectionalLight/>
    </TresCanvas>
</template>