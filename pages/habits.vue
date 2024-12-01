<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import HabitoCard from "~/components/Habito/HabitoCard.vue";
import type {Habit} from "~/types/Habit";
import {useHabits} from "~/store/Modules/Habit";

const habitsStore = useHabits();

useHead({
  title: "Habit",
});

const habits = ref<Array<Habit>>( await habitsStore.fetchHabits());
</script>

<template>
  <DefaultLayout title="Habits">
        <HabitoCard
          v-for="(habito, index) in habits"
          :key="index"
          :title="habito.title"
          :description="habito.description"
          :duration="habito.duration"
          :award="habito.award"
        />
  </DefaultLayout>
</template>