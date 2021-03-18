<template>
  <img alt="Sponsors logo" src="../assets/logo.png" width="128" />
  <a href="https://github.com/YunYouJun/sponsors" target="_blank">
    <h1>{{ msg }}</h1>
  </a>
  <p>
    Thank you for your appreciation.
    <br />
    <a href="https://github.com/YunYouJun/sponsors/blob/gh-pages/list.md"
      >详细列表</a
    >
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    msg: String,
  },
});
</script>
