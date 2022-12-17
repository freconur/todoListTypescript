import { TodoCounter } from "../components/TodoCounter"
import TodoForm from "../components/TodoForm"
import { TodoList } from "../components/TodoList"
import { TodoSearch } from "../components/TodoSearch"
import './app.css'

const AppUI = () => {
    return (
        <div className="container">
            <TodoCounter/>
            <TodoSearch/>
            <TodoList />
            <TodoForm />
        </div>
    )
}

export {AppUI}