<script lang="ts" setup>
import store from '../store'
import { formatDate } from '../utils'

import ExpenseData from '~/assets/data/expenses.yml'

interface Expense {
  memo: string
  business: string
  amount: number
  date: Date
}

const expenses = ref<Expense[]>(ExpenseData)

onBeforeMount(async() => {
  let total = 0
  expenses.value.reverse().forEach((expense: Expense) => {
    total += expense.amount
  })

  store.setExpense(total)
})
</script>

<template>
  <div class="sponsor-table">
    <div class="sponsor-table">
      <div class="header sponsor-row flex justify-between items-center" m="1">
        <div w="28" class="inline-flex justify-start">
          日期
        </div>
        <div w="20" class="inline-flex justify-start">
          服务商
        </div>
        <div w="50" class="inline-flex justify-start">
          消费内容
        </div>
        <div w="20" class="inline-flex justify-end">
          ¥ 金额
        </div>
      </div>
      <div v-for="row,i in expenses" :key="i" class="sponsor-row flex justify-between items-center" p="1" text="sm">
        <div w="28" class="inline-flex items-center justify-start" text="xs">
          {{ formatDate(row.date) }}
        </div>
        <div w="20" class="inline-flex justify-start items-center" font="serif black">
          {{ row.business }}
        </div>

        <div w="64" class="inline-flex justify-start items-start" text="xs">
          {{ row.memo }}
        </div>

        <div w="20" class="inline-flex justify-end items-center" font="mono">
          {{ row.amount.toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
</template>
