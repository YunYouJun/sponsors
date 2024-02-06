<script setup lang="ts">
import { TinyColor } from '@ctrl/tinycolor'
import type { ProjectItem } from '~/types'

const props = defineProps<{ project: ProjectItem }>()

const project = toRef(props, 'project')

const cardStyle = computed(() => {
  if (project.value.color && (typeof project.value.gradient === 'undefined' || project.value.gradient)) {
    const color = new TinyColor(project.value.color)
    const textColor = project.value.textColor || (color.isDark() ? 'white' : 'black')
    return {
      '--un-gradient-stops': `${color.spin(55).toHexString()}, ${project.value.color}`,
      'color': textColor,
    }
  }
  else {
    return {
      backgroundColor: project.value.color || 'rgba(255,255,255,0.9)',
      color: 'black',
    }
  }
})

const githubUrl = computed(() => {
  if (project.value.github)
    return `https://github.com/${project.value.github}`

  else
    return `https://github.com/YunYouJun/${project.value.name}`
})
</script>

<template>
  <div
    class="rounded shadow-md transform transition w-90 m-2 duration-400"
    bg="opacity-80 gradient-to-br"
    p="2"
    hover="shadow-lg from-white scale-105"
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
      <a class="icon-btn mx-1" :href="githubUrl" target="_blank">
        <div i-ri-github-line />
      </a>
      <a v-if="project.url" class="icon-btn mx-1" :href="project.url" target="_blank">
        <div i-ri-global-line />
      </a>
      <a v-if="project.docs" class="icon-btn mx-1" :href="project.docs" target="_blank">
        <div i-ri-book-line />
      </a>
    </p>
  </div>
</template>
