import React, { useEffect, useState } from "react"
import axios from "axios"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export const List = ({ children }) => {
  const [todos, setTodos] = useState([])
  console.log(todos)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => setTodos(res.data))
  }, [])
  return (
    <ul>
      <TransitionGroup>
        {todos.map((todo, i) => (
          <CSSTransition
            key={todo.id}
            classNames="todo"
            timeout={todos.length * 10}
            style={{
              transitionDelay: `${i * 1000}ms`
            }}
          >
            <li>{todo.title}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}
