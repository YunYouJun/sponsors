<template>
  <table class="donate-table" style="margin: 0 auto; padding: 0 1rem; max-width: 1000px">
    <thead>
      <tr>
        <th title="支付宝">
          <i-ri-alipay-line class="vite-icon" color="#00A3EE" />
        </th>
        <th title="微信">
          <i-ri-wechat-pay-line class="vite-icon" color="#2DC100" />
        </th>
        <th title="QQ">
          <i-ri-qq-line class="vite-icon" color="#12B7F5" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img
            class="qrcode-img"
            width="200"
            src="https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/alipay-qrcode.jpg"
            alt="支付宝"
          />
        </td>
        <td>
          <img
            class="qrcode-img"
            width="200"
            src="https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/wechatpay-qrcode.jpg"
            alt="微信支付"
          />
        </td>
        <td>
          <img
            class="qrcode-img"
            width="200"
            src="https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/donate/qqpay-qrcode.png"
            alt="QQ 支付"
          />
        </td>
      </tr>
    </tbody>
  </table>

  <p class="my-4">{{ t('tooltip') }}</p>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="scss">
.donate-table {
  th,
  td {
    background: transparent;
    text-align: center;
  }
}

.qrcode-img {
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
