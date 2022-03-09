<template>
  <donate-qrcode />
  <br>

  <div
    class="block m-auto max-w-1000px shadow rounded transition"
    bg="white dark:dark-700"
    p="4"
    hover="shadow-lg"
  >
    <h2 m="t-2" text="xl purple-500" font="bold">
      <a class="flex justify-center items-center" href="https://github.com/sponsors/YunYouJun" target="_blank">
        <div i-ri-github-line m="x-1" /> Become a Sponsor in GitHub
      </a>
    </h2>
    <embed w="full" m="auto" :src="config.githubSponsors.url" type="image/svg+xml">
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
