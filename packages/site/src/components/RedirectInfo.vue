<script setup lang="ts">
import { onMounted } from 'vue'

const sponsorsUrl = 'https://www.yunyoujun.cn/sponsors/'

onMounted(() => {
  setTimeout(() => {
    window.location.href = sponsorsUrl
  }, 1000)
})
</script>

<template>
  <div class="my-20 h-40 items-center justify-center text-xl post-card" flex="~ wrap" gap="4">
    <span font="bold">
      正在重定向至
    </span>
    <a class="text-blue-500 underline" :href="sponsorsUrl" target="_blank">
      {{ sponsorsUrl }}
    </a>
  </div>
</template>
