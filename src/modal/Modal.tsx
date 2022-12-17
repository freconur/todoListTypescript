import { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import { TodoContext } from '../context'
import { Portal, PortalTarget } from './Portal'

interface Props {
    children: JSX.Element | JSX.Element[]
    portal: JSX.Element | Element | DocumentFragment
}


const Modal = () => {
    const {isOpen} = useContext(TodoContext)

    return isOpen
    ?

    (<Portal target={PortalTarget.MODAL}>
        <TodoForm />      
    </Portal>)
    
    : null

}
  

export {Modal}
