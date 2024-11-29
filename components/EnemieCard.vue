<script setup lang="ts">
import {TresCanvas} from "@tresjs/core";
import {OrbitControls} from "@tresjs/cientos";
import Goblin from "~/components/enemies/minecraft/Goblin.vue";
import Dragon from "~/components/enemies/minecraft/Dragon.vue";
import Barbarian from "~/components/enemies/minecraft/Barbarian.vue";
import MutantDrowned from "~/components/enemies/minecraft/MutantDrowned.vue";

const props = defineProps({
  difficulty: {
    type: Number,
    required: true,
    default: 1
  }
})

</script>

<template>
  <TresCanvas render-mode="on-demand">
    <OrbitControls/>
    <template v-if="difficulty == 0">
      <Suspense>
        <Goblin/>
      </Suspense>
    </template>
    <template v-if="difficulty == 1">
      <Suspense>
        <Barbarian/>
      </Suspense>
    </template>
    <template v-if="difficulty == 2">
      <Suspense>
        <MutantDrowned/>
      </Suspense>
    </template>
    <template v-if="difficulty == 3">
      <Suspense>
        <Dragon/>
      </Suspense>
    </template>
    <TresAmbientLight :intensity="1"/>
    <TresDirectionalLight
        :intensity="2"
        :position="[-3, 3, 3]"
    />
  </TresCanvas>
</template>