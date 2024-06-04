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
        <!-- @TODO -->
        <li>QQ群：<a href="https://qm.qq.com/cgi-bin/qm/qr?k=r-b3949w12L0wGiAmhUWibg3epW1Suik&jump_from=webapi&authKey=nhLrI7D8toe4Ph3LtcQ1l4dtYtUg7RzexTunnf9gI5vvDftcuhg4za+xBH+EiJfh" target="_blank">1050458482</a></li>
      </ul>
      <!-- <img class="w-50 rounded" m="auto y-2" src="https://www.yunle.fun/images/yunlefun-user-wechat-group.jpg" alt="微信群"> -->
      <!-- <small>微信群</small> -->
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
