import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  inheritAttrs: false,
  render() {
    return (
      <div>
        Hello
        <span class="text-(23px blue-500)">Vite!!!</span>
      </div>
    )
  },
})
