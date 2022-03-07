<template>
  <base-header msg="Sponsors" />
  <donate-qrcode />

  <div
    class="block m-auto max-w-1000px shadow rounded transition"
    bg="white"
    p="5"
    hover="shadow-lg"
  >
    <h2 text="xl purple-500" font="bold">
      <a class="flex justify-center items-center" href="https://github.com/sponsors/YunYouJun" target="_blank">
        <i-ri-github-line  m="x-1" /> Become a Sponsor in GitHub
      </a>
    </h2>
    <embed m="auto" :src="config.githubSponsors.url" type="image/svg+xml" />

    <el-tabs type="card">
      <el-tab-pane label="经济赞助">
        <sponsors-list />
      </el-tab-pane>
      <el-tab-pane label="其他赞助">
        <other-sponsors />
      </el-tab-pane>
      <el-tab-pane label="当前支出">
        <expense-table />
      </el-tab-pane>
    </el-tabs>
  </div>

  <p class="mt-5">{{ t("acknowledgement") }}</p>
</template>

<script setup lang="ts">
import { config } from '~/config'
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
