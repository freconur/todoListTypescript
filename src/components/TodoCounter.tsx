import { useContext } from "react"
import { TodoContext } from "../context"



const TodoCounter = () => {

   

    const {todoCompleted,totalTodo} = useContext(TodoContext)
    return (
        <div>
           <h1>{todoCompleted} completado de {totalTodo}</h1>
        </div>
    )
}

export {TodoCounter}