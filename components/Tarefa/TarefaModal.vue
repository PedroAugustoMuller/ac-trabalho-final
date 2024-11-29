<script setup lang="ts">
import type {Tarefa} from "~/types/Tarefa";

const props = defineProps({
  tarefa: {
    type: Object as () => Tarefa,
    default: {},
  }
})
</script>

<template>
  <div class="modal-overlay"  @click.self="$emit('close')">
    <div class="spacer"></div>
    <div class="modal-box">
      <slot></slot>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<style scoped>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .spacer {
    flex-grow: 1;
  }

  .modal-box {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
    font-size: 1.25rem;
    line-height: 1.5;
    z-index: 1100;
    max-width: 90%;
    min-width: 70%;
  }

  .keyboard-spacing {
    height: 22rem;
    flex-shrink: 1;
  }
}
</style>