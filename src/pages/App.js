import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'



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
