<script lang="ts" setup>
import { useAppStore } from "@/store/app";

defineProps<{
  first: boolean;
  confirm: boolean;
}>();

const main = useAppStore();
const { nextStep, goBack } = main;
</script>

<template>
  <div
    class="w-full lg:w-[509px] flex items-center"
    :class="first ? 'justify-end' : 'justify-between'"
  >
    <v-btn
      variant="text"
      color="#9699AA"
      size="x-large"
      class="text-none px-0"
      v-if="!first"
      @click="goBack"
      >Go Back</v-btn
    >
    <slot>
      <v-btn
        variant="flat"
        :color="!confirm ? '#164A8A' : '#483EFF'"
        size="x-large"
        class="text-none"
        @click="nextStep(main.followingStep)"
      >
        {{ !confirm ? "Next Step" : "Confirm" }}
      </v-btn>
    </slot>
  </div>
</template>
