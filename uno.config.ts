import {
    defineConfig,
    presetUno,
    transformerVariantGroup,
} from 'unocss';

export default defineConfig({
    presets: [
        presetUno()
    ],
    transformers: [
        transformerVariantGroup()
    ],
    rules: [
        ['align-content-baseline', {
            'align-content': 'baseline',
        },],
        [/^grid-temp-(\d+)$/, ([, d]) => ({
            'grid-template-columns': `repeat(${d}, minmax(0px, 1fr))`,
        })
        ],
        [/^flex-(center|end|start)$/, ([, d]) => ({
            'display': 'flex',
            'align-items': d,
            'justify-content': d,
        })],
        [/^b-(top|bottom|left|right)/, ([, d]) => ({
            [`border-${d}`]: '1px solid'
        })],
    ],
    autocomplete: {
        templates: [
            'flex-<pos>',
            'grid-temp-<cols>',
            'b-<location>'
        ],
        shorthands: {
            pos: '(center|end|start)',
            cols: '(6|12|24)',
            location: '(top|left|right|bottom)'
        }
    }
})