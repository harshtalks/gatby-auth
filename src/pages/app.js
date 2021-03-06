import React from 'react'
import {Router} from '@reach/router'
import Layout from '../components/Layout'
import PrivateRoute from '../components/privateRoute'
import Profile from '../components/profile'
import Login from '../components/login'

const App = () => {
    return (<Layout>
        <Router>
            <PrivateRoute path = "/app/profile" component = {Profile}/>
            <Login path = "/app/login" />
        </Router>
    </Layout>)
}

export default App
