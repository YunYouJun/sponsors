<script lang="ts" setup>
import { anonymousImage } from '~/config'

defineProps<{
  avatar?: string
}>()
</script>

<template>
  <img class="inline-flex shadow" m="r-2" w="5" h="5" rounded="full" :src="avatar || anonymousImage" :onerror="`this.src='${anonymousImage}'`">
</template>
