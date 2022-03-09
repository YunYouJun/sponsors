<template>
  <div>
    <img class="w-50 m-auto" src="https://cdn.jsdelivr.net/gh/YunYouJun/yun/images/meme/yun-good-alpha-compressed.png" alt="小云觉得你很棒棒">
  </div>
  <router-link to="/projects">
    <a
      font="semibold"
      m="b-2"
      p="x-4 y-1"
      border="~ purple-300"
      class="inline-block justify-center items-center rounded-full text-sm text-purple-600 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2) dark:(text-purple-300)"
    >{{ t('message.projects') }}</a>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
const { t } = useI18n()
</script>
