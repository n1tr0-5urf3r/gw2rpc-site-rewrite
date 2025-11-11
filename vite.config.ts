import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// With .json files under public/, Vite serves them directly.
const apiJsonAlias = (): PluginOption => ({
  name: 'api-json-alias',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      let url = (req.url || '').split('?')[0] || ''
      if (!url.startsWith('/api/')) return next()
      if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1)
      // Only alias extensionless paths to their .json file in public
      if (path.extname(url)) return next()
      const publicDir = server.config.publicDir || path.resolve(process.cwd(), 'public')
      const jsonPath = path.join(publicDir, url + '.json')
      fs.stat(jsonPath, (err, stat) => {
        if (!err && stat.isFile()) {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return fs.createReadStream(jsonPath).pipe(res)
        }
        next()
      })
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      let url = (req.url || '').split('?')[0] || ''
      if (!url.startsWith('/api/')) return next()
      if (url.length > 1 && url.endsWith('/')) url = url.slice(0, -1)
      if (path.extname(url)) return next()
      const outDir = server.config.build?.outDir || 'dist'
      const root = server.config.root || process.cwd()
      const baseDir = path.resolve(root, outDir)
      const jsonPath = path.join(baseDir, url + '.json')
      fs.stat(jsonPath, (err, stat) => {
        if (!err && stat.isFile()) {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return fs.createReadStream(jsonPath).pipe(res)
        }
        next()
      })
    })
  },
})

export default defineConfig({
  plugins: [react(), apiJsonAlias()],
})
