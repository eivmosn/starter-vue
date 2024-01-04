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
        <div class="p-4 h-full base-content">
          <div class="">文字</div>
          <div class="sub-text">描述</div>
          {/* <div class="h-40px p-4 sub-content base-border-full">

          </div> */}
        </div>
      </Provider>
    )
  },
})
