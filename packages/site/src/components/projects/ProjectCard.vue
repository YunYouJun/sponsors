<script setup lang="ts">
import { TinyColor } from '@ctrl/tinycolor'
import type { ProjectItem } from '~/types'

const props = defineProps<{ project: ProjectItem }>()

const cardStyle = computed(() => {
  const styles = {
    color: 'black',
  }
  let textColor = props.project.textColor
  if (props.project.color && (typeof props.project.gradient === 'undefined' || props.project.gradient)) {
    const color = new TinyColor(props.project.color)
    styles['--un-gradient-stops'] = `${color.spin(55).toHexString()}, ${props.project.color}`
    if (!textColor)
      textColor = color.isDark() ? 'white' : 'black'
  }
  else {
    styles.backgroundColor = props.project.color || 'rgba(255,255,255,0.9)'
  }
  styles.color = textColor
  return styles
})

const githubUrl = computed(() => {
  if (props.project.github)
    return `https://github.com/${props.project.github}`

  else
    return `https://github.com/YunYouJun/${props.project.name}`
})

const npmLink = computed(() => {
  return `https://www.npmjs.com/package/${props.project.npm}`
})
</script>

<template>
  <div
    class="m-2 w-90 transform rounded shadow-md grayscale-10 transition duration-400"
    bg="opacity-80 gradient-to-br"
    p="2"
    hover="shadow-lg scale-105 grayscale-0"
    :style="cardStyle"
  >
    <div v-if="project.emoji" class="mt-4">
      {{ project.emoji }}
    </div>
    <a :href="githubUrl" target="_blank">
      <h2 class="text-lg" font="black" m="2">{{ project.name || '忘记叫啥了' }}</h2>
    </a>
    <small class="block" p="2" v-html="project.desc || '说点什么好呢'" />
    <p p="2">
      <a class="mx-1 icon-btn" :href="githubUrl" target="_blank">
        <div i-ri-github-line />
      </a>
      <a v-if="project.url" class="mx-1 icon-btn" :href="project.url" target="_blank">
        <div i-ri-global-line />
      </a>
      <a v-if="project.docs" class="mx-1 icon-btn" :href="project.docs" target="_blank">
        <div i-ri-book-line />
      </a>
      <a v-if="project.npm" class="mx-1 icon-btn" :href="npmLink" target="_blank">
        <div i-ri-npmjs-line />
      </a>
    </p>
  </div>
</template>
