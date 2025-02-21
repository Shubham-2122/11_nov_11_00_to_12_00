import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoSlice'

function Addtodo() {

    const [adddata,setadddata] = useState("")

    // const todo = useSelector((state)=>state.todos.todos)

    const disptch = useDispatch()

    const dataadd=()=>{
        disptch(addTodo(adddata));
        setadddata("")
    }

  return (
    <div>
      <input type="text" value={adddata} onChange={(e)=>setadddata(e.target.value)} placeholder='Enter your data' />
      <button onClick={dataadd}>Add data</button>
    </div>
  )
}

export default Addtodo
