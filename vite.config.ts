import { defineConfig } from 'vite'

// Some @vitejs plugins are ESM-only and may cause errors when loaded via require.
// Dynamically import the plugin so it works in mixed environments.
export default defineConfig(async () => {
  const reactPlugin = (await import('@vitejs/plugin-react')).default
  return {
    plugins: [reactPlugin()]
  }
})
