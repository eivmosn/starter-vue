import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  inheritAttrs: false,
  render() {
    return (
      <div>
        Hello
        <span class="bg text-(13px blue-500)">Vite!!!</span>
      </div>
    )
  },
})
