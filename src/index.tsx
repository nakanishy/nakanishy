import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from '~/pages/Home'

import { App } from './App'

const Root: React.FC = () => {
  return (
    <App>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </App>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  document.getElementById('react-root')
)
