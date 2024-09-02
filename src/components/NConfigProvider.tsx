import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import { renderSlot } from 'src/composables/slots'
import { naiveTheme } from 'src/composables/theme'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NConfigProvider',
  inheritAttrs: false,
  render() {
    return (
      <NConfigProvider
        abstract
        namespace="ns"
        inlineThemeDisabled
        theme={naiveTheme.value}
      >
        <NGlobalStyle />
        {renderSlot(this.$slots, 'default')}
      </NConfigProvider>
    )
  },
})
