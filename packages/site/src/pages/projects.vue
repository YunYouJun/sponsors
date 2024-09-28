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
</script>

<template>
  <h2 class="my-5 text-2xl">
    {{ t('title.projects') }}
  </h2>

  <div flex="~ wrap" justify="center">
    <ProjectCollection title="🤣 沙雕" :projects="projects.interesting" />
    <ProjectCollection title="💡 应用" :projects="projects.applets" />
    <ProjectCollection title="🔧 工具" :projects="projects.tools" />
    <ProjectCollection title="🔌 插件" :projects="projects.plugins" />
    <ProjectCollection title="🎨 设计" :projects="projects.design" />
    <ProjectCollection title="🔬 实验" :projects="projects.lab" />
    <ProjectCollection title="👥 参与" :projects="projects.open_source" />
    <ProjectCollection title="📁 其他" :projects="projects.other" />
  </div>
</template>
