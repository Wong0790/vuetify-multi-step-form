<script lang="ts" setup>
import { useDisplay } from "vuetify";
import DefaultView from "./View.vue";
import SidebarMobile from "@/components/svg/SidebarMobile.vue";

const { width } = useDisplay();
</script>

<template>
  <div class="body-wrapper">
    <SidebarMobile class="sidebar-mobile" />
    <div class="cell-steps-numbers-wrapper">
      <div class="step-number">1</div>
      <div class="step-number">2</div>
      <div class="step-number">3</div>
      <div class="step-number">4</div>
    </div>
    <div
      class="setps-wrapper"
      :class="width < 1024 ? 'setps-wrapper-cell' : ''"
    >
      <div class="sidebar-desktop">
        <div class="desktop-steps-numbers-wrapper">
          <div class="step-wrapper">
            <div class="step-number">1</div>
            <div class="step-info-wrapper">
              <span>Step 1</span>
              <h6>Your info</h6>
            </div>
          </div>
          <div class="step-wrapper">
            <div class="step-number">2</div>
            <div class="step-info-wrapper">
              <span>Step 2</span>
              <h6>Select plan</h6>
            </div>
          </div>
          <div class="step-wrapper">
            <div class="step-number">3</div>
            <div class="step-info-wrapper">
              <span>Step 3</span>
              <h6>Add-ons</h6>
            </div>
          </div>
          <div class="step-wrapper">
            <div class="step-number">4</div>
            <div class="step-info-wrapper">
              <span>Step 4</span>
              <h6>Summary</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <default-view />
      </div>
    </div>
  </div>
</template>
