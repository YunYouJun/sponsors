<script setup lang="ts">
const props = defineProps<{
  name: string
  rounded?: boolean
}>()

const fontSize = computed(() => {
  const len = props.name.length
  if (len <= 3)
    return 28
  if (len <= 6)
    return 23
  if (len <= 8)
    return 18
  return 15
})
</script>

<template>
  <div
    class="sponsor-text-avatar size-32 inline-flex items-center justify-center bg-#e2e8f0 p-4 text-center"
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
