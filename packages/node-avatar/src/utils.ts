import http from 'node:http'

import consola from 'consola'
import { colors } from 'consola/utils'

import finalhandler from 'finalhandler'

import serveStatic from 'serve-static'

export function startServer(dir: string) {
  const serve = serveStatic(dir, {
    extensions: ['html'],
  })
  const server = http.createServer((req, res) => {
    serve(req, res, finalhandler(req, res))
  })
  server.listen(3000)
  consola.info(`Server avatar.html running at ${colors.cyan('http://localhost:3000/avatar')}`)
  return {
    closeServer() {
      server.close()
    },
  }
}
