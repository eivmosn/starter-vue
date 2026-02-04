interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_PORT: number
  readonly VITE_PROXY_URL: string
  readonly VITE_APP_PROXY_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
