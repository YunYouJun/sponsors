<script setup lang="ts">
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

    <div class="m-4">
      <img class="rounded w-50" m="auto y-2" src="/images/work-weixin-sponsors-qr.png" alt="赞助者群">
      <small>赞助者微信群</small>
    </div>
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
