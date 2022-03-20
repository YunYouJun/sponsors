<template>
  <div class="sponsor-table">
    <el-table :data="sponsors" show-summary :row-class-name="tableRowClassName">
      <el-table-column type="expand" width="60px">
        <template #default="scope">
          <detail-list :table-data="scope.row.children" />
        </template>
      </el-table-column>
      <el-table-column type="index" />
      <el-table-column prop="name" label="老板">
        <template #default="scope">
          <a
            v-if="scope.row.url"
            :href="scope.row.url"
            target="_blank"
            :alt="scope.row.name"
            class="sponsor-url"
          >
            <span>{{ scope.row.name || "不知名的好心人" }}</span>
          </a>
          <span v-else>{{ scope.row.name || "不知名的好心人" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="total" label="总额（元）" sortable>
        <template #default="scope">
          {{ scope.row.total.toFixed(2) }}
        </template>
      </el-table-column>
      <el-table-column prop="children.length" label="次数" sortable />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import type { RankSponsor } from '@sponsors/types'
import store from '~/store'
import sponsorsData from '~/../public/manual-sponsors.json'

const sponsors = ref<RankSponsor[]>(sponsorsData as any as RankSponsor[])

onBeforeMount(async() => {
  let total = 0
  sponsors.value.forEach((sponsor) => {
    total += sponsor.total
  })

  store.setIncome(total)
})

/**
 * 根据索引获取对应 class
 */
function tableRowClassName(val: any) {
  let className = ''
  switch (val.rowIndex) {
    case 0:
      className = 'first'
      break
    case 1:
      className = 'second'
      break
    case 2:
      className = 'third'
      break
    default:
      break
  }
  return `${className}-sponsor`
}
</script>

<style lang="scss">
.first-sponsor > td {
  color: #ff9800;
  font-weight: bold;
  font-size: 1.3rem;
}

.second-sponsor > td {
  color: #607d8b;
  font-weight: bold;
  font-size: 1.2rem;
}

.third-sponsor > td {
  color: #795548;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
