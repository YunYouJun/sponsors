<script lang="ts" setup>
import type { Expense } from '../utils'
import { formatDate } from '../utils'

import ExpenseData from '~/assets/data/expenses.yml'

const expenses = ref<Expense[]>(ExpenseData.reverse())
</script>

<template>
  <div class="sponsor-table">
    <div class="sponsor-table">
      <div class="header sponsor-row flex justify-between items-center" m="1">
        <div w="28" class="inline-flex justify-start" font="bold">
          日期
        </div>
        <div w="20" class="inline-flex justify-start" font="bold">
          服务商
        </div>
        <div w="64" class="inline-flex justify-start" font="bold">
          消费内容
        </div>
        <div w="20" class="inline-flex justify-end" font="bold">
          ¥ 金额
        </div>
      </div>
      <div v-for="row,i in expenses" :key="i" class="sponsor-row flex justify-between items-center" p="1" text="xs">
        <div w="28" class="inline-flex items-center justify-start">
          {{ formatDate(row.date) }}
        </div>
        <div w="20" class="inline-flex justify-start items-center" font="serif black">
          {{ row.business }}
        </div>

        <div w="64" class="inline-flex justify-start items-start">
          {{ row.memo }}
        </div>

        <div w="20" class="inline-flex justify-end items-center" font="mono">
          {{ row.amount.toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>
