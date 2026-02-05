import { useDark, useToggle } from '@vueuse/core'
import { darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const theme = computed(() => {
  return isDark.value ? darkTheme : lightTheme
})
