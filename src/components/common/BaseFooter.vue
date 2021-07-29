<template>
  <vue-about-me :is-dark="isDark" :copyright="copyright"></vue-about-me>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VueAboutMe from "vue-about-me";
import "vue-about-me/style.css";
import { isDark } from "~/logic";

const copyright = ref({
  name: "Sponsors",
  repo: "sponsors",
  author: "YunYouJun",
});
</script>
