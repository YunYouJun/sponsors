<template>
  <div class="sponsor-table">
    <el-table :data="sponsors">
      <el-table-column type="index" />
      <el-table-column prop="name" label="老板">
        <template #default="scope">
          <a
            v-if="scope.row.url"
            :href="scope.row.url"
            target="_blank"
            :alt="scope.row.name"
            class="sponsor-url"
          >{{ scope.row.name || "不知名的好心人" }}</a>
          <span v-else>{{ scope.row.name || "不知名的好心人" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="内容" />
      <el-table-column prop="date" label="日期">
        <template #default="scope">
          {{ formatDate(scope.row.date) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { OtherSponsor } from '@sponsors/types'
import { formatDate } from '~/utils'
import SponsorsData from '~/assets/data/sponsors.yml'

const sponsors = ref<OtherSponsor[]>(SponsorsData)

onBeforeMount(async() => {
  sponsors.value = sponsors.value.filter(item => item.method === '其他')
})
</script>
