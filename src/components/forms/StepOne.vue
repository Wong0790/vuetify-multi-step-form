<script lang="ts" setup>
import { ref } from "vue";
import { PersonalInfo } from "@/types/steps";
import { useAppStore } from "@/store/app";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import bus from "vue3-eventbus";

const main = useAppStore();
const { nextStep } = main;
const form = ref<PersonalInfo>(main.firstStep);

const rules = {
  name: { required },
  email: { required, email },
  phone: { required },
};

const v$ = useVuelidate(rules, form);

bus.on("submit", () => {
  submit();
});

const submit = async () => {
  if (await v$.value.$validate()) {
    nextStep(main.followingStep);
  }
};
</script>

<template>
  <div class="form-wrapper">
    <h1>Personal info</h1>
    <h6>Please provide your name, email address, and phone number.</h6>
    <v-form>
      <v-container class="pl-0">
        <v-row>
          <v-col cols="12">
            <label for="name">Name</label>
            <v-text-field
              id="name"
              v-model="form.name"
              variant="outlined"
              placeholder="e.g. Stephen King"
              required
              hide-details="auto"
              base-color="#D6D9E6"
              color="#483EFF"
              class="text-denim"
              error-color="succes"
              :error-messages="v$.name.$errors.map((e: any) => e.$message)"
              @input="v$.name.$touch"
              @blur="v$.name.$touch"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <label for="email">Email address</label>
            <v-text-field
              id="email"
              v-model="form.email"
              variant="outlined"
              placeholder="e.g. stephenking@lorem.com"
              required
              hide-details="auto"
              base-color="#D6D9E6"
              color="#483EFF"
              class="text-denim"
              :error-messages="v$.email.$errors.map((e: any) => e.$message)"
              @input="v$.email.$touch"
              @blur="v$.email.$touch"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <label for="phone">Phone number</label>
            <v-text-field
              id="phone"
              v-model="form.phone"
              variant="outlined"
              placeholder="e.g. +1 234 567 890"
              required
              hide-details="auto"
              base-color="#D6D9E6"
              color="#483EFF"
              class="text-denim"
              :error-messages="v$.phone.$errors.map((e: any) => e.$message)"
              @change="v$.phone.$touch"
              @blur="v$.phone.$touch"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="btns-wrapper">
      <Footer :first="true" :confirm="false">
        <v-btn
          variant="flat"
          color="#164A8A"
          size="x-large"
          class="text-none"
          @click.prevent.stop="submit"
        >
          Next Step
        </v-btn></Footer
      >
    </div>
  </div>
</template>
