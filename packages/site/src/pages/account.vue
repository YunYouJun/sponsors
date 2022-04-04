<script lang="ts" setup>
import type { ComponentOptions } from 'vue'
import store from '../store'

import SponsorList from '~/components/SponsorList.vue'
import OtherSponsors from '~/components/OtherSponsors.vue'
import ExpenseTable from '~/components/ExpenseTable.vue'

const state = store.state

interface TabItem {
  name: string
  component: ComponentOptions
}

const { t } = useI18n()

const tabs: TabItem[] = [{
  name: t('tab.sponsor_list'),
  component: SponsorList,
}, {
  name: t('tab.other_sponsors'),
  component: OtherSponsors,
}, {
  name: t('tab.expense'),
  component: ExpenseTable,
}]

const currentTab = shallowRef<TabItem>(tabs[0])
</script>

<template>
  <div class="post-card">
    <h1>
      账单
    </h1>

    <div class="flex justify-center items-center" m="2" p="b-2" text="sm">
      <span class="tag" text="green-600" bg="green-50">
        <div class="inline-flex" m="r-1" i-icon-park-outline-income />
        <span>收入：</span>
        <span font="mono">{{ state.income.toFixed(2) }}</span>
      </span>
      <span font="mono">-</span>
      <span class="tag" text="red-600" bg="red-50">
        <div class="inline-flex" m="r-1" i-icon-park-outline-expenses />
        <span>支出：</span>
        <span font="mono">{{ state.expense.toFixed(2) }}</span>
      </span>
      <span font="mono">=</span>
      <span class="tag" text="yellow-600" bg="yellow-50">
        <div class="inline-flex" m="r-1" i-ri-scales-line />
        <span>盈余：</span>
        <span font="mono">{{ store.getBalance().toFixed(2) }}</span>
      </span>
    </div>

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
