<script lang="ts" setup>
import { ref } from 'vue'
import { VueAboutMe } from 'vue-about-me'
import { isDark } from '../../composables'
import 'vue-about-me/style.css'

const copyright = ref({
  name: 'Sponsors',
  repo: 'sponsors',
  author: 'YunYouJun',
  authorUrl: 'https://www.yunyoujun.cn',
})
</script>

<template>
  <VueAboutMe :is-dark="isDark" :copyright="copyright" />
</template>
