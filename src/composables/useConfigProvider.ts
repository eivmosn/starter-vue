import { createDiscreteApi } from 'naive-ui'

export function useConfigProvider() {
  const { message } = createDiscreteApi(
    [
      'message',
      'dialog',
      'notification',
      'loadingBar',
      'modal',
    ],
  )

  window.$message = message
}
