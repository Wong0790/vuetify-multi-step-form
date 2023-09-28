<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import { Step } from "@/types/steps";

defineProps<{
  step: Step;
}>();

const main = useAppStore();
</script>

<template>
  <div class="step-wrapper">
    <div
      class="step-number"
      :class="main.step === step.id ? 'step-number-active' : ''"
    >
      {{ step.id }}
    </div>
    <div class="step-info-wrapper">
      <span>Step {{ step.id }}</span>
      <h6>{{ step.title }}</h6>
    </div>
  </div>
</template>
