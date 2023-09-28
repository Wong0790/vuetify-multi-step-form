<script lang="ts" setup>
import { Plan } from "@/types/steps";

defineProps<{
  option: Plan;
  selected: boolean;
}>();
</script>

<template>
  <v-card
    :variant="selected ? 'flat' : 'outlined'"
    :color="selected ? '#F8F9FF' : '#D6D9E6'"
    hover
    :class="selected ? 'card-selected' : ''"
  >
    <template #prepend>
      <v-avatar color="#FFAF7E" class="mt-3">
        <slot><ArcadeIcon /></slot>
      </v-avatar>
    </template>
    <v-card-item :class="option.type === 'year' ? 'pb-0' : ''">
      <v-card-title class="card-title">{{ option.title }}</v-card-title>
      <v-card-subtitle class="card-subtitle">{{
        option.subtitle
      }}</v-card-subtitle>
    </v-card-item>
    <v-card-text v-if="option.type === 'year'" class="text-denim"
      >2 months free</v-card-text
    >
  </v-card>
</template>
