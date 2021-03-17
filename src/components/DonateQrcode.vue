<template>
  <p>
    如果能留下你的称呼和备注就再好不过了，我将会您添加至本页的赞助者列表中。（没留的话，就默认叫
    <strong>好心人</strong> 了～）
  </p>
  <table
    class="zi-table donate-table"
    style="margin: 0 auto; padding: 0 1rem; max-width: 1000px"
  >
    <thead>
      <tr>
        <th title="支付宝">
          <icon-font icon="alipay-line" color="#00A3EE" />
        </th>
        <th title="微信">
          <icon-font icon="wechat-pay-line" color="#2DC100" />
        </th>
        <th title="QQ"><icon-font icon="qq-line" color="#12B7F5" /></th>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

import IconFont from "./IconFont.vue";
export default defineComponent({
  components: {
    IconFont,
  },
});
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  margin: 0.5rem;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
  }
}
</style>
