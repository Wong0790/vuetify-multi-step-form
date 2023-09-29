o
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
    <template v-slot:title>
      <div class="flex" :class="!main.monthly ? 'items-start' : 'items-center'">
        <v-avatar :class="!main.monthly ? 'mt-1' : 'mt-0'">
          <slot />
        </v-avatar>
        <div class="ml-[14px]">
          <v-card-title class="card-title">{{ option.title }}</v-card-title>
          <v-card-subtitle class="card-subtitle">{{
            main.monthly
              ? `$${option.priceMonth}/mo`
              : `$${option.priceYear}/yr`
          }}</v-card-subtitle>
          <p v-if="!main.monthly" class="mobile-card-p">2 months free</p>
        </div>
      </div>
    </template>
  </v-card>
</template>
