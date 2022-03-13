<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import pkg from '../../../package.json'
import { toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="text-xl mt-6 mb-4">
    <router-link class="icon-btn mx-1" to="/" :title="t('button.home')">
      <div i-carbon-home />
    </router-link>

    <router-link class="icon-btn mx-1" to="/account" title="账单">
      <div i-ri-money-cny-box-line />
    </router-link>

    <a class="icon-btn mx-1" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </a>

    <a class="icon-btn mx-1" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-carbon-language />
    </a>

    <router-link class="icon-btn mx-1" to="/projects" :title="t('button.projects')">
      <div i-mdi-projector-screen-outline />
    </router-link>

    <router-link class="icon-btn mx-1" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </router-link>

    <a
      class="icon-btn mx-1"
      rel="noreferrer"
      :href="pkg.repository.url"
      target="_blank"
      title="GitHub"
    >
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
