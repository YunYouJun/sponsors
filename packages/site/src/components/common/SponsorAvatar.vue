<script lang="ts" setup>
import { anonymousImage } from '@yunyoujun/sponsors'
import md5 from 'md5'
import { computed } from 'vue'

const props = defineProps<{
  email?: string
  avatar?: string
}>()

const imgUrl = computed(() => {
  let result = anonymousImage
  if (props.email)
    result = `https://www.gravatar.com/avatar/${md5(props.email)}?s=200&d=identicon`

  if (props.avatar)
    result = props.avatar

  return result
})
</script>

<template>
  <img class="inline-flex shadow" m="r-2" w="5" h="5" rounded="full" :src="imgUrl" :onerror="`this.src='${anonymousImage}'`">
</template>
