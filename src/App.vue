<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useConfigProvider } from './composables/useConfigProvider'

useConfigProvider()
</script>

<template>
  <n-config-provider abstract inline-theme-disabled>
    <router-view />
  </n-config-provider>
</template>
