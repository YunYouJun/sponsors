<template>
  <div class="sponsor-table">
    <el-collapse>
      <el-collapse-item>
        <template #title>
          <div style="display: flex; gap: 0.5rem">
            <el-tag type="success">
              收入：{{ state.income.toFixed(2) }}
            </el-tag>
            <el-tag type="danger">
              支出：{{ state.expense.toFixed(2) }}
            </el-tag>
            <el-tag type="warning">
              盈余：{{ store.getBalance().toFixed(2) }}
            </el-tag>
          </div>
        </template>

        <el-table :data="expenses" show-summary>
          <el-table-column prop="date" label="日期">
            <template #default="scope">{{
              formatDate(scope.row.date)
            }}</template>
          </el-table-column>
          <el-table-column prop="business" label="服务商"></el-table-column>
          <el-table-column prop="memo" label="消费内容"></el-table-column>
          <el-table-column prop="amount" label="金额">
            <template #default="scope">
              {{ scope.row.amount.toFixed(2) }}
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import store from "../store";
import { formatDate } from "../utils";
import { defineComponent } from "vue";
import yaml from "js-yaml";

interface Expense {
  memo: string;
  business: string;
  amount: number;
  date: Date;
}

export default defineComponent({
  data() {
    return {
      expenses: [] as Expense[],
      store: store,
      state: store.state,
    };
  },
  methods: {
    formatDate,
  },
  async beforeCreate() {
    const url = "/data/expenses.yml";
    this.expenses = await fetch(url)
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        return yaml.load(data) as Expense[];
      });

    let total = 0;
    this.expenses.forEach((expense: Expense) => {
      total += expense.amount;
    });

    store.setExpense(total);
  },
});
</script>
