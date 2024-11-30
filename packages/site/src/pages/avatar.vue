<script setup lang="ts">
const route = useRoute()
const name = route.query.name as string
</script>

<template>
  <div class="gap-1 text-left" flex="~ wrap">
    <SponsorTextAvatar :name="name" />
    <SponsorTextAvatar :name="name" rounded />
    <SponsorTextAvatar name="云游君" />
    <SponsorTextAvatar name="云游君" rounded />
    <SponsorTextAvatar name="烧烤牛排" />
    <SponsorTextAvatar name="烧烤牛排" rounded />
    <SponsorTextAvatar name="云游君的赞助者" />
    <SponsorTextAvatar name="云游君的赞助者" rounded />
    <SponsorTextAvatar name="我是一个超级超级长昵称" />
    <SponsorTextAvatar name="我是一个超级超级长昵称" rounded />
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
