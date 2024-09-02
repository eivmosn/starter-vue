import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (
      <div class="p-10">
        {this.$t('hello')}
        <span class="text-(23px blue-500)">Vite!!!</span>
      </div>
    )
  },
})
