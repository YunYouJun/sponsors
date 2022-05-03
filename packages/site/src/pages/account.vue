<script lang="ts" setup>
import type { ComponentOptions } from 'vue'
import store from '../store'

import SponsorList from '~/components/SponsorList.vue'
import OtherSponsors from '~/components/OtherSponsors.vue'
import ExpenseTable from '~/components/ExpenseTable.vue'
import { sumExpense, sumIncome } from '~/utils'

import sponsors from '~/assets/data/manual-sponsors.json'
import expenses from '~/assets/data/expenses.yml'

const { t } = useI18n()
const state = store.state

interface TabItem {
  name: string
  component: ComponentOptions
}

const tabs = computed<TabItem[]>(() => [{
  name: t('tab.sponsor_list'),
  component: SponsorList,
}, {
  name: t('tab.other_sponsors'),
  component: OtherSponsors,
}, {
  name: t('tab.expense'),
  component: ExpenseTable,
}])

const currentTab = shallowRef<TabItem>(tabs.value[0])

onBeforeMount(() => {
  sumIncome(sponsors as any)
  sumExpense(expenses)
})

</script>

<template>
  <div class="post-card">
    <h1 text="xl" font="serif black">
      {{ t('title.account') }}
    </h1>

    <div class="flex justify-center items-center" m="2" p="b-2" text="sm">
      <span class="tag" text="green-600 dark:green-100" bg="green-50 dark:(green-700 opacity-80)">
        <div class="inline-flex" m="r-1" i-icon-park-outline-income />
        <span>收入：</span>
        <span font="mono">{{ state.income.toFixed(2) }}</span>
      </span>
      <span font="mono">-</span>
      <span class="tag" text="red-600 dark:red-100" bg="red-50 dark:(red-700 opacity-80)">
        <div class="inline-flex" m="r-1" i-icon-park-outline-expenses />
        <span>支出：</span>
        <span font="mono">{{ state.expense.toFixed(2) }}</span>
      </span>
      <span font="mono">=</span>
      <span class="tag" text="yellow-600 dark:yellow-100" bg="yellow-50 dark:(yellow-700 opacity-80)">
        <div class="inline-flex" m="r-1" i-ri-scales-line />
        <span>盈余：</span>
        <span font="mono">{{ store.balance.value.toFixed(2) }}</span>
      </span>
    </div>

    <div>
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab-button', { active: currentTab.name === tab.name }]"
        text="sm"
        font="serif black"
        @click="currentTab = tab"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="tab">
      <component :is="currentTab.component" />
    </div>
  </div>
</template>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid var(--c-border);
  cursor: pointer;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: rgba(0, 120, 231, 0.1);
}
.tab-button.active {
  background: rgba(122, 122, 122, 0.1);
}
.tab {
  border: 1px solid var(--c-border);
  padding: 10px;
}
</style>
