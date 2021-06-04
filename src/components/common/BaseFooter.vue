<template>
  <vue-about-me :copyright="copyright"></vue-about-me>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueAboutMe from "vue-about-me/sfc";

export default defineComponent({
  components: {
    VueAboutMe
  },
  data() {
    return {
      copyright: {
        name: 'Sponsors',
        repo: 'sponsors',
        author: "YunYouJun",
        logo: 'ri:cloud-line'
      }
    }
  }
})
</script>
