import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'
import { defineComponent, renderSlot } from 'vue'

const Global = defineComponent({
  name: 'Global',
  setup() {
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loading = useLoadingBar()
    window.$notification = useNotification()
  },
  render() {
    return renderSlot(this.$slots, 'default')
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
                <Global>
                  123123
                </Global>
              </NDialogProvider>
            </NMessageProvider>
          </NLoadingBarProvider>
        </NNotificationProvider>
      </NConfigProvider>
    )
  },
})
