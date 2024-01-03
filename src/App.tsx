import { defineComponent } from 'vue'
import { Provider } from '@/components'

export default defineComponent({
  name: 'App',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (
      <Provider>
        <div class="flex-center">13</div>
      </Provider>
    )
  },
})
