import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.resolve(__dirname, 'docs')

/** GitHub project Pages URL path (must match repo name). */
const pagesBase = '/diensten-bij-mij/'

export default defineConfig({
  // Site source lives in docs/; built output is repo-root dist/ for GitHub Actions upload.
  root: docsDir,
  base: pagesBase,
  plugins: [tailwindcss()],
  server: {
    open: true,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.join(docsDir, 'index.html'),
        loodgieters: path.join(docsDir, 'loodgieters-bij-mij.html'),
        rijschool: path.join(docsDir, 'rijschool-bij-mij.html'),
        thuisbatterij: path.join(docsDir, 'thuisbatterij-bij-mij.html'),
        vakman: path.join(docsDir, 'vakman-bij-mij.html'),
        dakdekker: path.join(docsDir, 'dakdekker-bij-mij.html'),
        slotenmaker: path.join(docsDir, 'slotenmaker-bij-mij.html'),
        ongediertebestrijding: path.join(
          docsDir,
          'ongediertebestrijding-bij-mij.html',
        ),
      },
    },
  },
})
