<script lang="ts" setup>
import { ref } from "vue";
import { Addon } from "@/types/steps";

defineProps<{
  addon: Addon;
  selected: boolean;
}>();

const addonSelected = ref<number[]>([1, 2]);
</script>

<template>
  <v-card
    density="compact"
    :variant="selected ? 'flat' : 'outlined'"
    :color="selected ? '#F8F9FF' : '#D6D9E6'"
    :class="selected ? 'card-selected' : ''"
  >
    <v-card-item class="pl-0">
      <div class="addon-card-wrapper">
        <div class="first-section">
          <v-checkbox
            v-model="addonSelected"
            :value="addon.id"
            hide-details
            color="#483EFF"
          ></v-checkbox>
          <div>
            <p class="addon-card-title">{{ addon.title }}</p>
            <p class="addon-card-subtitle">{{ addon.subtitle }}</p>
          </div>
        </div>

        <p class="card-text">{{ addon.priceMonth }}</p>
      </div>
    </v-card-item>
  </v-card>
</template>
