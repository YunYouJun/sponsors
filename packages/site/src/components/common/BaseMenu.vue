<script setup lang="ts">
import pkg from '../../../package.json'
</script>

<template>
  <nav class="mb-4 mt-6 text-xl">
    <a
      class="mx-1 icon-btn"
      rel="noreferrer"
      :href="pkg.repository.url"
      target="_blank"
      title="GitHub"
    >
      <div i-ri-github-line />
    </a>
  </nav>
</template>

<style lang="scss">
.icon-btn.router-link-active {
  color: var(--c-primary);
}
</style>
