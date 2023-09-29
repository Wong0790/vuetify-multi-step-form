<script lang="ts" setup>
import { Addon } from "@/types/steps";
import { useAppStore } from "@/store/app";

defineProps<{
  addon: Addon;
  selected: boolean;
}>();

const main = useAppStore();
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
            v-model="main.addonsSelected"
            :value="addon.id"
            hide-details
            color="#483EFF"
          ></v-checkbox>
          <div>
            <p class="addon-card-title">{{ addon.title }}</p>
            <p class="addon-card-subtitle">{{ addon.subtitle }}</p>
          </div>
        </div>

        <p class="card-text">
          {{
            main.monthly
              ? `+$${addon.priceMonth}/mo`
              : `+$${addon.priceYear}/yr`
          }}
        </p>
      </div>
    </v-card-item>
  </v-card>
</template>
