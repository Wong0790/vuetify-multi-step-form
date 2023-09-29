<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { plans } from "@/data/stepsData";
import { useAppStore } from "@/store/app";
import OptionPlanDesktop from "@/components/cards/OptionPlanDesktop.vue";
import OptionPlanMobile from "@/components/cards/OptionPlanMobile.vue";
import PlanSwitch from "@/components/cards/PlanSwitch.vue";

const { width } = useDisplay();

const main = useAppStore();
</script>

<template>
  <div class="form-wrapper">
    <h1>Select your plan</h1>
    <h6>You have the option of monthly or yearly billing.</h6>
    <v-form class="mt-8">
      <v-container class="px-0">
        <v-row>
          <v-col cols="12" lg="4" v-for="plan in plans" :key="plan.id">
            <component
              :is="width < 1024 ? OptionPlanMobile : OptionPlanDesktop"
              :option="plan"
              :selected="main.selectedPlan === plan.id"
              ><component :is="plan.icon"
            /></component>
          </v-col>
        </v-row>
        <v-row>
          <PlanSwitch />
        </v-row>
      </v-container>
    </v-form>
    <div class="btns-wrapper">
      <Footer :first="false" :confirm="false" />
    </div>
  </div>
</template>
