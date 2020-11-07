import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { SignUpForm } from './views/SignUpForm'
import { LoginForm} from './views/LoginForm'

export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm}/>
    </Provider>
)
