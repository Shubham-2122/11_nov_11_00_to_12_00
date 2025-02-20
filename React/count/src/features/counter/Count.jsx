import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from './counterSlice';

function Count() {

    const count = useSelector((state)=> state.counter.value);

    const disptch = useDispatch()

  return (
    <div>
      <h1>hello counter 2 :- {count}</h1>
      <button onClick={()=>disptch(decrement())}>Decrement</button>
    </div>
  )
}

export default Count
