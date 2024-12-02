<script setup lang="ts">
import type {Habit} from "~/types/Habit";
import {useHabits} from "~/store/Modules/Habit";

const habitoStore = useHabits()
const emit = defineEmits(['atualizou', 'close', 'erro'])


const props = defineProps({
  habito: {
    type: Object as () => Habit | null,
    default: null,
  }
})

const placeholderHabit = ref<Habit>(<Habit>{})

watch(() => props.habito, (newHabit) => {
      placeholderHabit.value = newHabit !== null
          ? {...newHabit}
          : {
            id: -1,
            title: '',
            description: '',
            duration: 0,
            checked: false,
          }
    },
    {
      immediate: true
    }
)

const loading = ref(false)
const formRef = ref(null)
const isFormValid = ref(false)

const rules = {
  obrigatorio: (v: string) => !!v || 'Obrigatório preencher o campo',
  isSliderValid: (v: number ) =>  (!isNaN(v) && v>=1 ) || "Selecione um valor válido",
}

async function saveHabit() {
  try {
    if (props.habito == null) {
      await habitoStore.createHabit(placeholderHabit.value)
      return
    }
    await habitoStore.editHabit(placeholderHabit.value)

  } catch (error) {
    emit('erro', error)
  } finally {
    emit('atualizou')
    emit('close')
  }
}

async function deleteHabito(id: number) {
  try {
    await habitoStore.deleteHabit(id)
  } catch (error) {
    emit('erro', error)
  } finally {
    emit('atualizou')
    emit('close')
  }
}

</script>

<template>
  <div class="bg-black/60 fixed inset-0 flex justify-center items-center z-30">
    <div
        class="bg-[var(--secondary-bg)] dark:bg-[var(--secondary-bg-dark)] rounded-lg p-8 text-center shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-lg leading-6 z-[31] w-1/3 flex flex-col items-center overflow-y-auto max-h-[90vh] relative">
      <button class="absolute top-4 right-4" @click="$emit('close')">
        <Icon name="material-symbols:close" class="text-[var(--text)] dark:text-[var(--text-dark)]"/>
      </button>
      <button v-if="habito != null" class="absolute top-4 left-4" @click="deleteHabito(placeholderHabit.id)">
        <v-tooltip>
          <template #activator="{ props }">
            <Icon
                v-bind="props"
                name="mdi-delete"
                class="text-[var(--text)] dark:text-[var(--text-dark)]"
            />
          </template>
          <span>Deletar Hábito</span>
        </v-tooltip>
      </button>
      <v-form
          :readonly="loading"
          v-model="isFormValid"
          ref="formRef"
          class="w-full"
          @submit.prevent="saveHabit"
      >
        <div
            class="items-start flex flex-col w-full pb-4"
        >
          <v-text-field
              label="Título do Hábito"
              placeholder="Insira o título do hábito"
              v-model="placeholderHabit.title"
              :rules="[rules.obrigatorio]"
              color="var(--text-highlight)"
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              variant="outlined"
              :readonly="loading"
          />
          <v-text-field
              label="Descrição do Hábito"
              placeholder="Insira a descrição do Hábito"
              v-model="placeholderHabit.description"
              :rules="[rules.obrigatorio]"
              color="var(--text-highlight)"
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              variant="outlined"
              :readonly="loading"
          />
            <v-slider
                label="Selecione a duração do hábito no mês"
                class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
                min="1"
                :rules="[rules.isSliderValid]"
                v-model="placeholderHabit.duration"
                max="30"
                step="1"
                :thumb-label="true"
            ></v-slider>
        </div>
        <v-btn
            :disabled="!isFormValid"
            :loading="loading"
            size="large"
            type="submite"
            class="text-[var(--text)] dark:text-[var(--text-dark)]"
            color="var(--text-highlight)"
            rounded
            text="Salva Tarefa"
        />
      </v-form>
    </div>
  </div>
</template>