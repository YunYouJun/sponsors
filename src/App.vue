<template>
  <img alt="Sponsors logo" src="./assets/logo.png" width="128" />
  <sponsors-list msg="Sponsors" />
</template>

<script>
import SponsorsList from "./components/SponsorsList.vue";

export default {
  name: "App",
  components: {
    SponsorsList,
  },
};
</script>
