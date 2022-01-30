<template>
  <div>
    <img class="w-50 m-auto" src="https://cdn.jsdelivr.net/gh/YunYouJun/yun/images/meme/yun-good-alpha-compressed.png" alt="小云觉得你很棒棒" />
  </div>
  <router-link to="/projects">
    <a
      class="inline-block mb-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)"
    >{{ t('message.projects') }}</a>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
const { t } = useI18n()
</script>
