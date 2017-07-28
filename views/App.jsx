import React from 'react'
import Layout from './Layout.jsx'
import { Route, Switch } from 'react-router-dom'

import Index from './Index.jsx'
import About from './About.jsx'
import NotFound from './NotFound.jsx'

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
}
