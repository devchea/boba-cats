import { Resource } from '@triframe/core'
import { include, Model, string, hasMany } from '@triframe/scribe'
import { hash } from 'bcrypt'

export class User extends Resource {
    @include(Model)

    @string 
    username = ""

    @hasMany
    message = []

    @string
    passwordDigest = ""

    static register (username, password) {
        let passwordDigest = hash(password, 10)
        return User.create({ username: username, passwordDigest: passwordDigest })
    }

}