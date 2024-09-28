<script lang="ts" setup>
import ProjectData from '~/assets/data/projects.yml'
import ProjectCollection from '~/components/projects/ProjectCollection.vue'
import type { ProjectItem } from '~/types'

export interface ProjectDataType {
  applets: ProjectItem[]
  tools: ProjectItem[]
  plugins: ProjectItem[]
  interesting: ProjectItem[]
  design: ProjectItem[]
  other: ProjectItem[]
  lab: ProjectItem[]
  open_source: ProjectItem[]
}
const { t } = useI18n()

const projects = reactive(ProjectData as ProjectDataType)

const curCategory = ref('all')
const categories = [
  { title: '🤣 沙雕', key: 'interesting' },
  { title: '💡 应用', key: 'applets' },
  { title: '🔧 工具', key: 'tools' },
  { title: '🔌 插件', key: 'plugins' },
  { title: '🎨 设计', key: 'design' },
  { title: '🔬 实验', key: 'lab' },
  { title: '👥 参与', key: 'open_source' },
  { title: '📁 其他', key: 'other' },
]
</script>

<template>
  <h2 class="mb-3 mt-5 text-2xl">
    {{ t('title.projects') }}
  </h2>

  <div flex="~ wrap" justify="center">
    <button
      class="bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 py-1"
      :class="{
        'bg-blue-500 text-white': curCategory === 'all',
      }"
      @click="curCategory = 'all'"
    >
      全部
    </button>
    <button
      v-for="category in categories"
      :key="category.key"
      class="bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 py-1"
      :class="{
        'bg-blue-500 text-white': category.key === curCategory,
      }"
      @click="curCategory = category.key"
    >
      {{ category.title }}
    </button>
  </div>

  <div flex="~ wrap" justify="center">
    <template v-for="category in categories" :key="category.key">
      <ProjectCollection
        v-if="curCategory === 'all' || curCategory === category.key"
        :title="category.title"
        :projects="projects[category.key]"
      />
    </template>
  </div>
</template>
