<script lang="ts" setup></script>

<template>
  <div class="form-wrapper">
    <h1>Finishing up</h1>
    <h6>Double-check everything looks OK before confirming.</h6>
    <div class="finishing-card">
      <div class="finishing-card-item">
        <div class="finishing-card-title-wrapper">
          <h5 class="finishing-card-title">Arcade (Monthly)</h5>
          <v-btn variant="text" class="change-btn text-none">Change</v-btn>
        </div>
        <span class="price-span">$9/mo</span>
      </div>
      <div class="addons-summary-wrapper">
        <div class="addon-order-wrapper">
          <h5>Online service</h5>
          <span>+$1/mo</span>
        </div>
        <div class="addon-order-wrapper">
          <h5>Larger storage</h5>
          <span>+$2/mo</span>
        </div>
      </div>
    </div>
    <div class="total-wrapper">
      <div class="addon-order-wrapper">
        <h5>Total (per month)</h5>
        <h6 class="total-price-span">+$12/mo</h6>
      </div>
    </div>
    <div class="btns-wrapper mt-20">
      <Footer :first="false" :confirm="true">Confirm</Footer>
    </div>
  </div>
</template>
