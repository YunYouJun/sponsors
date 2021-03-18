<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期">
      <template #default="scope">{{ formatDate(scope.row.date) }}</template>
    </el-table-column>
    <el-table-column prop="method" label="方式"></el-table-column>
    <el-table-column prop="amount" label="金额"></el-table-column>
    <el-table-column prop="memo" label="备注"></el-table-column>
  </el-table>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    tableData: Array,
  },
  methods: {
    formatDate(val: any) {
      return dayjs(val).format("YYYY-MM-DD");
    },
  },
});
</script>
