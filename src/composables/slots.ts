import type { Slots } from 'vue'
import { renderSlot as _renderSlot } from 'vue'

type SlotProps = Record<string, unknown>

export function renderSlot<T extends string>(slots: Slots, name: T, props: SlotProps = {}) {
  return _renderSlot(slots, name, props)
}
