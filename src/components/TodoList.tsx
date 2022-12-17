import { useContext } from "react"
import { TodoContext } from "../context"
import "./todoList.css"

const TodoList = () => {
  const { todoss, searchedTodos, CompleteTodo, DeleteTodo } = useContext(TodoContext)
  // const {todos} = todoss
  console.log('searchedTodos', searchedTodos)
  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {searchedTodos.map(todo => {
          return (
            <li>
              <span className={`check ${todo.completed && "check_completed"}`} onClick={() => CompleteTodo(todo.description)}>✓</span>
              <h2 className={`${todo.completed && "description_completed"}`}>{todo.description}</h2>
              <span onClick={() => DeleteTodo(todo.description)}>X</span>

            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { TodoList }