<script setup lang="tsx">
import type { CSSProperties, FunctionalComponent } from 'vue'
import { ref } from 'vue'

interface Props {
  text?: string
  style?: CSSProperties
}

const content = ref<string>('Hello World!')

const HelloWorld: FunctionalComponent<Props> = (props) => {
  return (
    <div style={props.style}>
      {props.text}
    </div>
  )
}
</script>

<template>
  <HelloWorld style="color: white" :text="content" />
</template>
