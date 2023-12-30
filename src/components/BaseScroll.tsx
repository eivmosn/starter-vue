import { NScrollbar, scrollbarProps } from 'naive-ui'
import type { ExtractPublicPropTypes, PropType } from 'vue'
import { computed, defineComponent, renderSlot } from 'vue'

export const baseScrollProps = {
  padding: {
    type: [String, Number] as PropType<string | number>,
    default: 8,
  },
  ...scrollbarProps,
} as const

export type BaseScrollProps = ExtractPublicPropTypes<typeof baseScrollProps>

export default defineComponent({
  name: 'BaseScroll',
  inheritAttrs: false,
  props: baseScrollProps,
  extends: NScrollbar,
  setup(props) {
    const style = computed(() => {
      return {
        padding: props.padding,
      }
    })
    return {
      style,
    }
  },
  render() {
    return (
      <NScrollbar {...this.$attrs}>
        <div style={this.style}>
          {renderSlot(this.$slots, 'default')}
        </div>
      </NScrollbar>
    )
  },
})
