import { createContext, useState } from "react"
import { Todo, TodoState } from "../Todo"


interface AppState {
    todoState: Todo[]
    todos: Todo[]
    todoSearch: string
}
interface Props {
    children: JSX.Element | JSX.Element[]
}
type todoContextProvider = {
    todoss: Todo[],
    searchValue: string,
    setSearchValue: (searchValue: string) => void,
    searchedTodos:Todo[],
    totalTodo: number,
    todoCompleted: number,
    CompleteTodo: (description:string) => void,
    DeleteTodo: (description:string) => void,
}

const TodoContext = createContext<todoContextProvider>({} as todoContextProvider)

const INITIAL_STATE: Todo[] = [
    
        {
            id: "1",
            description: 'salir a correr',
            completed: false,
        },
        {
            id: "2",
            completed: false,
            description: 'estudiar ingles intermedio'
        },
        {
            id: "3",
            completed: false,
            description: 'practice typescript'
        },
        {
            id: "4",
            completed: true,
            description: 'creado proyecto de javascript'
        }
    
]


function TodoProvider({ children }: Props) {

     //TODO LOCALSTORAGE--------------------> //

     const localStorageTodos = localStorage.getItem('TODOS')
     let parsedTodos: Todo[]
    if(!localStorageTodos) {
        localStorage.setItem('TODOS',JSON.stringify([]))
        parsedTodos = []
     } else {
        parsedTodos = JSON.parse(localStorageTodos)
     }
 
     //TODO LOCALSTORAGE--------------------> //

    const [todoss, setTodos] = useState<AppState['todoState']>(parsedTodos)
    const [searchValue, setSearchValue] = useState<AppState['todoSearch']>("")
    const [comCletedTodos, setCompletedTodos] = useState(false)
    console.log('todoss',todoss)
    console.log('parsedTodos',parsedTodos)
    
    //TODO COUNTER //

    const todoCompleted = todoss.filter(todo => !!todo.completed).length;
    console.log(todoCompleted,'todoCompleted')
    const totalTodo = todoss.length

    //TODO COUNTER------------------------> //

    //SEARCH TODO//
    let searchedTodos: Todo[]
	if (searchValue.length === 0) {
		searchedTodos = todoss 
	} else {
		searchedTodos = todoss.filter((todo) => {
			const todoDescripcion = todo.description.toLowerCase()
			const searchText = searchValue.toLowerCase();
			return todoDescripcion.includes(searchText)
		})
	}
    //SEARCH TODO//


    //FUNCION SAVETODOS //
    const SaveTodos = (todos: Todo[]) => {  
        localStorage.setItem('TODOS', JSON.stringify(todos))
        setTodos(todos)
    }
    //FUNCION SAVETODOS //

    //COMPLETED TODOS Y DELETE TODOS //
    const CompleteTodo = (description:string) => {
        const todoIndex = todoss.findIndex( todo => todo.description === description )
        const newTodos = [...todoss]
        newTodos[todoIndex].completed = !todoss[todoIndex].completed;
        SaveTodos(newTodos)
    }
    const DeleteTodo = (description:string) => {
        const todoIndex = todoss.findIndex(todo => todo.description === description)
        const newTodos = [...todoss]
        newTodos.splice(todoIndex, 1)
        SaveTodos(newTodos)
    }
    //COMPLETED TODOS Y DELETE TODOS //

    return (
        <TodoContext.Provider value={{
            //cada props que pase por aqui tiene que estar tipado de lo contrario typscript me dara error cuando quiera consumir lkas props en lso componentes hijos
            todoss,
            searchValue,
            setSearchValue,
            searchedTodos,
            todoCompleted,
            totalTodo,
            CompleteTodo,
            DeleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export { TodoProvider, TodoContext }