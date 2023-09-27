<script lang="ts" setup>
defineProps({
  step: Number,
  title: String,
});
</script>

<template>
  <div class="step-wrapper">
    <div class="step-number">{{ step }}</div>
    <div class="step-info-wrapper">
      <span>Step {{ step }}</span>
      <h6>{{ title }}</h6>
    </div>
  </div>
</template>
