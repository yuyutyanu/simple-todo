import React from "react"
import ReactDom from "react-dom"
import App from "./containers/app"
import {Tabs} from "./pages/Tabs"
import Layout from './layout/layout'

import { Provider } from "react-redux"
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import configureStore, { history } from './store/config'

const store = configureStore(/* provide initial state if any */)

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <Layout>
        <Switch>
            <Route exact path="/" component={Tabs}></Route>
            <Route exact path="/:id" component={App}/>
        </Switch>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById("root")
)