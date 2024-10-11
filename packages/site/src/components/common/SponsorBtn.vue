<script setup lang="ts">
</script>

<template>
  <div
    font="semibold"
    p="x-4 y-1"
    border="~ purple-300"
    bg="white/50 dark:black/20"
    text="lg"
    class="inline-flex items-center justify-center rounded-full text-purple-600 transition hover:(border-transparent bg-purple-600 text-white) dark:(text-purple-300) focus:(outline-none ring-2 ring-offset-2 ring-purple-600)"
  >
    <slot />
  </div>
</template>
