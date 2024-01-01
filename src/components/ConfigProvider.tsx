import {
  NConfigProvider,
  NDialogProvider,
  NEl,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'
import { defineComponent, renderSlot } from 'vue'
import { theme } from '../composables/theme'

const GlobalProvider = defineComponent({
  name: 'Global',
  setup() {
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loading = useLoadingBar()
    window.$notification = useNotification()
  },
  render() {
    return (
      <NEl class="h-full bg-[var(--body-color)] text-[var(--text-color-base)]">
        {renderSlot(this.$slots, 'default')}
      </NEl>
    )
  },
})

export const Provider = defineComponent({
  name: 'Provider',
  inheritAttrs: false,
  render() {
    return (
      <NConfigProvider
        class="h-full"
        inlineThemeDisabled
        theme={theme.value}
      >
        <NNotificationProvider>
          <NLoadingBarProvider>
            <NMessageProvider>
              <NDialogProvider>
                <GlobalProvider>
                  {renderSlot(this.$slots, 'default')}
                </GlobalProvider>
              </NDialogProvider>
            </NMessageProvider>
          </NLoadingBarProvider>
        </NNotificationProvider>
      </NConfigProvider>
    )
  },
})
