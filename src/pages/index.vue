<script setup lang="ts">
import type { CSSProperties } from 'vue'
import Greating from '../components/Greating.vue'

const background: CSSProperties = {
  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000',
}
</script>

<template>
  <div class="relative min-h-screen w-full bg-black antialiased">
    <div
      :style="background"
      class="absolute inset-0 z-0"
    />
    <div class="absolute inset-0 z-1 min-h-screen flex items-center justify-center text-#fff">
      <span class="text-4xl font-bold tracking-tight sm:text-7xl">
        <Greating />
      </span>
    </div>
  </div>
</template>
