<template>
  <div class="flex w-full justify-center" text="xl" font="black" m="b-2 t-4">{{ title }}</div>
  <ProjectCard v-for="project in projects" :project="project" />
</template>

<script lang="ts" setup>
import type { ProjectItem } from '~/components/projects/ProjectCard.vue';
defineProps<{ title: string, projects: ProjectItem[] }>()
</script>
