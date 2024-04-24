import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  inheritAttrs: false,
  render() {
    return (
      <div>
        Hello
        <span class="text-orange text-2em">Vite!!!</span>
      </div>
    )
  },
})
