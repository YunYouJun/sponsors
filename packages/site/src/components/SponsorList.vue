<script setup lang="ts">
import type { RankSponsor } from '@sponsors/types'
import sponsorsData from '~/assets/data/manual-sponsors.json'

const sponsors = ref<RankSponsor[]>((sponsorsData as any as RankSponsor[]).filter(i => i.total >= 5))
</script>

<template>
  <div class="opacity-80" text="sm" p="b-2">
    如果你希望展示一个头像，可以联系我（比如发头像链接给我）
  </div>
  <div class="sponsor-table md:p-2">
    <div class="header flex justify-between">
      <div w="10" />
      <div w="40" class="inline-flex justify-center" font="bold">
        老板
      </div>
      <div w="24" class="inline-flex justify-end" font="bold">
        ￥ 总额
      </div>
      <div w="12" class="inline-flex justify-end" font="bold">
        次数
      </div>
    </div>

    <SponsorRow v-for="sponsor, i in sponsors" :key="i" :sponsor="sponsor" :i="i" />
  </div>
</template>
