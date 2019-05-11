import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './pages/home'
// import About from './pages/about'
// import Friend from './pages/friend'
// import Layout from './layout/layout'
import AddTodo from './components/AddTodo'
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

export const App = ({addTodo, completeTodo, setVisibleFilter, filter, todos}) => (
  <div>
    <AddTodo onAddClick={text => addTodo(text)}/>
    <TodoList todos={todos} onTodoClick={index =>
      completeTodo(index)
    }
    />
    <Footer
      filter={filter}
      onFilterChange={
        filter => {
          setVisibleFilter(filter)
        }
      }
    />
  </div>
)
