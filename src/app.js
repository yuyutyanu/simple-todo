import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Friend from './pages/friend'
import Layout from './layout/layout'

import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

// <Router>
// <Layout>
// <Switch>
// <Route exact path="/" component={Home}/>
// <Route path="/about" component={About}/>
// <Route path="/friend" component={Friend}/>
// </Switch>
// </Layout>
// </Router>

const App = () => (
  <div>
    <AddTodo onAddClick={text => {console.log(text)}}/>
    <TodoList todos={
      [
        {
          text: 'Use Redux',
          completed: true
        },
        {
          text: 'Learn to connect it to React',
          completed: false
        }
      ]
    } onTodoClick={index =>
      console.log('todo clicked', index)
    }
    />
    <Footer
      filter='SHOW_ALL'
      onFilterChange={
        filter => {
          console.log('filter change', filter)
        }
      }
    />
  </div>
)

export default App