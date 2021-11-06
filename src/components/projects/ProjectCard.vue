<template>
  <div
    class="rounded shadow-md hover:shadow-lg w-90 transition m-2 bg-gradient-to-br from-white"
    bg="opacity-80 gradient-to-br"
    p="2"
    :style="cardStyle"
  >
    <div v-if="project.emoji" class="mt-4">{{ project.emoji }}</div>
    <a :href="githubUrl">
      <h2 class="text-lg" font="black" m="2">{{ project.name || '忘记叫啥了' }}</h2>
    </a>
    <small class="block" p="2">{{ project.desc || '说点什么好呢' }}</small>
    <p p="4">
      <a class="m-2" :href="githubUrl" target="_blank">
        <i-ri-github-line />
      </a>
      <a v-if="project.url" class="m-2" :href="project.url" target="_blank">
        <i-ri-global-line />
      </a>
      <a v-if="project.docs" class="m-2" :href="project.docs" target="_blank">
        <i-ri-book-line />
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { TinyColor } from '@ctrl/tinycolor';

export interface ProjectItem {
  emoji?: string
  /**
   * 项目名称
   */
  name?: string
  /**
   * 项目描述
   */
  desc?: string
  /**
   * 代表色
   */
  color?: string
  /**
   * 强制覆盖文本色
   */
  textColor?: string
  github?: string
  url?: string
  /**
   * 文档链接
   */
  docs?: string
}

const props = defineProps<{ project: ProjectItem }>()

const project = toRef(props, 'project')

const cardStyle = computed(() => {
  if (project.value.color) {
    const color = new TinyColor(project.value.color)
    const textColor = project.value.textColor || (color.isDark() ? 'white' : 'black')
    return {
      '--tw-gradient-stops': `${color.spin(55).toHexString()}, ${project.value.color}`,
      color: textColor
    }
  } else {
    return {
      backgroundColor: 'rgba(255,255,255,0.6)'
    }
  }
})

const githubUrl = computed(() => {
  if (project.value.github) {
    return `https://github.com/${project.value.github}`
  } else {
    return `https://github.com/YunYouJun/${project.value.name}`
  }
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </script>
