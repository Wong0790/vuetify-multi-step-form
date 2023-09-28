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
    <template v-slot:title>
      <div
        class="flex"
        :class="option.type === 'year' ? 'items-start' : 'items-center'"
      >
        <v-avatar :class="option.type === 'year' ? 'mt-1' : 'mt-0'">
          <slot />
        </v-avatar>
        <div class="ml-[14px]">
          <v-card-title class="card-title">{{ option.title }}</v-card-title>
          <v-card-subtitle class="card-subtitle">{{
            option.subtitle
          }}</v-card-subtitle>
          <p v-if="option.type === 'year'" class="mobile-card-p">
            2 months free
          </p>
        </div>
      </div>
    </template>
  </v-card>
</template>
