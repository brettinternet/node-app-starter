import fastify from 'fastify'

import { port } from 'utils/config'
import { logger } from 'utils/logger'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen({ port }, (err, address) => {
  if (err) {
    logger.error(err)
    process.exit(1)
  }
  logger.info(`Server listening at ${address}`)
})
