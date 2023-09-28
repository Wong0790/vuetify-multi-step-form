<script lang="ts" setup>
import { useAppStore } from "@/store/app";

defineProps<{
  id: number;
}>();

const main = useAppStore();
</script>
<template>
  <div
    class="step-number"
    :class="main.step === id ? 'step-number-active' : ''"
  >
    {{ id }}
  </div>
</template>
