<script setup lang="ts">
import { toggleDark } from '~/composables'
import pkg from '../../../package.json'

const { t, availableLocales, locale } = useI18n()
function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="mb-4 mt-6 text-xl">
    <router-link class="mx-1 icon-btn" to="/" :title="t('button.home')">
      <div i-carbon-home />
    </router-link>

    <router-link class="mx-1 icon-btn" to="/account" title="账单">
      <div i-ri-money-cny-box-line />
    </router-link>

    <a class="mx-1 icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </a>

    <a class="mx-1 icon-btn" :class="locale === 'en' ? 'rotate-y-180' : ''" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-ri-translate />
    </a>

    <router-link class="mx-1 icon-btn" to="/projects" :title="t('button.projects')">
      <div i-mdi-projector-screen-outline />
    </router-link>

    <router-link class="mx-1 icon-btn" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </router-link>

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
