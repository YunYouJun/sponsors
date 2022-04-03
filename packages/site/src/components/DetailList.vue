<script setup lang="ts">
import type { RankSponsor } from '@sponsors/types'
import { formatDate } from '../utils'

defineProps<{ details: RankSponsor['children'] }>()

</script>

<template>
  <div class="detail-list" m="2">
    <div v-for="detail, i in details" :key="i" class="detail-item flex justify-around" p="1" text="sm">
      <div w="30" class="inline-flex" font="mono">
        {{ formatDate(detail.date) }}
      </div>
      <div w="8" class="inline-flex">
        <MethodIcon :method="detail.method" />
      </div>

      <div v-if="detail.amount!" w="20" class="inline-flex justify-end" font="mono">
        {{ detail.amount!.toFixed(2) }}
      </div>
      <div w="48" class="inline-flex justify-center">
        {{ detail.memo || '-' }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.detail-list {
  padding: 0.5rem;
  border: 1px solid var(--c-border);
}
</style>
