<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SponsorSvg from '../../../../public/sponsors.svg?raw'

const { t } = useI18n()
</script>

<template>
  <donate-qrcode />
  <br>

  <div class="post-card">
    <h2 m="t-2" text="xl purple-500" font="bold">
      <a class="flex justify-center items-center" href="https://github.com/sponsors/YunYouJun" target="_blank">
        <div i-ri-github-line m="x-1" /> Become a Sponsor in GitHub
      </a>
    </h2>
    <!-- <SponsorSvg /> -->
    <!-- component missing of viewbox -->
    <div class="svg-container" v-html="SponsorSvg" />

    <blockquote class="inline-flex justify-center items-center flex-col">
      <router-link class="inline-flex justify-center items-center cursor-pointer text-purple-500" to="/account">
        <div i-ri-money-cny-box-line inline-flex mx-1 />
        <span>{{ t('title.account') }}</span>
      </router-link>
    </blockquote>
  </div>

  <p class="mt-5">
    {{ t("acknowledgement") }}
  </p>
</template>

<style lang="scss">
.svg-container {
  // width: 100%;
  svg {
    height: auto;
  }
}
</style>
