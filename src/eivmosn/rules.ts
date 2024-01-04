import type { Rule } from 'unocss'

export const rules: Rule[] = [
  ['align-content-baseline', {
    'align-content': 'baseline',
  }],
  [/^grid-temp-(\d+)$/, ([, d]) => ({
    'grid-template-columns': `repeat(${d}, minmax(0px, 1fr))`,
  })],
  [/^flex-(center|end|start)$/, ([, d]) => ({
    'display': 'flex',
    'align-items': d,
    'justify-content': d,
  })],
  [/^b-(top|bottom|left|right)/, ([, d]) => ({
    [`border-${d}`]: '1px solid',
  })],
  [/^base-(text|content)/, ([, d]) => {
    const text = `
        .dark .base-${d} {
            color: #fff
        }
        .base-text {
            color: #000
        }
    `
    const content = `
        .dark .base-${d} {
            background-color: rgb(16,16,20)
        }
        .base-${d} {
            background-color: #fff
        }
    `
    if (d === 'text')
      return text
    return content
  }],
]
