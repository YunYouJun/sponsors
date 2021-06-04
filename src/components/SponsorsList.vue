<template>
  <div class="sponsor-table">
    <el-table :data="sponsors" show-summary :row-class-name="tableRowClassName">
      <el-table-column type="expand" width="50px">
        <template #default="props">
          <detail-list :tableData="props.row.children" />
        </template>
      </el-table-column>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name" label="老板">
        <template #default="scope">
          <a
            v-if="scope.row.url"
            :href="scope.row.url"
            target="_blank"
            :alt="scope.row.name"
            class="sponsor-link"
          >{{ scope.row.name || "不知名的好心人" }}</a>
          <span v-else>{{ scope.row.name || "不知名的好心人" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="total" label="总额（元）" sortable>
        <template #default="scope">{{ scope.row.total.toFixed(2) }}</template>
      </el-table-column>
      <el-table-column prop="children.length" label="次数" sortable></el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss">
.first-sponsor > td {
  color: #ff9800;
  font-weight: bold;
  font-size: 1.3rem;
}

.second-sponsor > td {
  color: #607d8b;
  font-weight: bold;
  font-size: 1.2rem;
}

.third-sponsor > td {
  color: #795548;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>

<script lang="ts">
import store from "../store";
import { defineComponent, onBeforeMount, ref } from "vue";
import { RankSponsor, Sponsor } from "../types/index";

import yaml from "js-yaml";

import { sortSponsor } from "../utils";

export default defineComponent({
  name: "SponsorsList",
  setup() {
    const sponsors = ref<RankSponsor[]>([]);

    onBeforeMount(async () => {
      const url = "/data/sponsors.yml";
      sponsors.value = (await fetch(url)
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          const sponsors = yaml.load(data) as Sponsor[];
          const result = sponsors.filter((item) => item.amount >= 5);
          return sortSponsor(result);
        })) as RankSponsor[];

      let total = 0;
      sponsors.value.forEach((sponsor: any) => {
        total += sponsor.total;
      });

      store.setIncome(total);
    });

    return {
      sponsors,
    };
  },
  methods: {
    /**
     * 根据索引获取对应 class
     */
    tableRowClassName(val: any) {
      let className = "";
      switch (val.rowIndex) {
        case 0:
          className = "first";
          break;
        case 1:
          className = "second";
          break;
        case 2:
          className = "third";
          break;
        default:
          break;
      }
      return className + "-sponsor";
    },
  },
});
</script>
