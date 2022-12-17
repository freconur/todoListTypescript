import { useState } from 'react'
import {Todo} from '../Todo'
import './todoForm.css'



const TodoForm = () => {
  // const [formData, setformData] = useState<formState['formData']>()
  const INITIAL_VALUE = 
    {
      id: '',
      description: '',
      completed: false
    }
  
  const [formData, setformData] = useState<Todo>(INITIAL_VALUE)
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
        [e.target.name]: e.target.value,
    })

}
 console.log('formData',formData)
const handleOnSumit = () => {

}
  return (
    <form onSubmit={handleOnSumit} action="">
        Agregar nuevo Todo List
        <input onChange={handleOnChange} name="description" type="text"  placeholder="escribe un todo list" />
        <input onChange={handleOnChange} name="id" type="text"  placeholder="escribe un id" />
    </form>
    )
}

export default TodoForm
