<template>
  <div class="post-card">
    <h1>
      账单
    </h1>
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
