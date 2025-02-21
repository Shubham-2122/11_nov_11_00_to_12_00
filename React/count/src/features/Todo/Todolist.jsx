import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from './todoSlice'

function Todolist() {

    const todo = useSelector((state)=>state.todos.todos)

    // console.log(todo)

    const dispatch = useDispatch()

  return (
    <div>
      <ul>
        {
            todo && todo.map((todos,index)=>{
                console.log(todos)
                return(
                    <li key={index}>{todos} <button onClick={()=>dispatch(removetodo(index))}>Remove</button> <button>Edit</button></li>
                )
            })
        }
        
      </ul>
    </div>
  )
}

export default Todolist
