<script lang="ts" setup>
import { useAppStore } from "@/store/app";

const main = useAppStore();
</script>

<template>
  <v-col cols="12" class="option-plan-wrapper">
    <span :class="main.planOption === '0' ? 'text-denim' : 'text-grey'"
      >Monthly</span
    >
    <div class="switch-wrapper">
      <v-switch
        v-model="main.planOption"
        color="#022959"
        inset
        value="0"
        hide-details
        density="compact"
        inline
        true-value="1"
        false-value="0"
      ></v-switch>
    </div>
    <span :class="main.planOption === '1' ? 'text-denim' : 'text-grey'"
      >Yearly</span
    >
  </v-col>
</template>
