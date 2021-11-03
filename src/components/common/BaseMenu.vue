<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'
import pkg from '../../../package.json'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <i-carbon-home />
    </router-link>

    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark">
      <i-carbon-moon v-if="isDark" />
      <i-carbon-sun v-else />
    </a>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <i-carbon-language />
    </a>

    <router-link class="icon-btn mx-2" to="/projects" :title="t('button.projects')">
      <i-mdi-projector-screen-outline />
    </router-link>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <i-carbon-dicom-overlay />
    </router-link>

    <a
      class="icon-btn mx-2"
      rel="noreferrer"
      :href="pkg.repository.url"
      target="_blank"
      title="GitHub"
    >
      <i-carbon-logo-github />
    </a>
  </nav>
</template>
