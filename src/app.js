import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Friend from './pages/friend'
import Layout from './layout/layout'


const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/friend" component={Friend}/>
      </Switch>
    </Layout>
  </Router>
)

export default App