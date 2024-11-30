<script setup lang="ts">
const props = defineProps<{
  name: string
  rounded?: boolean
}>()

const fontSize = computed(() => {
  const len = props.name.length
  if (len <= 3)
    return 56
  if (len <= 6)
    return 46
  if (len <= 8)
    return 36
  return 30
})
</script>

<template>
  <div
    class="sponsor-text-avatar size-64 inline-flex items-center justify-center bg-#e2e8f0 p-8 text-center"
    :class="{
      'rounded-full': props.rounded,
    }"
    :style="{
      fontSize: `${fontSize}px`,
    }"
  >
    {{ name }}
  </div>
</template>
