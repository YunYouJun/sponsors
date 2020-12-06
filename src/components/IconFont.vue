<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="{ color: color, fontSize: size }"
  >
    <use :xlink:href="'#icon-' + icon"></use>
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "2rem",
    },
    color: {
      type: String,
      default: "blue",
    },
    icon: {
      type: String,
      default: "cloud-line",
    },
  },
};
</script>
