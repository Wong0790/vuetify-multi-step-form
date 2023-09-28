<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import StepOne from "@/components/forms/StepOne.vue";
import StepTwo from "@/components/forms/StepTwo.vue";
import StepThree from "@/components/forms/StepThree.vue";
import StepFour from "@/components/forms/StepFour.vue";
import ThankYou from "@/components/forms/ThankYou.vue";

const main = useAppStore();
</script>

<template>
  <div>
    <StepOne v-show="main.step === 1" />
    <StepTwo v-show="main.step === 2" />
    <StepThree v-show="main.step === 3" />
    <StepFour v-show="main.step === 4" />
    <ThankYou v-show="main.step === 5" />
  </div>
</template>
