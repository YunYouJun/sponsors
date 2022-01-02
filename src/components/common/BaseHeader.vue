<template>
  <div>
    <i-ri-user-heart-line class="w-30 h-30 p-4 m-auto" alt="Sponsors logo" />
  </div>
  <router-link to="/projects">
    <a
      class="inline-block my-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)"
    >{{ t('message.projects') }}</a>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
const { t } = useI18n()
</script>
