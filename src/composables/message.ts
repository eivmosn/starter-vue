import type { DialogOptions as NaiveDialogOptions } from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'
import { ref } from 'vue'

type NDialogOptions = Omit<NaiveDialogOptions, 'onClose' | 'positiveButtonProps' | 'negativeButtonProps' | 'onPositiveClick' | 'onNegativeClick'>
type CloseFn = (fns: {
  setLoading: (state: boolean) => void
  close: () => void
}) => void

interface DialogOptions extends NDialogOptions {
  onPositiveClick?: CloseFn
  onNegativeClick?: CloseFn
  onClose?: CloseFn
}

const naive = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
)

export const { message, notification, loadingBar } = naive

export function confirm(options: DialogOptions) {
  const loadingRef = ref(false)
  const setLoadingRef = (state: boolean) => loadingRef.value = state

  const _dialog = naive.dialog.create({
    ...options,
    maskClosable: false,
    positiveButtonProps: {
      size: 'medium',
      loading: loadingRef as unknown as boolean,
    },
    negativeButtonProps: {
      size: 'medium',
    },
    onPositiveClick: () => {
      if (options.onPositiveClick) {
        options.onPositiveClick({
          setLoading: setLoadingRef,
          close: () => _dialog.destroy(),
        })
        return false
      }
      return true
    },
    onNegativeClick: () => {
      if (options.onNegativeClick) {
        options.onNegativeClick({
          setLoading: setLoadingRef,
          close: () => _dialog.destroy(),
        })
        return false
      }
      return true
    },
    onClose() {
      if (options.onClose) {
        options.onClose({
          setLoading: setLoadingRef,
          close: () => _dialog.destroy(),
        })
        return false
      }
      return true
    },
  })
}
