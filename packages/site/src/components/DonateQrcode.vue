<script setup lang="ts">
import { donateMethod } from '~/assets/donate'
import { methodMap, methods } from '~/config'
</script>

<template>
  <div class="flex justify-center">
    <div v-for="key in methods" :key="key" class="inline-flex flex-col" :title="methodMap[key].title" :style="`--logo-color: ${methodMap[key].color}`">
      <div class="sponsor-method-icon m-auto" :class="[methodMap[key].icon]" text="2xl" :title="methodMap[key].title" />

      <a class="qrcode-img-container mx-6 inline-flex lt-sm:mx-2" :href="donateMethod[key].url" :title="donateMethod[key].title" target="_blank">
        <img class="fade-in qrcode-img shadow-md" :style="`--qrcode-border-color: ${methodMap[key].color}`" :src="donateMethod[key].url" :alt="donateMethod[key].title">
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.qrcode-img {
  --qrcode-img-size: 220px;
  width: var(--qrcode-img-size);
  aspect-ratio: 1;

  max-width: 24vw;
  // avoid blink when img is loading
  max-height: 24vw;

  padding: 6px;
  border: 2px dashed var(--qrcode-border-color, #eee);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0.5rem auto;
  border-radius: 8px;
  transition: transform 0.4s;

  &:hover {
    transform: scale(1.4);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
}

.sponsor-method-icon {
  color: var(--logo-color);
}
</style>
