<script lang="ts" setup>
import { addons } from "@/data/stepsData";
import { useAppStore } from "@/store/app";
import AddonsOption from "@/components/cards/AddonsOption.vue";

const main = useAppStore();
</script>

<template>
  <div class="form-wrapper">
    <h1>Pick add-ons</h1>
    <h2>Add-ons help enhance your gaming experience.</h2>
    <v-form class="mt-8">
      <v-container class="pl-0">
        <v-row>
          <v-col cols="12" v-for="addon in addons" :key="addon.id" class="pr-0"
            ><AddonsOption
              :selected="main.addonsSelected.filter((x: number) => x === addon.id).length > 0"
              :addon="addon"
          /></v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="btns-wrapper">
      <Footer :first="false" :confirm="false" />
    </div>
  </div>
</template>
