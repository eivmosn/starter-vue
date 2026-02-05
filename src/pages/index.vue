<script setup lang="ts">
import { message, toggleDark } from '@composables'
import { NButton } from 'naive-ui'

definePage({
  name: 'Home',
  meta: {
    auth: true,
  },
})

function showMsg() {
  message.success('Success')
}
</script>

<template>
  <div class="flex items-center justify-center gap-7 p-10">
    <n-button @click="showMsg">
      Click me
    </n-button>

    <n-button @click="toggleDark()">
      Toggle Dark
    </n-button>
  </div>
</template>
