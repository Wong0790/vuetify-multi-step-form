<script lang="ts" setup>
import { Plan } from "@/types/steps";
import { useAppStore } from "@/store/app";

defineProps<{
  option: Plan;
  selected: boolean;
}>();

const main = useAppStore();
</script>

<template>
  <v-card
    hover
    :variant="selected ? 'flat' : 'outlined'"
    :color="selected ? '#F8F9FF' : '#D6D9E6'"
    :class="selected ? 'card-selected' : ''"
    @click="main.selectedPlan = option.id"
  >
    <template #prepend>
      <v-avatar class="mt-3">
        <slot />
      </v-avatar>
    </template>
    <v-card-item :class="!main.monthly ? 'pb-0' : ''">
      <v-card-title class="card-title">{{ option.title }}</v-card-title>
      <v-card-subtitle class="card-subtitle">{{
        main.monthly ? `$${option.priceMonth}/mo` : `$${option.priceYear}/yr`
      }}</v-card-subtitle>
    </v-card-item>
    <v-card-text v-if="!main.monthly" class="text-denim"
      >2 months free</v-card-text
    >
  </v-card>
</template>
