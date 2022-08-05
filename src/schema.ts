import type { Schema } from '@coobaha/typed-fastify'
import type { Document } from './types'

/**
 @type string
*/
// @ts-ignore
interface ObjectId {
    toString(): string
    toJSON(): string
}

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
