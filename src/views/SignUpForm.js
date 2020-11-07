import React from 'react'
import { tether, Container, Heading, TextInput, PasswordInput, Button } from '@triframe/designer'

export const SignUpForm = tether(function*({ models }){
    const { User } = models

    const form = yield {
        username: '',
        password: ''
    }

    return (
        <Container>
            <Heading>Sign Up</Heading>
            <TextInput 
                label="Username"
                value={form.username}
                onChange={value => form.username = value}
            />
            <PasswordInput
                label="Password"
                value={form.password}
                onChange={value => form.password = value}
            />
            <Button onPress={async () => {
                await User.register(form.username, form.password)
            }}>
                Sign Up
            </Button>
        </Container>
    )
})