<template>
  <donate-qrcode />
  <br>

  <div class="post-card">
    <h2 m="t-2" text="xl purple-500" font="bold">
      <a class="flex justify-center items-center" href="https://github.com/sponsors/YunYouJun" target="_blank">
        <div i-ri-github-line m="x-1" /> Become a Sponsor in GitHub
      </a>
    </h2>
    <embed w="full" m="auto" :src="config.githubSponsors.url" type="image/svg+xml">

    <blockquote class="inline-flex justify-center items-center flex-col">
      更多内容见
      <router-link class="inline-flex justify-center items-center cursor-pointer text-purple-500" to="/account">
        <div i-ri-money-cny-box-line inline-flex mx-1 /> <span>账簿</span>
      </router-link>
    </blockquote>
  </div>

  <p class="mt-5">
    {{ t("acknowledgement") }}
  </p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { config } from '~/config'

const { t } = useI18n()
</script>
