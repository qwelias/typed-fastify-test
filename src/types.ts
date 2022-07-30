import type { ObjectId } from 'mongodb'

export type AB = 'a' | 'b'
export type Plain = { [k: string]: string | number | boolean }

export type Document = {
    _id: ObjectId
    union: AB | Plain
    array: Plain[]
    tuple: [AB, Plain]
    nested?: Document[]
}
