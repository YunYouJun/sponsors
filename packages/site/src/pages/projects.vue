<script setup lang="ts">
onMounted(() => {
  setTimeout(() => {
    window.location.href = 'https://www.yunyoujun.cn/projects/'
  }, 1000)
})
</script>

<template>
  <div class="my-40 items-center justify-center text-xl" flex="~ wrap" gap="4">
    <span font="bold">
      正在重定向至
    </span>
    <a class="text-blue-500 underline" href="https://www.yunyoujun.cn/projects/" target="_blank">
      https://www.yunyoujun.cn/projects/
    </a>
  </div>
</template>
