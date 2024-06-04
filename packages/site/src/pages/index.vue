<script setup lang="ts">
import SponsorSvg from '../../../../public/sponsors.svg?raw'

const { t } = useI18n()
</script>

<template>
  <donate-qrcode />
  <br>

  <div class="post-card">
    <h2 m="t-2" text="xl purple-500" font="bold">
      <a class="flex items-center justify-center" href="https://github.com/sponsors/YunYouJun" target="_blank">
        <div i-ri-github-line m="x-1" /> Become a Sponsor in GitHub
      </a>
    </h2>
    <!-- <SponsorSvg /> -->
    <!-- component missing of viewbox -->
    <div class="svg-container" v-html="SponsorSvg" />

    <div class="m-4">
      <ul>
        <li>QQ群：1050458482</li>
      </ul>
      <img class="w-50 rounded" m="auto y-2" src="https://www.yunle.fun/images/yunlefun-user-wechat-group.jpg" alt="微信群">
      <small>微信群</small>
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
