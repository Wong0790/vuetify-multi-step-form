<script lang="ts" setup>
import { ref } from "vue";
import { PersonalInfo } from "@/types/steps";

const valid = ref<boolean>(true);
const form = ref<PersonalInfo>({
  name: "",
  email: "",
  phone: "",
});
</script>

<template>
  <div class="form-wrapper">
    <h1>Personal info</h1>
    <h6>Please provide your name, email address, and phone number.</h6>
    <v-form v-model="valid">
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
              hide-details
              base-color="#D6D9E6"
              color="#483EFF"
              class="text-denim"
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
              hide-details
              base-color="#D6D9E6"
              color="#483EFF"
              class="text-denim"
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
              hide-details
              base-color="#D6D9E6"
              color="#483EFF"
              class="text-denim"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="next-step-btn-wrapper">
            <v-btn
              variant="flat"
              color="#164A8A"
              size="x-large"
              class="text-none"
              >Next Step</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
