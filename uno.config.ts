import {
  defineConfig,
  presetTypography,
  presetWind3,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
