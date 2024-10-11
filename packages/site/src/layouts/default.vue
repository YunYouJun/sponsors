<script setup lang="ts">
import { isDark } from '~/composables'

const lightBgImageUrl = 'https://cos.yunyoujun.cn/img/bg/stars-timing-0-blur-30px.jpg'
const darkBgImageUrl = ''

const mainStyle = computed(() => {
  return {
    backgroundImage: `url('${isDark.value ? darkBgImageUrl : lightBgImageUrl}')`,
  }
})
</script>

<template>
  <main
    class="min-h-screen p-4 text-center text-gray-700 dark:text-gray-200"
    bg="cover center no-repeat fixed"
    :style="mainStyle"
  >
    <BaseMenu />
    <router-view />
    <BaseFooter />
  </main>
</template>
