import React from 'react'
import { tether, Container, Heading, TextInput, PasswordInput, Button, HelperText } from '@triframe/designer'

export const LoginForm = tether(function*({ Api }){
    const { User } = Api

    const form = yield {
        username: '',
        password: '',
        errorMessage: null
    }

    return (
        <Container>
            <section>
            <Heading>Login</Heading>
            </section>
            
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
                try {
                    await User.login(form.username, form.password)
                }catch(error){
                    form.errorMessage = error.message
                }
            }}>
                Login
            </Button>
            <HelperText type ="error" visible={form.errorMessage !== null}>
                {form.errorMessage}
            </HelperText>
        </Container>
    )
})