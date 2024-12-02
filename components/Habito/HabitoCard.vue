<script setup lang="ts">
import type {Habit} from "~/types/Habit";
import {useHabits} from "~/store/Modules/Habit";

const emit = defineEmits(['erro', 'atualizou', 'close', 'openHabitoModal'])

const props = defineProps({
  habit: {
    type: Object as () => Habit,
    default: {},
  }
});

const habitStore = useHabits()
const placeholderHabit = ref<Habit>(<Habit>{})

watch(() => props.habit, (newHabit) => {
  placeholderHabit.value = newHabit
      ? { ...newHabit }
      : {
        id: -1,
        title: '',
        description: '',
        duration: 0,
        checked: false,
      };
}, { immediate: true });

async function deleteHabit() {
  try {
    await habitStore.deleteHabit(props.habit.id)
  } catch (error) {
    emit('erro', error)
  } finally {
    emit('atualizou')
    emit('close')
  }
}

async function updateHabit() {
  try {
    await habitStore.editHabit({...placeholderHabit.value})
  } catch (error) {
    emit('erro', error)
  } finally {
    emit('atualizou')
  }
}

</script>

<template>
  <div
      class="w-80 bg-[var(--main-bg)] dark:bg-[var(--main-bg-dark)] rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex items-center relative">
    <button class="absolute z-10 top-2 right-2" @click="$emit('openHabitoModal',habit)">
      <v-tooltip>
        <template #activator="{ props }">
          <Icon
              v-bind="props"
              name="uil:edit"
              class="text-[var(--text)] dark:text-[var(--text-dark)]"
          />
        </template>
        <span>Editar Tarefa</span>
      </v-tooltip>
    </button>
    <button class="absolute z-10 top-2 left-2" @click="deleteHabit()">
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
    <v-checkbox
        class="pr-2 dark:text-[var(--text-dark)]"
        v-model="placeholderHabit.checked"
        @change="updateHabit"
    />
    <div>
      <h3 class="text-xl font-bold dark:text-[var(--text-dark)]">{{ habit.title }}</h3>
      <p class="text-gray-600 dark:text-[var(--text-secondary-dark)]">{{ habit.description }}</p>
      <p class="text-sm text-gray-500 dark:text-[var(--text-secondary-dark)]">Duração: {{ habit.duration }} Dias no
        mês</p>
    </div>
  </div>
</template>

<style scoped>

</style>