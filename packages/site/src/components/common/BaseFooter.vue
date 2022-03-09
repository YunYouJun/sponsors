<template>
  <vue-about-me :is-dark="isDark" :copyright="copyright" />
</template>

<script lang="ts" setup>
import VueAboutMe from 'vue-about-me'
import 'vue-about-me/style.css'
import { isDark } from '~/composables'

const copyright = ref({
  name: 'Sponsors',
  repo: 'sponsors',
  author: 'YunYouJun',
})
</script>
