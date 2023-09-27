<script lang="ts" setup>
import { Step } from "@/types/steps";

defineProps<{
  step: Step;
}>();
</script>

<template>
  <div class="step-wrapper">
    <div class="step-number">{{ step.id }}</div>
    <div class="step-info-wrapper">
      <span>Step {{ step.id }}</span>
      <h6>{{ step.title }}</h6>
    </div>
  </div>
</template>
