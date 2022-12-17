import ReactDOM  from "react-dom"
import React from "react"


export enum PortalTarget {
    MODAL = 'modal',
    ROOT = 'root'
}

interface PortalProps {
    target: PortalTarget,
    children: JSX.Element | JSX.Element[]
}

const Portal = ({target, children} : PortalProps) => {
    const domElement = document.getElementById(target)

    return domElement 
    ? ReactDOM.createPortal(children, domElement)
    : null
}

export {Portal}