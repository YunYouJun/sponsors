<template>
  <table
    class="donate-table"
    style="margin: 0 auto; padding: 0 1rem; max-width: 1000px"
  >
    <thead>
      <tr>
        <th v-for="key in methods" :title="MoneyMethod[key]">
          <MethodIcon :method="MoneyMethod[key]" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td v-for="key in methods">
          <a
            :href="donateMethod[key].url"
            :title="donateMethod[key].title"
            target="_blank"
          >
            <img
              class="qrcode-img"
              :src="donateMethod[key].url"
              :alt="donateMethod[key].title"
            />
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
import { donateMethod } from "~/assets/donate";
const { t } = useI18n();
const methods = EnumKeys(MoneyMethod);
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
  border: 1px solid var(--qrcode-border-color, #eee);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  margin: 0.5rem auto;
  max-width: 80%;
  @apply rounded;

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
