<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期">
      <template #default="scope">{{ formatDate(scope.row.date) }}</template>
    </el-table-column>
    <el-table-column prop="method" label="方式">
      <template #default="scope">
        <MethodIcon :method="scope.row.method" />
      </template>
    </el-table-column>
    <el-table-column prop="amount" label="金额">
      <template #default="scope">{{ scope.row.amount.toFixed(2) }}</template>
    </el-table-column>
    <el-table-column prop="memo" label="备注"></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { formatDate } from "../utils";
import MethodIcon from "./MethodIcon.vue";
export default defineComponent({
  props: {
    tableData: Array,
  },
  methods: {
    formatDate,
  },
  components: { MethodIcon },
});
</script>
