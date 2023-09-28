<script lang="ts" setup>
defineProps<{
  first: boolean;
}>();
</script>

<template>
  <div
    class="w-full flex items-center"
    :class="first ? 'justify-end' : 'justify-between'"
  >
    <v-btn
      variant="text"
      color="#9699AA"
      size="x-large"
      class="text-none px-0"
      v-if="!first"
      >Go Back</v-btn
    >
    <v-btn variant="flat" color="#164A8A" size="x-large" class="text-none"
      >Next Step</v-btn
    >
  </div>
</template>
