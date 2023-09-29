import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PersonalInfo } from "@/types/steps";
import { plans, addons } from "@/data/stepsData";

export const useAppStore = defineStore("app", () => {
  const step = ref<number>(1);

  const firstStep = ref<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const planOption = ref<string>("0");

  const selectedPlan = ref<number>(1);

  const addonsSelected = ref<number[]>([]);

  const followingStep = computed(() => step.value + 1);

  const plan = computed(() => plans.find((p) => p.id === selectedPlan.value)!);

  const monthly = computed(() => planOption.value === "0");

  const planPrice = computed(() =>
    monthly.value ? plan.value?.priceMonth : plan.value?.priceYear
  );

  const total = computed(() => {
    let result = planPrice.value;
    addonsSelected.value.forEach((x) => {
      const addon = addons.find((a) => a.id === x)!;
      result += monthly.value ? addon.priceMonth : addon.priceYear;
    });
    return result;
  });

  function $reset() {
    step.value = 1;
  }

  function nextStep(id: number) {
    step.value = id;
  }

  function goBack() {
    step.value = step.value - 1;
  }

  return {
    step,
    firstStep,
    planOption,
    selectedPlan,
    addonsSelected,
    plan,
    monthly,
    planPrice,
    followingStep,
    total,
    $reset,
    nextStep,
    goBack,
  };
});
