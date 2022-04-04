<script setup lang="ts">
import { isDark } from '~/composables'

const lightBgImageUrl = 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/bg/stars-timing-0-blur-30px.jpg'
const darkBgImageUrl = ''

const mainStyle = computed(() => {
  return {
    backgroundImage: `url('${isDark.value ? darkBgImageUrl : lightBgImageUrl}')`,
  }
})
</script>

<template>
  <main
    class="p-4 text-center text-gray-700 dark:text-gray-200 min-h-screen"
    bg="cover center no-repeat fixed"
    :style="mainStyle"
  >
    <BaseMenu />
    <router-view />
    <BaseFooter />
  </main>
</template>
