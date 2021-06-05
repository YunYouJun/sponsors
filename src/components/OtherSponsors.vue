<template>
  <div class="sponsor-table">
    <el-table :data="sponsors">
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
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="date" label="日期">
        <template #default="scope">{{ formatDate(scope.row.date) }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { OtherSponsor, Sponsor } from "../types/index";

import yaml from "js-yaml";
import { formatDate } from "~/utils";

export default defineComponent({
  name: "SponsorsList",
  setup() {
    const sponsors = ref<OtherSponsor[]>([]);

    onBeforeMount(async () => {
      const url = "/data/sponsors.yml";
      sponsors.value = (await fetch(url)
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          const sponsors = yaml.load(data) as Sponsor[];
          const result = sponsors.filter((item) => item.method === '其他');
          return result;
        })) as OtherSponsor[];
    });

    return {
      sponsors,
      formatDate
    };
  },
});
</script>
