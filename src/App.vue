<template>
  <img alt="Sponsors logo" src="./assets/logo.png" width="128" />
  <sponsors-list msg="Sponsors" />
  <hr />
  <donate-qrcode />
  <p>
    谢谢你们的支持！
    您的每一份支持，都是激励我创造出更多有趣、有价值的事物的动力。
    愿这个世界更美好也更加有趣，也愿诸位与我都能成为自己想要成为的人。
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DonateQrcode from "./components/DonateQrcode.vue";
import SponsorsList from "./components/SponsorsList.vue";

export default defineComponent({
  name: "App",
  components: {
    DonateQrcode,
    SponsorsList,
  },
});
</script>
