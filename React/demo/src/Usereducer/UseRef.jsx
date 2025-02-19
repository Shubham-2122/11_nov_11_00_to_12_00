import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header';

// useRef is a React Hook that lets you reference a value that’s not needed for rendering.

function UseRef() {

    let ref = useRef("")

    const hadndlefocuse=()=>{
        ref.current.focus()
    }

    const hadnlecolor=()=>{
        ref.current.style.background = "red"
    }

  return (
    <div>
        <Header />
        <br />
      <input type="text" ref={ref} placeholder='enter your name' />
      <button onClick={hadndlefocuse}>chnage focus</button>

      <button onClick={hadnlecolor}>Change color</button>
    </div>
  )
}

export default UseRef
