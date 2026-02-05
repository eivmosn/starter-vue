import type { ConfigProviderProps } from 'naive-ui'
import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'
import { isDark } from './useDark'

const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
  abstract: true,
  inlineThemeDisabled: true,
  theme: isDark.value ? darkTheme : lightTheme,
}))

export const {
  dialog,
  message,
  loadingBar,
  notification,
} = createDiscreteApi(
  [
    'modal',
    'dialog',
    'message',
    'loadingBar',
    'notification',
  ],
  {
    configProviderProps: configProviderPropsRef,
  },
)
