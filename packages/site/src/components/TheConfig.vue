<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { toggleDark } from '../composables'

const { t, availableLocales, locale } = useI18n()
function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <a class="mx-1 icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" />
  </a>

  <a class="mx-1 icon-btn" :class="locale === 'en' ? 'rotate-y-180' : ''" :title="t('button.toggle_langs')" @click="toggleLocales">
    <div i-ri-translate />
  </a>
</template>
