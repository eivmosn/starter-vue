import type { ConfigBase } from 'unocss'

export const autocomplete: ConfigBase['autocomplete'] = {
  templates: [
    'flex-<pos>',
    'grid-temp-<cols>',
    'b-<location>',
  ],
  shorthands: {
    pos: '(center|end|start)',
    cols: '(6|12|24)',
    location: '(top|left|right|bottom)',
  },
}
