<template>
  <p>
    如果能留下你的称呼和备注就再好不过了，我将会您添加至本页的赞助者列表中。（没留的话，就默认叫
    <strong>好心人</strong> 了～）
  </p>
  <table
    class="donate-table"
    style="margin: 0 auto; padding: 0 1rem; max-width: 1000px"
  >
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
</template>

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
  margin: 0.5rem;
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
