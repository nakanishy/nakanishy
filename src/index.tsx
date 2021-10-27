import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from '~/pages/Home'
import { WorkList } from '~/pages/WorkList'
import { Privacy as BrellaPrivacy } from '~/pages/privacies/brella/Privacy'
import { Privacy as ColorbasePrivacy } from '~/pages/privacies/colorbase/Privacy'
import { Privacy as DarkenPrivacy } from '~/pages/privacies/darken/Privacy'
import { Privacy as EmojistPrivacy } from '~/pages/privacies/emojist/Privacy'
import { Privacy as JazzPrivacy } from '~/pages/privacies/jazz/Privacy'
import { Privacy as NakerPrivacy } from '~/pages/privacies/naker/Privacy'

import { App } from './App'
import { Header } from './components/Header'
import { About } from './pages/About'
import { WorkDetail } from './pages/WorkDetail'

const Root: React.FC = () => {
  return (
    <App>
      <Header />
      <Switch>
        <Route path="/work/:workId">
          <WorkDetail />
        </Route>
        <Route path="/work">
          <WorkList />
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/colorbase/privacy" exact={true}>
          <ColorbasePrivacy />
        </Route>
        <Route path="/naker/privacy" exact={true}>
          <NakerPrivacy />
        </Route>
        <Route path="/emojist/privacy" exact={true}>
          <EmojistPrivacy />
        </Route>
        <Route path="/darken/privacy" exact={true}>
          <DarkenPrivacy />
        </Route>
        <Route path="/brella/privacy" exact={true}>
          <BrellaPrivacy />
        </Route>
        <Route path="/jazz/privacy" exact={true}>
          <JazzPrivacy />
        </Route>
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
