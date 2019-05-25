import React from "react"
import ReactDom from "react-dom"
import App from "./containers/App"
import Settings from "./containers/Settings"
import Layout from './layout/layout'

import { Provider } from "react-redux"
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import configureStore, { history } from './store/config'
import { MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from './static/material-theme'

const store = configureStore(/* provide initial state if any */)

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/settings" component={Settings}></Route>
            <Route exact path="/" component={App}/>
          </Switch>
        </Layout>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
)