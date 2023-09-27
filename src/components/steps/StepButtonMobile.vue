<script lang="ts" setup>
defineProps<{
  id: number;
}>();
</script>
<template>
  <div class="step-number">{{ id }}</div>
</template>
