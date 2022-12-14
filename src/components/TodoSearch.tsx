import { useContext } from "react"
import { TodoContext } from "../context"


const TodoSearch = () => {
	const { searchValue, setSearchValue } = useContext(TodoContext)
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		console.log("value", e.target.value)
	}

	return (
		<>
			<input value={searchValue} onChange={handleChange} type="text" placeholder="busqueda de todos" />
		</>
	)
}

export { TodoSearch }