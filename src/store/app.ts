import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { PersonalInfo } from "@/types/steps";

export const useAppStore = defineStore("app", () => {
  const step = ref<number>(1);

  const firstStep = ref<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const followingStep = computed(() => step.value + 1);

  function $reset() {
    step.value = 1;
  }

  function nextStep(id: number) {
    step.value = id;
  }

  function goBack() {
    step.value = step.value - 1;
  }

  return { step, firstStep, followingStep, $reset, nextStep, goBack };
});
