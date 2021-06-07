<template>
  <i-ri-alipay-line
    v-if="method === MoneyMethod.ALI_PAY"
    class="vite-icon"
    color="#00A3EE"
    title="支付宝"
  />
  <i-ri-wechat-pay-line
    v-else-if="method === MoneyMethod.WECHAT_PAY"
    class="vite-icon"
    color="#2DC100"
    title="微信支付"
  />
  <i-ri-qq-line
    v-else-if="method === MoneyMethod.QQ_PAY"
    class="vite-icon"
    color="#12B7F5"
    title="QQ 钱包"
  />
  <span v-else>{{ method }}</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MoneyMethod } from "~/types";
export default defineComponent({
  props: {
    method: {
      type: String as PropType<MoneyMethod>,
      default: 'Other'
    }
  },
  setup() {
    return {
      MoneyMethod
    }
  }
})
</script>
