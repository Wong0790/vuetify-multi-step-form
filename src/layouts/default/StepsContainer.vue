<script lang="ts" setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { useDisplay } from "vuetify";
import DefaultView from "./View.vue";
import { Step } from "@/types/steps";
import { steps } from "@/data/stepsData";
import bus from "vue3-eventbus";

const main = useAppStore();

const { width, height } = useDisplay();

const stepsList = ref<Step[]>(steps);
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
    <div
      :class="
        height <= 760
          ? 'bottom-next-step-btn-wrapper'
          : 'floating-next-step-btn-wrapper'
      "
      v-show="main.step < 5"
    >
      <Footer :first="main.step === 1" :confirm="main.step === 4">
        <v-btn
          variant="flat"
          color="#164A8A"
          size="x-large"
          class="text-none"
          @click.prevent.stop="bus.emit('submit')"
        >
          Next Step
        </v-btn>
      </Footer>
    </div>
  </div>
</template>
