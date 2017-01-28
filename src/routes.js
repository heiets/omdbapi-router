import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Single from './components/Single'
import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/:single' component={Single}>
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
