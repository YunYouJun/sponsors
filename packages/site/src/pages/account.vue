<script lang="ts" setup>
import store from '../store'
const state = store.state
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

    <el-tabs type="card">
      <el-tab-pane label="经济赞助">
        <sponsors-list />
      </el-tab-pane>
      <el-tab-pane label="其他赞助">
        <other-sponsors />
      </el-tab-pane>
      <el-tab-pane label="当前支出">
        <expense-table />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
