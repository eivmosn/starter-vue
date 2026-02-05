<script setup lang="ts">
import { NConfigProvider, NEl } from 'naive-ui'
import { RouterView } from 'vue-router'
import { theme } from './composables/useDark'
</script>

<template>
  <n-config-provider
    :theme="theme"
    abstract
    inline-theme-disabled
  >
    <n-el class="h-full bg-[var(--body-color)] text-[var(--text-color-base)]">
      <router-view />
    </n-el>
  </n-config-provider>
</template>
