<script lang="ts" setup>
import { computed } from "vue";
import { plans } from "@/data/stepsData";
import { Plan, PlanResult } from "@/types/steps";
import { useAppStore } from "@/store/app";
import AddonSummary from "@/components/cards/AddonSummary.vue";

const main = useAppStore();

const selectedPlan = computed<PlanResult>(() => {
  let result = {
    planName: "",
    planPrice: "",
  };
  const planOption = main.planOption === "0" ? "Monthly" : "Yearly";
  const plan = plans.find((p: Plan) => p.id === main.selectedPlan);
  if (plan) {
    result.planName = `${plan.title} (${planOption})`;
    result.planPrice = main.monthly
      ? `$${main.planPrice}/mo`
      : `$${main.planPrice}/yr`;
  }
  return result;
});
</script>

<template>
  <div class="form-wrapper">
    <h1>Finishing up</h1>
    <h2>Double-check everything looks OK before confirming.</h2>
    <div class="finishing-card">
      <div class="finishing-card-item">
        <div class="finishing-card-title-wrapper">
          <h3 class="finishing-card-title">{{ selectedPlan.planName }}</h3>
          <v-btn
            variant="text"
            class="change-btn text-none"
            @click="main.step = 2"
            >Change</v-btn
          >
        </div>
        <span class="price-span">{{ selectedPlan.planPrice }}</span>
      </div>
      <div class="addons-summary-wrapper">
        <AddonSummary v-for="id in main.addonsSelected" :key="id" :id="id" />
      </div>
    </div>
    <div class="total-wrapper">
      <div class="addon-order-wrapper">
        <h3>
          {{ main.monthly ? "Total (per month)" : "Total (per year)" }}
        </h3>
        <div class="total-price-span">
          {{ main.monthly ? `+$${main.total}/mo` : `+$${main.total}/yr` }}
        </div>
      </div>
    </div>
    <div class="btns-wrapper mt-20">
      <Footer :first="false" :confirm="true" />
    </div>
  </div>
</template>
