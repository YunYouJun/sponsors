<script setup lang="ts">
import type { OtherSponsor } from '@sponsors/types'
import SponsorsData from '~/assets/data/special-sponsors.json'
import { formatDate } from '~/utils'
import SponsorAvatar from './common/SponsorAvatar.vue'

const sponsors = ref<OtherSponsor[]>(SponsorsData as any)
</script>

<template>
  <div class="sponsor-table">
    <div v-for="row, i in sponsors" :key="i" class="sponsor-row flex items-center justify-between" p="1">
      <div class="inline-flex items-center justify-start">
        <SponsorAvatar :email="row.email" :avatar="row.avatar" />
        <a
          v-if="row.url"
          :href="row.url"
          target="_blank"
          :alt="row.name"
          class="sponsor-url min-w-12 inline-flex justify-center"
          font="serif black"
        >{{ row.name || "不知名的好心人" }}</a>
        <span m="l-2" class="inline-flex items-center justify-start" text="sm">
          {{ row.content }}
        </span>
      </div>
      <div w="28" class="inline-flex items-center justify-end" text="sm">
        {{ formatDate(row.date) }}
      </div>
    </div>
  </div>
</template>
