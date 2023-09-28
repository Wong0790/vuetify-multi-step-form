<script lang="ts" setup>
import { ref, computed } from "vue";
import { Plan } from "@/types/steps";
import { month, year } from "@/data/stepsData";
import OptionPlan from "@/components/cards/OptionPlan.vue";

const valid = ref<boolean>(true);
const optionSelected = ref<string>("0");
const optionsMonth: Plan[] = month;
const optionsYear: Plan[] = year;
const options = computed(() =>
  optionSelected.value === "0" ? optionsMonth : optionsYear
);
</script>
<template>
  <div class="form-wrapper">
    <h1>Select your plan</h1>
    <h6>You have the option of monthly or yearly billing.</h6>
    <v-form v-model="valid" class="mt-8">
      <v-container class="pl-0">
        <v-row>
          <v-col cols="12" lg="4" v-for="option in options" :key="option.id">
            <OptionPlan :option="option" :selected="option.selected"
              ><component :is="option.icon"
            /></OptionPlan>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="option-plan-wrapper">
            <span :class="optionSelected === '0' ? 'text-denim' : 'text-grey'"
              >Monthly</span
            >
            <div class="switch-wrapper">
              <v-switch
                v-model="optionSelected"
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
            <span :class="optionSelected === '1' ? 'text-denim' : 'text-grey'"
              >Yearly</span
            >
          </v-col>
          <v-col cols="12" class="btns-wrapper">
            <div class="w-full flex items-center justify-between">
              <v-btn
                variant="text"
                color="#9699AA"
                size="x-large"
                class="text-none px-0"
                >Go Back</v-btn
              >
              <v-btn
                variant="flat"
                color="#164A8A"
                size="x-large"
                class="text-none"
                >Next Step</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
