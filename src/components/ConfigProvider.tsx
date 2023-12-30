import {
  NConfigProvider,
  NDialogProvider,
  NEl,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'
import { defineComponent, renderSlot } from 'vue'

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
