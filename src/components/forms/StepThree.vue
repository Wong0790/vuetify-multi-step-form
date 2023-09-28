<script lang="ts" setup>
import { ref } from "vue";
import { addons } from "@/data/stepsData";
import AddonsOption from "@/components/cards/AddonsOption.vue";

const valid = ref<boolean>(true);
</script>

<template>
  <div class="form-wrapper">
    <h1>Pick add-ons</h1>
    <h6>Add-ons help enhance your gaming experience.</h6>
    <v-form v-model="valid" class="mt-8">
      <v-container class="pl-0">
        <v-row>
          <v-col cols="12" v-for="addon in addons" :key="addon.id" class="pr-0"
            ><AddonsOption :selected="true" :addon="addon"
          /></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="btns-wrapper">
            <Footer :first="false" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
