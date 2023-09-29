<script lang="ts" setup>
import { Addon } from "@/types/steps";
import { useAppStore } from "@/store/app";
import { addons } from "@/data/stepsData";

const props = defineProps<{
  id: number;
}>();

const main = useAppStore();

const addon: Addon = addons.filter((a: Addon) => a.id === props.id)[0];
</script>

<template>
  <div class="addon-order-wrapper">
    <h5>{{ addon.title }}</h5>
    <span>{{
      main.monthly ? `+$${addon.priceMonth}/mo` : `+$${addon.priceYear}/yr`
    }}</span>
  </div>
</template>
