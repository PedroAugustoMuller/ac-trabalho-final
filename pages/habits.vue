<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import HabitoCard from "~/components/Habito/HabitoCard.vue";
import type {Habit} from "~/types/Habit";
import {useHabits} from "~/store/Modules/Habit";
import NewHabitoCard from "~/components/Habito/NewHabitoCard.vue";

useHead({
  title: "Habit",
});

const habitsStore = useHabits();
const showFormHabitoModal = ref<Boolean>(false);
const habits = ref<Array<Habit>>([]);
const selectedHabito = ref<Habit | null>(null);
const showErrorModal = ref<Boolean>(false);
const errorMessage = ref<string>('');


const toggleFormHabitoModal = () => showFormHabitoModal.value = !showFormHabitoModal.value;
const toggleErrorModal = () => showErrorModal.value = !showErrorModal.value

const fetchHabits = async () => habits.value = await habitsStore.fetchHabits();

function handleOpenHabitoModal(habito: Habit | null) {
  selectedHabito.value = habito;
  toggleFormHabitoModal();
}

function handleError(error: Error) {
  showFormHabitoModal.value = false;
  errorMessage.value = error.message;
  toggleErrorModal();
}

onMounted(fetchHabits);

</script>

<template>
  <DefaultLayout title="Habits">
    <HabitoCard
        v-for="(habito, index) in habits"
        :key="index"
        :habit="habito"
        @atualizou="fetchHabits"
        @open-habito-modal="(habito) => handleOpenHabitoModal(habito)"
    />
    <HabitoModal
        v-if="showFormHabitoModal"
        :habito="selectedHabito"
        @close="toggleFormHabitoModal"
        @atualizou="fetchHabits"
        @erro="(error: Error) => handleError(error)"
    />
    <NewHabitoCard @open-habito-modal="(habito) => handleOpenHabitoModal(habito)"/>
  </DefaultLayout>
</template>