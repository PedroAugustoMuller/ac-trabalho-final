<script setup lang="ts">
import type {Tarefa} from "~/types/Tarefa";

const props = defineProps({
  tarefa: {
    type: Object as () => Tarefa | null,
    default: {},
  }
})

const placeholderTarefa = ref(props.tarefa !== null ? props.tarefa : {});

const loading = ref(false);
const formRef = ref(null);
const isFormValid = ref(false);
const showDatePicker = ref(false);

const toggleShowDatePicker = () => showDatePicker.value = !showDatePicker.value

const rules = {
  obrigatorio: (v: String) => !!v || 'Obrigatório preencher o campo',
}
function saveTarefa(): void {

}

onMounted(()=> console.log(props.tarefa))
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="spacer" @click="$emit('close')">X</div>
    <div class="modal-box">
      <div
        class="w-40 h-40"
      >
        <EnemieCard
            :difficulty="placeholderTarefa.difficulty !== undefined ? placeholderTarefa.difficulty : 0"
        />
      </div>
      <v-form
          :readonly="loading"
          v-model="isFormValid"
          ref="formRef"
          class="w-full"
          @submit.prevent="saveTarefa"
      >
        <div
          class="items-start flex flex-col w-full"
        >
          <v-text-field
              label="Título da tarefa"
              placeholder="Insira o título da tarefa"
              v-model="placeholderTarefa.title"
              :rules="[rules.obrigatorio]"
              color="var(--text-highlight)"
              class="w-full"
          />
          <v-text-field
              label="Descrição Tarefa"
              placeholder="Insira a descrição da tarefa"
              v-model="placeholderTarefa.description"
              :rules="[rules.obrigatorio]"
              color="var(--text-highlight)"
              class="w-full"
          />
          <v-select
              label="Dificuldade"
              class="w-full"
          />
          <v-date-input
            label="Data de Entrega"
          />
        </div>
        <v-btn
          :disable="!isFormValid"
          :loading="loading"
          size="large"
          type="submite"
          color="var(--text-highlight)"
          rounded
          text="Salva Tarefa"
        />
      </v-form>
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>