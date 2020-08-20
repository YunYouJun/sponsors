<template>
  <a href="https://github.com/YunYouJun/sponsors" target="_blank">
    <h1>{{ msg }}</h1>
  </a>
  <p>
    Thank you for your appreciation.
  </p>
  <table
    class="zi-table"
    style="margin: 0 auto; padding: 0 1rem; max-width: 1000px;"
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
  <p>
    谢谢你们的支持！
    您的每一份支持，都是激励我创造出更多有趣、有价值的事物的动力。
    愿这个世界更美好也更加有趣，也愿诸位与我都能成为自己想要成为的人。
  </p>
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

<script>
export default {
  name: "SponsorsList",
  props: {
    msg: String,
  },
  data() {
    return {
      sponsors: [],
    };
  },
  async beforeCreate() {
    const url = "https://sponsors.yunyoujun.cn/rank.json";
    this.sponsors = await fetch(url).then((res) => {
      return res.json();
    });
  },
  methods: {
    getClassName(index) {
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
};
</script>
