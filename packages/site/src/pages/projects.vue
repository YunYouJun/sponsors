<script lang="ts" setup>
import ProjectData from '~/assets/data/projects.yml'
import type { ProjectItem } from '~/components/projects/ProjectCard.vue'
import ProjectCollection from '~/components/projects/ProjectCollection.vue'

export interface ProjectDataType {
  applets: ProjectItem[]
  tools: ProjectItem[]
  plugins: ProjectItem[]
  interesting: ProjectItem[]
  design: ProjectItem[]
  other: ProjectItem[]
}
const { t } = useI18n()

const projects = reactive(ProjectData as ProjectDataType)
</script>

<template>
  <h2 class="text-2xl my-5">
    {{ t('title.projects') }}
  </h2>

  <div flex="~ wrap" justify="center">
    <ProjectCollection title="🎨 设计" :projects="projects.design" />
    <ProjectCollection title="🤣 沙雕" :projects="projects.interesting" />
    <ProjectCollection title="💡 应用" :projects="projects.applets" />
    <ProjectCollection title="🔧 工具" :projects="projects.tools" />
    <ProjectCollection title="🔌 插件" :projects="projects.plugins" />
    <ProjectCollection title="🔬 实验" :projects="projects.lab" />
    <ProjectCollection title="👥 参与" :projects="projects.open_source" />
    <ProjectCollection title="📁 其他" :projects="projects.other" />
  </div>
</template>
