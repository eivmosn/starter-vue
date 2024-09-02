import { useDark, useToggle } from '@vueuse/core'
import type { GlobalTheme } from 'naive-ui'
import { darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'

export const isDark = useDark({
  storageKey: null,
})
export const toggleDark = useToggle(isDark)
export const naiveTheme = computed<GlobalTheme>(() => isDark.value ? darkTheme : lightTheme)
