import type { Schema } from '@coobaha/typed-fastify'

export type AB = 'a' | 'b'
export type Plain = Record<string, string | number | boolean>

export type Document = {
    union: AB | Plain
    array: Plain[]
    // tuple: [AB, Plain]
    nested?: Document[]
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
