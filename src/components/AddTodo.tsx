import { useContext } from "react"
import { TodoContext } from "../context"



const AddTodo = () => {

    const {isOpen,setIsOpen} = useContext(TodoContext) 
  return (
    <>
    <button onClick={() => setIsOpen(!isOpen)}>nuevo Todo</button>
    </>
  )
}

export {AddTodo}