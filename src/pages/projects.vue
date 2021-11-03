<template>
  <h2 class="text-2xl my-5">{{ t('title.projects') }}</h2>

  <div flex="~ wrap" justify="center">
    <ProjectCard v-for="project in projects" :project="project" />
  </div>
</template>

<script lang="ts" setup>
import ProjectData from '~/assets/data/projects.yml'
import type { ProjectItem } from '~/components/projects/ProjectCard.vue';
const { t } = useI18n()

const projects = ref<ProjectItem[]>(ProjectData)
</script>
