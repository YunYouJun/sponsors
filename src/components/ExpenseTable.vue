<template>
  <div class="sponsor-table">
    <div style="display: flex; gap: 0.5rem">
      <el-tag type="success">收入：{{ state.income.toFixed(2) }}</el-tag>
      <el-tag type="danger">支出：{{ state.expense.toFixed(2) }}</el-tag>
      <el-tag type="warning">盈余：{{ store.getBalance().toFixed(2) }}</el-tag>
    </div>

    <br />

    <el-table :data="expenses" show-summary>
      <el-table-column prop="date" label="日期">
        <template #default="scope">
          {{
            formatDate(scope.row.date)
          }}
        </template>
      </el-table-column>
      <el-table-column prop="business" label="服务商"></el-table-column>
      <el-table-column prop="memo" label="消费内容"></el-table-column>
      <el-table-column prop="amount" label="金额">
        <template #default="scope">{{ scope.row.amount.toFixed(2) }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import store from "../store";
import { formatDate } from "../utils";
import { onBeforeMount, ref, toRefs } from "vue";
import yaml from "js-yaml";

interface Expense {
  memo: string;
  business: string;
  amount: number;
  date: Date;
}

const expenses = ref<Expense[]>([])
const state = store.state

onBeforeMount(async ()=> {
  const url = "/data/expenses.yml";
  expenses.value = await fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return yaml.load(data) as Expense[];
    });

  let total = 0;
  expenses.value.forEach((expense: Expense) => {
    total += expense.amount;
  });

  store.setExpense(total);
})
</script>
