import { definePreset } from 'unocss'
import { rules } from './rules'
import { autocomplete } from './autocomplete'

const name = 'unocss-preset-eivmosn'

export default definePreset(() => {
  return {
    name,
    rules,
    autocomplete,
    // shortcuts: [
    //   ['base-text', 'text-#000 dark:text-#fff'],
    //   ['sub-text', 'text-[rgb(118,124,130)] dark:text-[rgba(255,255,255,0.52)]'],
    //   ['base-content', 'bg-#fff dark:bg-[rgb(16,16,20)]'],
    //   ['sub-content', 'bg-#fff dark:bg-[rgb(24,24,28)]'],
    //   ['base-border', 'b-[rgb(239,239,245)] dark:b-[rgba(255,255,255,0.09)] b-solid b-1'],
    //   ['base-border-top', 'b-[rgb(239,239,245)] dark:b-[rgba(255,255,255,0.09)] b-top-solid b-top-1 b-top'],
    //   ['base-border-bottom', 'b-[rgb(239,239,245)] dark:b-[rgba(255,255,255,0.09)] b-bottom-solid b-bottom-1 b-bottom'],
    // ],
  }
})
