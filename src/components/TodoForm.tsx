import { useContext } from 'react'
import { TodoContext } from '../context'
import './todoForm.css'



const TodoForm = () => {
  // const [formData, setformData] = useState<formState['formData']>()
  
  const {formData, setformData, addTodo} = useContext(TodoContext)
  
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
        [e.target.name]: e.target.value,
    })

}
const handleOnSumit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  addTodo(formData)
}
  return (
    <form onSubmit={handleOnSumit} >
        Agregar nuevo Todo List
        <input onChange={handleOnChange} name="description" type="text"  placeholder="escribe un todo list" />
        <input onChange={handleOnChange} name="id" type="text"  placeholder="escribe un id" />
        <button>agregar</button>
    </form>
    )
}

export default TodoForm
