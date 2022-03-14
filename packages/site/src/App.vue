<script setup lang="ts">
import { useHead } from '@vueuse/head'
import pkg from '../package.json'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: pkg.description,
  meta: [
    { name: 'description', content: pkg.description },
  ],
})
</script>

<template>
  <router-view />
</template>
