<script lang="ts" setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
import { Plan } from "@/types/steps";
import { month, year } from "@/data/stepsData";
import OptionPlanDesktop from "@/components/cards/OptionPlanDesktop.vue";
import OptionPlanMobile from "@/components/cards/OptionPlanMobile.vue";

const { width } = useDisplay();

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
      <v-container class="px-0">
        <v-row>
          <v-col cols="12" lg="4" v-for="option in options" :key="option.id">
            <component
              :is="width < 1024 ? OptionPlanMobile : OptionPlanDesktop"
              :option="option"
              :selected="option.selected"
              ><component :is="option.icon"
            /></component>
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
        </v-row>
      </v-container>
    </v-form>
    <div class="btns-wrapper">
      <Footer :first="false" :confirm="false" />
    </div>
  </div>
</template>
