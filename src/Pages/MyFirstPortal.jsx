import React from 'react'
import ReactDOM from 'react-dom'

const MyFirstPortal = () => {
    return (
        ReactDOM.createPortal(<div>
            <h1>This is MyFirst Portal</h1>
            <h1>Outside the Dom</h1>
       </div>,document.getElementById("root1"))
    )
}

export default MyFirstPortal
