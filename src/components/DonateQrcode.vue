<template>
  <table class="donate-table" style="margin: 0 auto; padding: 0 1rem; max-width: 1000px">
    <thead>
      <tr>
        <th v-for="key in methods" :title="MoneyMethod[key]">
          <MethodIcon :method="MoneyMethod[key]" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="qr in donateQrcode">
          <a :href="qr.url" :title="qr.title" target="_blank">
            <img class="qrcode-img" :src="qr.url" :alt="qr.title" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <p class="my-4">{{ t("tooltip") }}</p>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { MoneyMethod } from "~/types";
import { EnumKeys } from "~/types/helper";
import MethodIcon from "./MethodIcon.vue";
const { t } = useI18n();
const methods = EnumKeys(MoneyMethod);
const donateQrcode = [
  {
    title: "支付宝",
    url: "https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/alipay-qrcode.jpg",
  },
  {
    title: "微信支付",
    url: "https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/wechatpay-qrcode.jpg",
  },
  {
    title: "QQ 支付",
    url: "https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/qqpay-qrcode.png",
  },
];
</script>

<style lang="scss">
.donate-table {
  th,
  td {
    background: transparent;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
}

.qrcode-img {
  width: 250px;
  padding: 4px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  margin: 0.5rem auto;
  max-width: 80%;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
}

/* iconfont */
.vite-icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
}
</style>
