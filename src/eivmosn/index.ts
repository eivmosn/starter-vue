import { definePreset, presetMini } from 'unocss'
import { rules } from './rules'
import { autocomplete } from './autocomplete'

const name = 'unocss-preset-eivmosn'

export default definePreset(() => {
  return {
    name,
    rules,
    autocomplete,
  }
})
