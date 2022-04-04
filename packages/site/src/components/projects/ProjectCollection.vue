<script lang="ts" setup>
import type { ProjectItem } from '~/components/projects/ProjectCard.vue'
defineProps<{ title: string; projects: ProjectItem[] }>()
</script>

<template>
  <div class="flex w-full justify-center" text="xl" font="black" m="b-2 t-4">
    {{ title }}
  </div>
  <ProjectCard v-for="project, i in projects" :key="i" :project="project" />
</template>
