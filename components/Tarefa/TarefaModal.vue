<script setup lang="ts">
import type {Tarefa} from "~/types/Tarefa/Tarefa"
import type {SubTarefa} from "~/types/Tarefa/SubTarefa"
import {useTarefa} from "~/store/Modules/Tarefa"

const tarefaStore = useTarefa()
const emit = defineEmits(['atualizou', 'close', 'erro'])


const props = defineProps({
  tarefa: {
    type: Object as () => Tarefa | null,
    default: null,
  }
})

const placeholderTarefa = ref<Tarefa>(<Tarefa>{})

watch(() => props.tarefa, (newTarefa) => {
      placeholderTarefa.value = newTarefa !== null
          ? {...newTarefa}
          : {
            id: -1,
            title: "",
            description: "",
            date: "",
            subTarefas: [],
            difficulty: 0,
          }
    },
    {immediate: true}
)

const loading = ref(false)
const formRef = ref(null)
const isFormValid = ref(false)

const difficulties = [
  {
    title: 'Fácil', value: 0
  },
  {
    title: 'Médio', value: 1
  },
  {
    title: 'Difícil', value: 2
  },
  {
    title: 'Muito Difícil', value: 3
  },
]

const subTarefasMinimumLength = computed(() => placeholderTarefa.value.subTarefas.length >= 3)

const rules = {
  obrigatorio: (v: string) => !!v || 'Obrigatório preencher o campo',
  dificuldadeValida: (value: number) => difficulties.some((d) => d.value === value) ? true : "Selecione uma dificuldade válida",
  subTarefasIsValid: () => subTarefasMinimumLength ? true : 'Crie no mínimo 3 sub tarefas',
}

const taskEnemie = computed(() => placeholderTarefa.value.difficulty !== undefined ? placeholderTarefa.value.difficulty : 0)

function addSubTarefa() {
  if (!placeholderTarefa.value.subTarefas) {
    placeholderTarefa.value.subTarefas = [{id: 0, description: '', status: false}]
    return;
  }
  let novaSubTarefa: SubTarefa = {id: 0, description: '', status: false}

  const maxId = placeholderTarefa.value.subTarefas.reduce((max, t) => (t.id > max ? t.id : max), 0)
  novaSubTarefa.id = maxId + 1

  placeholderTarefa.value.subTarefas.push(novaSubTarefa)
}

function removeSubTarefa(id: number) {
  placeholderTarefa.value.subTarefas = placeholderTarefa.value.subTarefas.filter((subTask) => subTask.id !== id)
}

async function saveTarefa() {
  try {
    if (props.tarefa == null) {
      await tarefaStore.createTarefa(placeholderTarefa.value)
      return
    }
    await tarefaStore.editTarefa(placeholderTarefa.value)

  } catch (error) {
    emit('erro', error)
  } finally {
    emit('atualizou')
    emit('close')
  }
}

async function deleteTarefa(id: number) {
  try {
    await tarefaStore.deleteTarefa(id)
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
      <button v-if="tarefa != null" class="absolute top-4 left-4" @click="deleteTarefa(placeholderTarefa.id)">
        <v-tooltip>
          <template #activator="{ props }">
            <Icon
              v-bind="props"
              name="mdi-delete"
              class="text-[var(--text)] dark:text-[var(--text-dark)]"
            />
          </template>
          <span>Deletar Tarefa</span>
        </v-tooltip>
      </button>
      <div class="w-40 h-40">
        <EnemieCard
            :key="taskEnemie"
            :difficulty="taskEnemie"
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
            class="items-start flex flex-col w-full pb-4"
        >
          <v-text-field
              label="Título da tarefa"
              placeholder="Insira o título da tarefa"
              v-model="placeholderTarefa.title"
              :rules="[rules.obrigatorio]"
              color="var(--text-highlight)"
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              variant="outlined"
              :readonly="loading"
          />
          <v-text-field
              label="Descrição Tarefa"
              placeholder="Insira a descrição da tarefa"
              v-model="placeholderTarefa.description"
              :rules="[rules.obrigatorio]"
              color="var(--text-highlight)"
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              variant="outlined"
              :readonly="loading"
          />
          <v-select
              label="Dificuldade"
              :items="difficulties"
              v-model="placeholderTarefa.difficulty"
              :rules="[rules.dificuldadeValida]"
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              color="var(--text-highlight)"
              variant="outlined"
              :readonly="loading"
          />
          <v-text-field
              type="date"
              label="Data de Entrega"
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              prepend-icon=""
              v-model="placeholderTarefa.date"
              color="var(--text-highlight)"
              :rules="[rules.obrigatorio]"
              variant="outlined"
              widht="10"
              clearable
              :readonly="loading"
          />
          <h3 class="text-[var(--text)] dark:text-[var(--text-dark)]">Sub Tarefas ( Min: 3 sub tarefas )</h3>
          <v-text-field
              class="w-full text-[var(--text)] dark:text-[var(--text-dark)]"
              v-for="subTask in placeholderTarefa.subTarefas"
              :key="subTask.id"
              v-model="subTask.description"
              label="Título"
              :rules="[rules.obrigatorio, rules.subTarefasIsValid]"
              dense
              outlined
              :prepend-icon="subTask.status ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'"
              @click:prepend="subTask.status = !subTask.status"
              append-icon="mdi-delete"
              @click:append="removeSubTarefa(subTask.id)"
          />
          <v-btn
              color="var(--text-highlight)"
              @click="addSubTarefa"
              prepend-icon="mdi-plus"
              class="text-[var(--text)] dark:text-[var(--text-dark)]"
              text="Adicionar sub Tarefa"
          />
        </div>
        <v-btn
            :disabled="!isFormValid || !subTarefasMinimumLength"
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