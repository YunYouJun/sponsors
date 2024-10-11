<script setup lang="ts">
defineProps<{ msg: string }>()
const { t } = useI18n()
</script>

<template>
  <div class="relative flex flex-col animate-fade-in animate-duration-1000 animate-iteration-1 items-center justify-center">
    <img class="fade-in xiao-yun-q z-2 m-auto inline-flex" src="https://cdn.jsdelivr.net/gh/YunYouJun/yun/images/meme/yun-good-alpha-compressed.png" alt="小云觉得你很棒棒">
    <p class="absolute bottom-0">
      我很可爱，请给我钱！
    </p>
  </div>
  <a href="https://yunyoujun.cn/projects/" target="_blank">
    <div
      font="semibold"
      m="b-2"
      p="x-4 y-1"
      border="~ purple-300"
      class="inline-block items-center justify-center rounded-full text-sm text-purple-600 hover:(border-transparent bg-purple-600 text-white) dark:(text-purple-300) focus:(outline-none ring-2 ring-offset-2 ring-purple-600)"
    >{{ t('message.projects') }}</div>
  </a>
</template>

<style>
.xiao-yun-q {
  width: 200px;
  aspect-ratio: 1;
}
</style>
