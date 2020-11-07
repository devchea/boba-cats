import { Resource } from '@triframe/core'
import { include, Model, string, session, stream } from '@triframe/scribe'
import { hash, compare } from 'bcrypt'

export class User extends Resource {
    @include(Model)

    @string 
    username = ""

    @string
    passwordDigest = ""

    static async register (username, password) {
        let existingUsersWithTheSameName = await User.where({ username: username })
        if(existingUsersWithTheSameName.length > 0){
            throw Error('A user with this username already exists')
        }
        let passwordDigest = await hash(password, 10)
        return User.create({ username: username, passwordDigest: passwordDigest })
    }

    @session
    static async login(session, username, password){

        let [ user ] = await User.where({ username })
        console.log('user', user);

        if(user == undefined){
            throw Error('Username or Password are incorrect')
        }
        if(!await compare(password, user.passwordDigest)){
            throw Error('Username or Password are incorrect')
        }
        session.loggedInUserId = user.id
        return true
    }

    @session
    @stream
    static *current(session){
        return (
            session.loggedInUserId !== null
                ? yield User.read(session.loggedInUserId)
                : null
        )
    }
}