<script setup lang="ts">
import {TresCanvas} from "@tresjs/core";
import {OrbitControls} from "@tresjs/cientos";
import Goblin from "~/components/Enemies/Goblin.vue";
import Dragon from "~/components/Enemies/Dragon.vue";
import Ghasklle from "~/components/Enemies/Ghasklle.vue";
import Marshadow from "~/components/Enemies/Marshadow.vue";
import Pitlord from "~/components/Enemies/Pitlord.vue";
import Wendigo from "~/components/Enemies/Wendigo.vue";
import WitchItems from "~/components/Enemies/WitchItems.vue";

const enemieRef = shallowRef()

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
      <template v-if="difficulty == 1">
        <TresPerspectiveCamera :position="[0, 1, 3]"/>
        <Suspense>
          <Goblin/>
        </Suspense>
      </template>
      <template v-if="difficulty == 3">
        <TresPerspectiveCamera :position="[4, 2, 6]"/>
        <Suspense>
          <Dragon/>
        </Suspense>
      </template>
      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight
          :intensity="2"
          :position="[-3, 3, 3]"
      />
    </TresCanvas>
</template>