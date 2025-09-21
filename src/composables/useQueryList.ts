import type { Ref } from 'vue'
import { computed, ref } from 'vue'

export function useQueryList<T>(data: Ref<T[]>, options: {
  searchFields: (keyof T)[]
  caseSensitive?: boolean
}) {
  const keyWord = ref('')

  const { searchFields = [], caseSensitive = false } = options

  const searchKeyword = computed(() =>
    caseSensitive ? keyWord.value : keyWord.value.toLowerCase(),
  )

  const matchesKeyword = (value: unknown, keyword: string): boolean => {
    if (typeof value === 'string') {
      const str = caseSensitive ? value : value.toLowerCase()
      return str.includes(keyword)
    }
    if (typeof value === 'number') {
      return value.toString().includes(keyword)
    }
    return false
  }

  const filterList = computed(() => {
    const keyword = searchKeyword.value
    if (!keyword || !searchFields.length)
      return data.value

    return data.value.filter(item =>
      searchFields.some(field => matchesKeyword(item[field], keyword)),
    )
  })

  return {
    data: filterList,
    keyWord,
  }
}
