import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import {Join, Chat} from './components' //
import SignIn from './components/SignIn/SignIn'

const App = () => (
    <Router> //
        <Route path='/' exact component={SignIn} />
        <Route path='/join' component={Join} />
        <Route path='/chat' component={Chat} />
    </Router>
)

export default App