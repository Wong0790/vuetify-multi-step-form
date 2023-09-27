<script lang="ts" setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import DefaultView from "./View.vue";
import { Step } from "@/types/steps";

const { width } = useDisplay();

const stepsList = ref<Step[]>([
  {
    id: 1,
    title: "Your info",
  },
  {
    id: 2,
    title: "Select plan",
  },
  {
    id: 3,
    title: "Add-ons",
  },
  {
    id: 4,
    title: "Summary",
  },
]);
</script>

<template>
  <div class="body-wrapper">
    <div class="sidebar-mobile">
      <div class="cell-steps-numbers-wrapper">
        <StepButtonMobile
          v-for="step in stepsList"
          :key="step.id"
          :id="step.id"
        />
      </div>
    </div>

    <div
      class="setps-wrapper mt-20"
      :class="width < 1024 ? 'setps-wrapper-cell' : ''"
    >
      <div class="sidebar-desktop">
        <div class="desktop-steps-numbers-wrapper">
          <StepButtonDesktop
            v-for="step in stepsList"
            :key="step.id"
            :step="step"
          />
        </div>
      </div>
      <div>
        <default-view />
      </div>
    </div>
    <div class="floating-next-step-btn-wrapper">
      <v-btn variant="flat" color="#164A8A" size="x-large" class="text-none"
        >Next Step</v-btn
      >
    </div>
  </div>
</template>
