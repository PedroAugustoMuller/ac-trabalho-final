<script setup lang="ts">
import {TresCanvas} from "@tresjs/core";
import {OrbitControls} from "@tresjs/cientos";
import Goblin from "~/components/enemies/minecraft/Goblin.vue";
import Dragon from "~/components/enemies/minecraft/Dragon.vue";
import NetheriteGolem from "~/components/enemies/minecraft/NetheriteGolem.vue";
import Barbarian from "~/components/enemies/minecraft/Barbarian.vue";

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
        <NetheriteGolem/>
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