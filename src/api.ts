import addSchema, { Service } from '@coobaha/typed-fastify'
import type { FastifyPluginCallback } from 'fastify'
import type { APISchema, Document } from './schema'
import * as jsonSchema from './schema.gen.json'
import { ObjectId } from 'mongodb'

export const routes: FastifyPluginCallback = (fastify, _, done) => {
    addSchema(fastify, { jsonSchema, service })
    done()
}

const sample: Document = {
    _id: new ObjectId(),
    union: 'a',
    array: [{}],
    tuple: ['a', {}],
}

const service: Service<APISchema> = {
    'GET /v1/:id': async (_, reply) => {
        return reply.status(200).send(sample)
    },
    'GET /v1/all': async (_, reply) => {
        return reply.status(200).send([
            sample,
            {
                ...sample,
                nested: [sample],
            }
        ])
    },
}
