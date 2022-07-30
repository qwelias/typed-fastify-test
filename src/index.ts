import Fastify from 'fastify'
import swagger from '@fastify/swagger'
import { openapi } from './config'
import { routes } from './api'

const fastify = Fastify({
    logger: true,
})

fastify.register(swagger, openapi)
fastify.register(routes)

fastify.listen({ port: Number(process.env['PORT']) || 3000 }, (err) => {
    if (!err) return

    fastify.log.error(err)
    process.exit(1)
})
