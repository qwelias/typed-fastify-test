import type { Schema } from '@coobaha/typed-fastify'

export type AB = 'a' | 'b'
export type Plain = { [k: string]: string | number | boolean }

/**
 @type string
*/
interface ObjectId extends String {
    toString(): string;
    toJSON(): string;
}

export type Document = {
    /**
     * @TJS-type string
     */
    _id: ObjectId
    union: AB | Plain
    array: Plain[]
    tuple: [AB, Plain]
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
