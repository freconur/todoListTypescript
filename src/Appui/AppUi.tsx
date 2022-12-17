import { AddTodo } from "../components/AddTodo"
import { TodoCounter } from "../components/TodoCounter"
import TodoForm from "../components/TodoForm"
import { TodoList } from "../components/TodoList"
import { TodoSearch } from "../components/TodoSearch"
import { Modal } from "../modal/Modal"
import './app.css'

const AppUI = () => {
    return (
        <div className="container">
            <TodoCounter/>
            <AddTodo/>
            <TodoSearch/>
            <TodoList />
            <Modal />
        </div>
    )
}

export {AppUI}