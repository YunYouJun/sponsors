<template>
  <vue-about-me :copyright="copyright"></vue-about-me>
</template>

<script lang="ts" setup>
import VueAboutMe from "vue-about-me";
import "vue-about-me/style.css";

const copyright =  {
  name: 'Sponsors',
  repo: 'sponsors',
  author: "YunYouJun",
}
</script>
