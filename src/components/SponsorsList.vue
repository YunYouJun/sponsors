<template>
  <a href="https://github.com/YunYouJun/sponsors" target="_blank">
    <h1>{{ msg }}</h1>
  </a>
  <p>
    Thank you for your appreciation.
    <br />
    <a href="https://github.com/YunYouJun/sponsors/blob/gh-pages/list.md"
      >详细列表</a
    >
  </p>
  <table
    class="zi-table"
    style="margin: 0 auto; padding: 0 1rem; max-width: 1000px"
  >
    <thead>
      <tr>
        <th>#</th>
        <th>头像</th>
        <th>老板</th>
        <th>共计</th>
        <th>次数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(sponsor, i) in sponsors" :key="i" :class="getClassName(i)">
        <td>{{ i + 1 }}</td>
        <td>
          <img
            class="zi-avatar"
            :src="
              sponsor.avatar ||
              'https://vercel.com/api/www/avatar/?u=evilrabbit&s=240'
            "
          />
        </td>
        <td>
          <template v-if="sponsor.url">
            <a :href="sponsor.url" target="_blank" :alt="sponsor.name">{{
              sponsor.name || "不知名的好心人"
            }}</a>
          </template>
          <template v-else>
            {{ sponsor.name || "不知名的好心人" }}
          </template>
        </td>
        <td>{{ sponsor.total.toFixed(2) }}</td>
        <td>{{ sponsor.children.length }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
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
import { defineComponent } from "vue";
import { RankSponsor } from "../types/index";

export default defineComponent({
  name: "SponsorsList",
  props: {
    msg: String,
  },
  data() {
    return {
      sponsors: [] as RankSponsor[],
      total: 0,
    };
  },
  async beforeCreate() {
    const url = "https://sponsors.yunyoujun.cn/rank.json";
    this.sponsors = await fetch(url).then((res) => {
      return res.json();
    });

    this.sponsors.forEach((sponsor: any) => {
      this.total += sponsor.total;
    });
  },
  methods: {
    /**
     * 根据索引获取对应 class
     */
    getClassName(index: number) {
      let className = "";
      switch (index) {
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
