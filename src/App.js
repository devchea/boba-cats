import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { MainPage } from './views/MainPage'
import { SignUpForm } from './views/SignUpForm'

export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={SignUpForm}/>
    </Provider>
)
