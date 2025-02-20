import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice';

function Counter() {

    // data store
    const count = useSelector((state)=> state.counter.value);

    // reducer function disptch hook
    const disptch = useDispatch();

  return (
    <div>
      <h1>hello counter :-  {count}</h1>

      <button onClick={()=>disptch(increment())}>Increment</button>
      <button onClick={()=>disptch(decrement())}>Decrement</button>
      <button onClick={()=>disptch(zero())}>Zero</button>
    </div>
  )
}

export default Counter
