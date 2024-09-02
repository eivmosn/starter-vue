import { defineComponent } from 'vue'
import Hello from 'src/pages/Hello'
import NConfigProvider from 'src/components/NConfigProvider'

export default defineComponent({
  name: 'App',
  inheritAttrs: false,
  render() {
    return (
      <NConfigProvider>
        <Hello />
      </NConfigProvider>
    )
  },
})
