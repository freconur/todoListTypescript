import { createContext, useEffect, useState } from "react"
import { Todo, TodoState } from "../Todo"


interface AppState {
    todoState: Todo[]
    todos: Todo[]
    customHooks: any
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


// function useLocalStorage(itemName:string, initialValue: Todo[]) {
    const  useLocalStorage = (itemName:string) => {
//TODO LOCALSTORAGE--------------------> //

        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem: Todo[]
        if(!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify([]))
            parsedItem = []
        } else {
            parsedItem = JSON.parse(localStorageItem)
        }

const [item, setItem] = useState<AppState['todoState']>(parsedItem)

//FUNCION SAVETODOS //
const saveItem = (newItem: Todo[]) => {  
    const stringifiedItem: string = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    const stringDos = JSON.parse(stringifiedItem)
    // setItem(stringDos)
    setItem(newItem)
}
//FUNCION SAVETODOS //
//TODO LOCALSTORAGE--------------------> //
return [
    item,
    saveItem,
]
}

function TodoProvider({ children }: Props) {

     
    // const {item:todoss, saveItem:saveTodos} = useLocalStorage('TODOS', [])
    const [todoss, savetodos] = useLocalStorage('TODOS')
    const [searchValue, setSearchValue] = useState<AppState['todoSearch']>("")
    console.log('todoss', todoss)
    //TODO COUNTER //

    const todoCompleted = todoss?.filter(todo => !!todo.completed).length;
    console.log(todoCompleted,'todoCompleted')
    const totalTodo = todoss.length

    //TODO COUNTER------------------------> //

    //SEARCH TODO//
    let searchedTodos :Todo[]
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


    

    //COMPLETED TODOS Y DELETE TODOS //
    const CompleteTodo = (description:string) => {
        const todoIndex = todoss.findIndex( todo => todo.description === description )
        const newTodos = [...todoss]
        newTodos[todoIndex].completed = !todoss[todoIndex].completed;
        savetodos(newTodos)
    }
    const DeleteTodo = (description:string) => {
        const todoIndex = todoss.findIndex(todo => todo.description === description)
        const newTodos = [...todoss]
        newTodos.splice(todoIndex, 1)
        savetodos(newTodos)
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