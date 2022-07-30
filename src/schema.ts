import type { Schema } from '@coobaha/typed-fastify'
import type { Document } from './types'

export interface APISchema extends Schema {
    paths: {
        'GET /v1/:id': {
            request: {
                params: {
                    id: string,
                }
            }
            response: {
                200: {
                    content: Document
                }
                404: {}
            }
        }
        'GET /v1/all': {
            response: {
                200: {
                    content: Document[]
                }
                404: {}
            }
        }
    }
}
