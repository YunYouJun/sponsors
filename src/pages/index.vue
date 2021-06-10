<template>
  <base-header msg="Sponsors" />
  <donate-qrcode />

  <el-tabs type="card" style="max-width: 1000px;margin:0 auto">
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

  <p class="mt-5">{{ t('acknowledgement') }}</p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
