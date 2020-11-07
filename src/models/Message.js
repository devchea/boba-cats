import { Model, string, include } from '@triframe/scribe'
import { Resource } from '@triframe/core'
import { belongsTo } from '@triframe/scribe/dist/decorators'

export class Message extends Resource {

    @include(Model)

    @string
    content = ""

    @belongsTo
    user = null
}