import { defineComponent } from 'vue'
import { Provider } from './components'

export default defineComponent({
  name: 'App',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (
      <Provider>
      </Provider>
    )
  },
})
