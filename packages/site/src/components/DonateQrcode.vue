<template>
  <div class="post-card" m="auto" p="4" bg="white opacity-5">
    <base-header msg="Sponsors" />
    <div class="flex justify-center">
      <div v-for="key in methods" :key="key" class="inline-flex flex-col" :title="methodMap[key].title" :style="`--logo-color: ${methodMap[key].color}`">
        <div :class="['sponsor-method-icon', methodMap[key].icon, 'm-auto']" text="2xl" :title="methodMap[key].title" />

        <a class="qrcode-img-container inline-flex mx-6 lt-sm:mx-2" :href="donateMethod[key].url" :title="donateMethod[key].title" target="_blank">
          <img class="qrcode-img shadow-md" :style="`--qrcode-border-color: ${methodMap[key].color}`" :src="donateMethod[key].url" :alt="donateMethod[key].title">
        </a>
      </div>
    </div>

    <a
      class="flex justify-center items-center"
      m="2"
      href="https://afdian.net/@yunyoujun"
      target="_blank"
    >
      或者要试试
      <span text="purple-500" class="flex justify-center items-center" m="x-1">
        <div i-ri-flashlight-line />爱发电
      </span>吗？
    </a>

    <p class="my-4">
      {{ t("tooltip") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { MoneyMethod } from '@sponsors/types'
// import { EnumKeys } from "~/types/helper";
import { donateMethod } from '~/assets/donate'
import { methodMap } from '~/config'
const { t } = useI18n()
// const methods = EnumKeys(MoneyMethod);
const methods: (keyof typeof MoneyMethod)[] = ['ALI_PAY', 'WECHAT_REWARD', 'QQ_PAY']

</script>

<style lang="scss">
.qrcode-img {
  --qrcode-img-size: 230px;
  width: var(--qrcode-img-size);
  height: var(--qrcode-img-size);

  max-width: 24vw;
  // avoid blick when img is loading
  max-height: 24vw;

  padding: 6px;
  border: 2px dashed var(--qrcode-border-color, #eee);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  margin: 0.5rem auto;
  border-radius: 8px;

  &:hover {
    transform: scale(1.4);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.sponsor-method-icon {
  color: var(--logo-color);
}
</style>
