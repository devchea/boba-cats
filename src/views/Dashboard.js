import React from 'react'
import { tether, Container, Heading, Button } from '@triframe/designer'

export const Dashboard = tether(function*({ redirect }){
    const logout = () => {
        localStorage.clear()
        redirect("/")
    }

    return (
        <Container>
            <Heading>Menu</Heading>
            <Button
                onPress={logout}
            >
                Logout
            </Button>
        </Container>
    )
})
